import { useEffect, useState } from "react";
import { DeletePacientes } from "../application/delete_pacientes.usecase";
import Ipacientes from "../domain/pacientes.repository";
import APIRepositoryPacientes from "./apiPaciente.repository";

export default function useGetPaciente(id_usuario: number) {
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repository: Ipacientes = new APIRepositoryPacientes();
    const getPacientesUseCase = new DeletePacientes(repository);

    getPacientesUseCase
      .execute(id_usuario)
      .then(setResponse)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id_usuario]);

  return { response, loading, error };
}