import express from "express";

import { createPaymentIntent } from "../controllers/paymentController.js";

const app = express.Router();

app.post("/create", createPaymentIntent);

export default app;
