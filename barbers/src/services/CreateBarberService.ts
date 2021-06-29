import { getCustomRepository } from "typeorm";
import Barber from "../models/Barber";
import BarbersRepository from "../repositories/BarbersRepository";

class CreateBarberService {
  public async execute({
    name,
    cpf,
    phone,
    address,
  }: any): Promise<Barber | undefined> {
    const barberRepository = getCustomRepository(BarbersRepository);

    const validateCpf = await barberRepository.validateCpf(cpf);

    if (!validateCpf) {
      const barber = barberRepository.create({
        name,
        cpf,
        phone,
        address,
      });
      await barberRepository.save(barber);
      return barber;
    }

    throw Error("Já possui um barbeiro cadastrado com esse CPF.");
  }
}

export default CreateBarberService;
