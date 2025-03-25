import { useEffect, useState } from "react";
import { GetPacientes } from "../application/get_pacientes.usecase"; // Asegúrate de que el nombre es correcto
import IPacientes from "../domain/pacientes.repository";
import APIRepositoryPacientes from "./apiPaciente.repository";
import Paciente from "../domain/paciente.entity";

export default function useGetPaciente() {
  const [paciente, setPaciente] = useState<Paciente | null>(null); // Ahora inicia en null
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaciente = async () => {
      setLoading(true);
      try {
        const repository: IPacientes = new APIRepositoryPacientes();
        const getPacienteUseCase = new GetPacientes(repository); // Asegúrate de que el nombre de la clase es correcto

        const data = await getPacienteUseCase.execute();
        setPaciente(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchPaciente();
  }, []);

  return { paciente, loading, error };
}
