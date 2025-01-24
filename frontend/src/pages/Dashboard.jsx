import{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText, Clock, Award, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import QRCode from 'qrcode.react';

const Dashboard = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [activeTab, setActiveTab] = useState('appointments');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appointmentsRes, documentsRes] = await Promise.all([
          axios.get('http://localhost:5000/api/appointments', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          }),
          axios.get('http://localhost:5000/api/documents', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          })
        ]);

        setAppointments(appointmentsRes.data);
        setDocuments(documentsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100 mb-4">
                  <Award className="h-10 w-10 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
                <p className="text-gray-500">{user?.rank}</p>
                <p className="text-gray-500">{user?.branch}</p>
              </div>

              {user?.militaryId && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Priority Access QR</h3>
                  <div className="flex justify-center">
                    <QRCode
                      value={user.militaryId}
                      size={180}
                      level="H"
                      includeMargin={true}
                      className="p-2 bg-white rounded-lg shadow-sm"
                    />
                  </div>
                  <p className="mt-4 text-sm text-gray-500 text-center">
                    Show this QR code at the RTO office for priority service
                  </p>
                </div>
              )}

              <div className="mt-6">
                <Link
                  to="/book-appointment"
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book New Appointment
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab('appointments')}
                    className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                      activeTab === 'appointments'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Calendar className="h-5 w-5 inline-block mr-2" />
                    Appointments
                  </button>
                  <button
                    onClick={() => setActiveTab('documents')}
                    className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                      activeTab === 'documents'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <FileText className="h-5 w-5 inline-block mr-2" />
                    Documents
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'appointments' ? (
                  <div className="space-y-6">
                    {appointments.length === 0 ? (
                      <div className="text-center py-12">
                        <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments found</h3>
                        <p className="text-gray-500">Book your first appointment to get started</p>
                      </div>
                    ) : (
                      appointments.map((appointment) => (
                        <div
                          key={appointment._id}
                          className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <Calendar className="h-6 w-6 text-gray-400" />
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-gray-900">
                                  {appointment.serviceType.replace('_', ' ').toUpperCase()}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  <Clock className="h-4 w-4 inline-block mr-1" />
                                  {new Date(appointment.appointmentDate).toLocaleString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              {appointment.priority && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                  Priority
                                </span>
                              )}
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                  appointment.status
                                )}`}
                              >
                                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {documents.length === 0 ? (
                      <div className="text-center py-12">
                        <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
                        <p className="text-gray-500">Upload documents during appointment booking</p>
                      </div>
                    ) : (
                      documents.map((document) => (
                        <div
                          key={document._id}
                          className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <FileText className="h-6 w-6 text-gray-400" />
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-gray-900">
                                  {document.type.replace('_', ' ').toUpperCase()}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  Uploaded on {new Date(document.uploadedAt).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                document.status
                              )}`}
                            >
                              {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
