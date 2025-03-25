import Ipacientes from "../domain/pacientes.repository";

export class DeletePacientes {
    private repository: Ipacientes;

    constructor(repository: Ipacientes) {
        this.repository = repository;
    }

    async execute(id_usuario: number): Promise<any> {
        return await this.repository.Delete(id_usuario);
    }
}
