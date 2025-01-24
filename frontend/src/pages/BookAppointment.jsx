import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, FileText, Upload, MapPin } from 'lucide-react';

const BookAppointment = () => {
  const navigate = useNavigate();
  
  // State to manage form data
  const [formData, setFormData] = useState({
    serviceType: 'vehicle_registration',
    appointmentDate: '',
    appointmentTime: '',
    city: '', // Added city field
    documents: [],
  });

  const [error, setError] = useState('');

  // Handle file input change
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFormData({ ...formData, documents: Array.from(e.target.files) });
    }
  };

  // Form submission (without backend call)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // For now, just log form data

    // Simulate a successful form submission and navigate
    setTimeout(() => {
      navigate('/dashboard');  // This will navigate to /dashboard after form submission
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-16 px-8 sm:px-10 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-indigo-700">Book an Appointment</h2>
            <p className="mt-4 text-xl text-gray-600">Schedule your RTO service appointment with ease!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-md text-lg">
                {error}
              </div>
            )}

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-3">Service Type</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FileText className="h-6 w-6 text-gray-400" />
                </div>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="appearance-none block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                >
                  <option value="vehicle_registration">Vehicle Registration</option>
                  <option value="driving_licence">Driving License</option>
                  <option value="road_tax">Road Tax</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="h-6 w-6 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="appointmentDate"
                    required
                    value={formData.appointmentDate}
                    onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="appearance-none block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">Time</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Clock className="h-6 w-6 text-gray-400" />
                  </div>
                  <input
                    type="time"
                    name="appointmentTime"
                    required
                    value={formData.appointmentTime}
                    onChange={(e) => setFormData({ ...formData, appointmentTime: e.target.value })}
                    className="appearance-none block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-3">City</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin className="h-6 w-6 text-gray-400" />
                </div>
                <select
                  name="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="appearance-none block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                >
                  <option value="">Select a City</option>
                  <option value="pune">Pune</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="nashik">Nashik</option>
                  {/* Add more cities as needed */}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-3">Upload Documents</label>
              <div className="mt-4 flex justify-center px-8 pt-6 pb-8 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-2 text-center">
                  <Upload className="mx-auto h-14 w-14 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="documents"
                      className="relative cursor-pointer bg-white rounded-md font-semibold text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload files</span>
                      <input
                        id="documents"
                        name="documents"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-2">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, PNG, JPG up to 10MB each
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-lg text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
