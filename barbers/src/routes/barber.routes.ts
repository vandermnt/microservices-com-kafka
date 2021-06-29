import { Router } from "express";
import Barber from "../models/Barber";

import CreateBarberService from "../services/CreateBarberService";

const barber = Router();

barber.post("/", async (request, response) => {
  const { name, cpf, phone, address }: Barber = request.body;

  const createBarber = new CreateBarberService();

  try {
    const barber = await createBarber.execute({
      name,
      cpf,
      phone,
      address,
    });

    return response.status(201).json({ ok: "success" });
  } catch (error) {
    return response.status(400).json({
      error: error.message,
    });
  }
});

barber.get("/", (request, response) => {});

export default barber;
