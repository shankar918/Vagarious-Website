// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { useNavigate } from "react-router-dom"; // Use this instead of next/navigation

// interface LoginResponse {
//   token: string;
//   message?: string;
// }

// export default function AdminLogin() {
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const [error, setError] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
  
//   const navigate = useNavigate(); // Hook for Vite/React navigation

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/admin/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data: LoginResponse = await response.json();

//       if (response.ok) {
//         localStorage.setItem("adminToken", data.token);
//         // Redirect to your dashboard route
//         navigate("/admin/dashboard"); 
//       } else {
//         setError(data.message || "Invalid credentials");
//       }
//     } catch (err) {
//       setError("Network error. Is the backend running?");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
//       <h1>Admin Login</h1>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
//         <input name="username" placeholder="Username" onChange={handleChange} required />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// }