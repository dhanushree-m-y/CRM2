import { useState } from "react";
import { motion } from "framer-motion";
import { Search, UserPlus, X } from "lucide-react";

export default function TeacherManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [teacherData, setTeacherData] = useState({
    name: "",
    specialty: "",
    status: "Available",
    workshops: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({ ...teacherData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Teacher:", teacherData);
    setShowForm(false);
  };

  return (
    <motion.div
      className="bg-background p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <motion.h1
            className="text-xl font-semibold text-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Teacher Management
          </motion.h1>
          <p className="text-text-muted text-sm">
            Find and assign qualified teachers for workshops
          </p>
        </div>
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
        >
          <UserPlus size={16} />
          Add New Teacher
        </motion.button>
      </div>

      {/* Search & Filters */}
      <div className="flex items-center gap-2">
        <div className="relative w-full">
          <Search className="absolute left-3 top-3 text-text-muted" size={16} />
          <input
            type="text"
            placeholder="Search teachers..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 text-text bg-background-muted"
          />
        </div>

        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <select className="px-4 py-2 text-sm font-medium border border-border rounded-lg bg-background-card text-text hover:bg-background-hover">
            <option>Select</option>
            <option>Data Science & Machine Learning</option>
            <option>Cloud Computing & DevOps</option>
            <option>Artificial Intelligence</option>
          </select>
        </motion.div>
      </div>

      {/* Add Teacher Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-background-card p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add New Teacher</h2>
              <button onClick={() => setShowForm(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={teacherData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <select
                name="specialty"
                value={teacherData.specialty}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Specialty</option>
                <option value="React & Frontend Developments">React & Frontend Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Data Science & Machine Learning">Data Science & Machine Learning</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Cloud Computing & DevOps">Cloud Computing & DevOps</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
              </select>
              <select
                name="status"
                value={teacherData.status}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Available">Available</option>
                <option value="Busy">Busy</option>
                <option value="Tentative">Tentative</option>
              </select>
              <input
                type="number"
                name="workshops"
                value={teacherData.workshops}
                onChange={handleInputChange}
                placeholder="Workshops Conducted"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                step="0.1"
                name="rating"
                value={teacherData.rating}
                onChange={handleInputChange}
                placeholder="Rating (Optional)"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
              >
                Save Teacher
              </button>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
}
