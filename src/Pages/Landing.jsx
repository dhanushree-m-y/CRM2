import React from "react"; 
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate(`${role}`);
  };

  return (
    <div className="bg-background text-text min-h-screen">
      {/* Header with Login Button */}
      <header className="relative bg-background-card shadow-card py-6 px-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-text">flariex</h2>
        
        {/* Login Button - Positioned in Top Right */}
        <button 
          onClick={() => navigate('/login')}
          className="bg-status-info text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold text-text">
          Streamline Your Workshop Management
        </h2>
        <p className="text-lg text-text-muted mt-4">
          Automate lead generation, proposals, teacher recruitment, and
          workshop execution—all in one place.
        </p>
        
        {/* Role Selection Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => handleRoleSelection('/tech')}
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark"
          >
            Tech Team
          </button>
          <button 
            onClick={() => handleRoleSelection('/sales')}
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark"
          >
            Sales Team
          </button>
          <button 
            onClick={() => handleRoleSelection('/marketing')}
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark"
          >
            Marketing Team
          </button>
          <button 
            onClick={() => handleRoleSelection('/admin')}
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark"
          >
            Admin
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-8 bg-background">
        <h3 className="text-3xl font-semibold text-center text-text">
          Key Features
        </h3>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Lead Management"
            description="Track and convert institutional leads efficiently."
          />
          <FeatureCard
            title="AI-Powered Proposals"
            description="Generate and enhance workshop proposals automatically."
          />
          <FeatureCard
            title="Teacher Coordination"
            description="Find and assign qualified instructors seamlessly."
          />
          <FeatureCard
            title="Real-Time Tracking"
            description="Monitor workshop execution and feedback in real time."
          />
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description }) => (
  <div className="bg-background-card shadow-card p-6 rounded-lg text-center">
    <h4 className="text-xl font-semibold text-text">{title}</h4>
    <p className="text-text-muted mt-2">{description}</p>
  </div>
);

export default Landing;
