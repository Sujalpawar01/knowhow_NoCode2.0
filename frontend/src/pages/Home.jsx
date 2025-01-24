import { Link } from "react-router-dom";
import { Shield, Award, Clock, FileText } from "react-feather";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-32 shadow-xl"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?auto=format&fit=crop&q=80")',
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            RTO Special Recognition System for Military Officers
          </h1>
          <p className="text-2xl text-gray-200 mb-10">
            Dedicated service for our nation's heroes
          </p>
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-10 py-4 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Exclusive benefits for military personnel
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-indigo-600" />}
              title="Priority Service"
              description="Dedicated counters and expedited processing for military personnel."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-indigo-600" />}
              title="Special Recognition"
              description="QR-based identification system for instant recognition."
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-indigo-600" />}
              title="Quick Appointments"
              description="Fast-track appointment booking system."
            />
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-indigo-600" />}
              title="Document Verification"
              description="Streamlined document verification process for faster approvals."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition">
    <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-lg text-gray-600">{description}</p>
  </div>
);
