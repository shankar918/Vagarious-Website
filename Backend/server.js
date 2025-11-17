import express from "express";
import cors from "cors";
import database from "./database.js"; 
import adminRoutes from './routes/adminRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import applyRoutes from './routes/applyRoutes.js';
import addcarrerRoutes from './routes/addcarrerRoutes.js';
// import careerRoutes from './routes/careerRoutes.js'

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default route (for testing)
app.get('/', (req, res) => {
  res.send("Staffing website backend running ✅");
});

// ✅ Register routes
app.use('/api/admin', adminRoutes);
app.use('/api', jobRoutes);
app.use('/api', applyRoutes);
app.use('/api', addcarrerRoutes);


// Server start
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server is running at http://localhost:${PORT}`));
