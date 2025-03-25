import { useEffect, useState } from "react";
import { UpdatePacientes } from "../application/asign_pacientes.usecase";
import Ipacientes from "../domain/pacientes.repository";
import Paciente from "../domain/paciente.entity";
import APIRepositoryPacientes from "./apiPaciente.repository";

export default function useGetPaciente(id_usuario: number, body: Paciente) {
    const [response, setResponse] = useState<Paciente>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const repository: Ipacientes = new APIRepositoryPacientes();
        const getPacienteUseCase = new UpdatePacientes(repository);

        getPacienteUseCase
            .execute(id_usuario, body)
            .then(setResponse)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { response, loading, error };
}