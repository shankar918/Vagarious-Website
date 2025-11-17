import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface Career {
  id: number;
  role: string;
  location: string;
  education: string;
  experience: string;
  description: string;
  skills: string;
}

const ViewCareer: React.FC = () => {
  const [careers, setCareers] = useState<Career[]>([]);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  // ✅ Load careers when page loads
  useEffect(() => {
    loadCareers();
  }, []);

  const loadCareers = async () => {
    try {
      const res = await axios.get<Career[]>("http://localhost:5000/api/addcarrer");
      setCareers(res.data);
    } catch (err) {
      console.error("❌ Error fetching careers:", err);
    }
  };

  const deleteCareer = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this career?")) {
      try {
        await axios.delete(`http://localhost:5000/api/addcareer/${id}`);
        loadCareers();
      } catch (err) {
        console.error("❌ Error deleting career:", err);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-dark fw-bold">Career Opportunities</h2>

      <div className="row g-4">
        {careers.length > 0 ? (
          careers.map((career) => (
            <div className="col-md-4" key={career.id}>
              <div className="card shadow-lg border-0 rounded-4 h-100">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">{career.role}</h4>
                  <p className="text-muted mb-1">
                    <i className="bi bi-geo-alt"></i> {career.location}
                  </p>
                  <p className="text-muted mb-1">
                    <i className="bi bi-mortarboard"></i> {career.education}
                  </p>
                  <p className="text-muted mb-1">
                    <i className="bi bi-briefcase"></i> Experience: {career.experience}
                  </p>
                  <p className="mt-2 text-dark">
                    {career.description.length > 80
                      ? career.description.slice(0, 80) + "..."
                      : career.description}
                  </p>

                  <div className="mt-3 d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#careerDetailsModal"
                      onClick={() => setSelectedCareer(career)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCareer(career.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No career openings available.</p>
        )}
      </div>

      {/* Modal for Details */}
      <div className="modal fade" id="careerDetailsModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-4">
            {selectedCareer && (
              <>
                <div className="modal-header border-0">
                  <h4 className="modal-title text-primary fw-bold">{selectedCareer.role}</h4>
                  <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p><strong>Location:</strong> {selectedCareer.location}</p>
                  <p><strong>Education:</strong> {selectedCareer.education}</p>
                  <p><strong>Experience:</strong> {selectedCareer.experience}</p>
                  <p><strong>Description:</strong> {selectedCareer.description}</p>
                  <p><strong>Skills:</strong> {selectedCareer.skills}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCareer;
