import app from "./app.js";

app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port ${process.env.PORT}`);
});

// FORNTEND_URL = http://localhost:5173
// FORNTEND_URL=food-reservation-rho.vercel.app