import { useState } from "react";  
import { useNavigate } from "react-router-dom";

const LeadRegister = () => {
  const [role] = useState("Lead");
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-default text-text-default">
      <h2 className="text-2xl font-bold mb-4">Register here</h2>

      {/* Button to Navigate to Lead Register (Placed Outside the Form) */}
      <button 
        onClick={() => navigate("/register/member")} 
        className="w-96 p-2 rounded bg-status-info text-white hover:bg-blue-700 mb-6"
        aria-label="Register as Lead"
      >
        Want to register as Member? Click Here
      </button>

      <div className="bg-background-card p-6 rounded-lg shadow-card w-96">
        <h3 className="text-xl font-semibold mb-4">{role} Registration</h3>
        <form>
          <label className="block mb-2">Name:</label>
          <input 
            type="text" 
            placeholder="Enter Name" 
            className="w-full p-2 rounded bg-background-default border border-border-default text-text-default mb-4" 
          />
          
          <label className="block mb-2">Contact number:</label>
          <input 
            type="text" 
            placeholder="Enter Contact Number" 
            className="w-full p-2 rounded bg-background-default border border-border-default text-text-default mb-4" 
          />
          
          <label className="block mb-2">Email:</label>
          <input 
            type="email" 
            placeholder="Enter Email" 
            className="w-full p-2 rounded bg-background-default border border-border-default text-text-default mb-4" 
          />
          
          <label className="block mb-2">Team:</label>
          <select 
            className="w-full p-2 rounded bg-background-default border border-border-default text-text-default mb-4"
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Tech</option>
          </select>

          <label className="block mb-2">Password:</label>
          <input 
            type="password" 
            placeholder="Enter Password" 
            className="w-full p-2 rounded bg-background-default border border-border-default text-text-default mb-4" 
          />
          
          <label className="block mb-2">Confirm Password:</label>
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="w-full p-2 rounded bg-background-default border border-border-default text-text-default mb-4" 
          />
          
          <button 
            type="submit" 
            className="w-full p-2 rounded bg-status-success text-white"
            aria-label="Register as Member"
          >
            Register as Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadRegister;
