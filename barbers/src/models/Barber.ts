import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("barber")
class Barber {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column("varchar")
  name: string | undefined;

  @Column("varchar")
  cpf: string;

  @Column("varchar")
  phone: string;

  @Column("varchar")
  address: string;
}

export default Barber;
