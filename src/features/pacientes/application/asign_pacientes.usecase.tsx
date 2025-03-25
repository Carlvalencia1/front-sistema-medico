import Ipacientes from "../domain/pacientes.repository";
import Paciente from "../domain/paciente.entity";

export class UpdatePacientes {
    private repository: Ipacientes;
  
    constructor(repository: Ipacientes) {
      this.repository = repository;
    }
  
    async execute(id_usuario: number, paciente: Paciente): Promise<Paciente> {
      return await this.repository.Update(id_usuario, paciente);
    }
}