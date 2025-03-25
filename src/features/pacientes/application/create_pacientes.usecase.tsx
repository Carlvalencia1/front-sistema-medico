import Ipacientes from "../domain/pacientes.repository";
import Paciente from "../domain/paciente.entity";

export class CreatePacientes {
    private repository: Ipacientes;

    constructor(repository: Ipacientes) {
        this.repository = repository;
    }

    async execute(paciente: Paciente): Promise<Paciente> {
        return await this.repository.Create(paciente);
    }
}