import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddCareer() {
  // Form data state
  const [formData, setFormData] = useState({
    role: "",
    location: "",
    education: "",
    experience: "",
    description: "",
    skills: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      fetch("http://localhost:5000/api/addcarrer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),

      });


      // Reset form after submit
      setFormData({
        role: "",
        location: "",
        education: "",
        experience: "",
        description: "",
        skills: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Failed to add career");
    }
  };

  return (
    <div className="container mt-5 bg-white p-4 rounded shadow-sm" style={{width:'500px'}}  >
      <h2 className="text-center mb-4 text-primary">Add New Career</h2>

      <form onSubmit={handleSubmit} className="text-center">
        <div className="mb-3">
          <label className="form-label fw-semibold">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter job role"
            required
          />
        </div>

        <div className="mb-3" >
          <label className="form-label fw-semibold">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter job location"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter required education"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter experience required"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter job description"
            rows={3}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Required Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter required skills"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Career
        </button>
      </form>
    </div>
  );
}
