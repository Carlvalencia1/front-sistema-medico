import Ipacientes from "../domain/pacientes.repository";
import  Paciente  from "../domain/paciente.entity";

export class GetPacientes {
    private repository: Ipacientes;

    constructor(repository: Ipacientes) {
        this.repository = repository;
    }

    async execute(): Promise<Paciente> {
        return await this.repository.ConsultPaciente();
    }
}
