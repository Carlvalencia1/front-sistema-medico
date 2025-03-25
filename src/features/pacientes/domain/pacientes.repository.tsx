import Paciente from "./paciente.entity";

export default interface Ipacientes {
    Create(paciente: Paciente): Promise<Paciente>;
    Update(id_usuario: number, paciente: Paciente): Promise<Paciente>; // Añadido "paciente"
    ConsultPaciente(): Promise<Paciente>; // Cambiado a inglés
    ConsultPacientes(): Promise<Paciente[]>; // Cambiado a inglés
    Delete(id_usuario: number): Promise<void>; // Cambiado a void
}