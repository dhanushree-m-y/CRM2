import { useState } from "react";

export default function Registrationpage() {
  const [role, setRole] = useState("Member");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h2 className="text-2xl font-semibold text-white mb-4">Register as</h2>
      
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md ${
            role === "Lead" ? "bg-primary text-white" : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => setRole("Lead")}
        >
          Lead
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            role === "Member" ? "bg-primary text-white" : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => setRole("Member")}
        >
          Member
        </button>
      </div>

      {/* Registration Card */}
      <div className="bg-background-card p-6 rounded-lg shadow-card w-96">
        <h3 className="text-lg font-semibold text-white mb-4">{role} Registration</h3>

        <form>
          {/* Common Fields */}
          <div className="mb-4">
            <label className="text-text-muted block mb-1">Name:</label>
            <input type="text" placeholder="Enter Name" className="w-full px-3 py-2 bg-black text-white border border-border rounded-md" />
          </div>

          <div className="mb-4">
            <label className="text-text-muted block mb-1">Contact Number:</label>
            <input type="text" placeholder="Enter Contact Number" className="w-full px-3 py-2 bg-black text-white border border-border rounded-md" />
          </div>

          <div className="mb-4">
            <label className="text-text-muted block mb-1">Email:</label>
            <input type="email" placeholder="Enter Email" className="w-full px-3 py-2 bg-black text-white border border-border rounded-md" />
          </div>

          {/* Member-specific Field */}
          {role === "Member" && (
            <div className="mb-4">
              <label className="text-text-muted block mb-1">Team:</label>
              <select className="w-full px-3 py-2 bg-black text-white border border-border rounded-md">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Development</option>
              </select>
            </div>
          )}

          {/* Password Fields */}
          <div className="mb-4">
            <label className="text-text-muted block mb-1">Password:</label>
            <input type="password" placeholder="Enter Password" className="w-full px-3 py-2 bg-black text-white border border-border rounded-md" />
          </div>

          <div className="mb-6">
            <label className="text-text-muted block mb-1">Confirm Password:</label>
            <input type="password" placeholder="Confirm Password" className="w-full px-3 py-2 bg-black text-white border border-border rounded-md" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-status-success text-white py-2 rounded-md">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
