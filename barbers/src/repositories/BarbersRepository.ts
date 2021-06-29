import Barber from "../models/Barber";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Barber)
class BarbersRepository extends Repository<Barber> {
  public async validateCpf(cpf: string): Promise<any> {
    const validateCpf = await this.findOne({
      where: { cpf },
    });
  }
}

export default BarbersRepository;
