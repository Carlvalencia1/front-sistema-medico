import Ipacientes from "../domain/pacientes.repository";
import Paciente from "../domain/paciente.entity";

export default class APIRepositoryPacientes implements Ipacientes {
    private pacientesURL = `${import.meta.env.API_URL}/pacientes`;
  
    async Create(paciente: Paciente): Promise<Paciente> {
      const response = await fetch(`${this.pacientesURL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paciente),
      });
      if (!response.ok) throw new Error("Error al crear el paciente");
      return response.json();
    }
  
    async Update(id_usuario: number, paciente: Paciente): Promise<Paciente> {
      const response = await fetch(`${this.pacientesURL}/${id_usuario}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paciente),
      });
      if (!response.ok) throw new Error("Error al actualizar el paciente");
      return response.json();
    }
  
    async ConsultPaciente(): Promise<Paciente> {
      const response = await fetch(`${this.pacientesURL}/current`);
      if (!response.ok) throw new Error("Error al consultar el paciente");
      return response.json();
    }
  
    async ConsultPacientes(): Promise<Paciente[]> {
      const response = await fetch(this.pacientesURL);
      if (!response.ok) throw new Error("Error al consultar los pacientes");
      return response.json();
    }
  
    async Delete(id_usuario: number): Promise<void> {
      const response = await fetch(`${this.pacientesURL}/${id_usuario}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar el paciente");
    }
  }