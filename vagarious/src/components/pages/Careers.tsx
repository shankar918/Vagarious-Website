// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// const CareersPage = () => {
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [formData, setFormData] = useState({
//     fullname: "",
//     gender: "",
//     Email: "",
//     mobile: "",
//     Address: "",
//     City: "",
//     State: "",
//     Resume: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Replace this with your deployed Google Apps Script Web App URL
//   const GOOGLE_SCRIPT_URL =
//     "https://script.google.com/macros/s/AKfycbyby625j8N-C-TRdKoOugGicG3V9JPznrusQUXhSSiviqU1IbbWYLxZWEVssrYze0Y/exec";

//   const jobs = [
//     {
//       id: 1,
//       title: "ReactJS Developer",
//       experience: "1+ Years",
//       location: "Remote / Hyderabad",
//       description:
//         "Develop and maintain responsive web applications using ReactJS, integrating REST APIs and reusable components.",
//       skills: ["ReactJS", "JavaScript (ES6+)", "REST APIs", "Git", "CSS/Bootstrap"],
//       education: "B.Tech / MCA / BCA in Computer Science or equivalent",
//     },
//     {
//       id: 2,
//       title: "HR Recruiter",
//       experience: "0–2 Years",
//       location: "Hyderabad",
//       description:
//         "Source and screen candidates for IT and Non-IT positions. Coordinate interviews and maintain candidate records.",
//       skills: ["Recruitment", "Communication", "Interview Coordination", "MS Excel"],
//       education: "Any Graduate / MBA Preferred",
//     },
//     {
//       id: 3,
//       title: "Business Development Executive",
//       experience: "0–3 Years",
//       location: "Bangalore",
//       description:
//         "Identify potential clients, pitch staffing services, and build long-term relationships to grow business.",
//       skills: ["Sales", "Lead Generation", "Negotiation", "Market Research"],
//       education: "Any Graduate / MBA Preferred",
//     },
//   ];

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const payload = {
//         fullname: formData.fullname,
//         gender: formData.gender,
//         Email: formData.Email,
//         mobile: formData.mobile,
//         Address: formData.Address,
//         City: formData.City,
//         State: formData.State,
//         Resume: formData.Resume?.name || "",
//         jobTitle: selectedJob?.title || "",
//       };

//       await fetch(GOOGLE_SCRIPT_URL, {
//         method: "POST",
//         mode: "no-cors", // Required for Google Apps Script
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       alert("✅ Application submitted successfully!");
//       setFormData({
//         fullname: "",
//         gender: "",
//         Email: "",
//         mobile: "",
//         Address: "",
//         City: "",
//         State: "",
//         Resume: "",
//       });
//     } catch (error) {
//       console.error("Error submitting:", error);
//       alert("❌ Failed to submit application. Try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="py-5 bg-dark text-white pb-2 mt-6 mx-6" style={{ minHeight: "100vh" }}>
//       <div className="container">
//         <h1 className="text-center fw-bold mb-5 text-primary">
//           Careers at Staffing Company
//         </h1>

//         {/* Job Cards */}
//         <div className="row g-4">
//           {jobs.map((job) => (
//             <div className="col-md-4" key={job.id}>
//               <div className="career-card shadow-lg p-4 rounded-4 h-100 bg-secondary text-white">
//                 <h4 className="fw-bold mb-2">{job.title}</h4>
//                 <p>📍 {job.location}</p>
//                 <p>⏱ Experience: {job.experience}</p>
//                 <button
//                   className="btn btn-outline-light mt-2"
//                   onClick={() => setSelectedJob(job)}
//                   data-bs-toggle="modal"
//                   data-bs-target="#jobDetailsModal"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Job Details Modal */}
//       <div className="modal fade" id="jobDetailsModal" tabIndex={-1}>
//         <div className="modal-dialog modal-lg modal-dialog-centered">
//           <div className="modal-content">
//             {selectedJob ? (
//               <>
//                 <div className="modal-header bg-primary text-white">
//                   <h5 className="modal-title">{selectedJob.title}</h5>
//                   <button
//                     type="button"
//                     className="btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="modal-body text-dark">
//                   <p>{selectedJob.description}</p>
//                   <h6 className="fw-bold">Required Skills:</h6>
//                   <ul>
//                     {selectedJob.skills.map((s, i) => (
//                       <li key={i}>{s}</li>
//                     ))}
//                   </ul>
//                   <p className="fw-bold mt-3">Education: {selectedJob.education}</p>

//                   <div className="text-end mt-4">
//                     <button
//                       className="btn btn-success"
//                       data-bs-toggle="modal"
//                       data-bs-target="#applyModal"
//                     >
//                       Apply Now
//                     </button>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <div className="modal-body text-center py-5">
//                 <p>Select a job to view details</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Apply Form Modal */}
//       <div className="modal fade" id="applyModal" tabIndex={-1}>
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content text-dark">
//             <div className="modal-header bg-primary text-white">
//               <h5 className="modal-title">
//                 Apply for {selectedJob ? selectedJob.title : "Job"}
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label className="form-label">Full Name</label>
//                   <input
//                     type="text"
//                     name="fullname"
//                     className="form-control"
//                     value={formData.fullname}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Gender</label>
//                   <input
//                     type="text"
//                     name="gender"
//                     className="form-control"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Email</label>
//                   <input
//                     type="email"
//                     name="Email"
//                     className="form-control"
//                     value={formData.Email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label>Mobile</label>
//                   <input
//                     type="text"
//                     name="mobile"
//                     className="form-control"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label>Address</label>
//                   <input
//                     type="text"
//                     name="Address"
//                     className="form-control"
//                     value={formData.Address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label>City</label>
//                   <input
//                     type="text"
//                     name="City"
//                     className="form-control"
//                     value={formData.City}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label>State</label>
//                   <input
//                     type="text"
//                     name="State"
//                     className="form-control"
//                     value={formData.State}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label>Resume</label>
//                   <input
//                     type="file"
//                     name="Resume"
//                     className="form-control"
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
//                   {isSubmitting ? "Submitting..." : "Submit Application"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareersPage;
