import { useEffect, useState } from "react";
import { GetPacientes } from "../application/get_pacientes.usecase";
import Ipacientes from "../domain/pacientes.repository";
import APIRepositoryPacientes from "./apiPaciente.repository";
import Paciente from "../domain/paciente.entity";

export default function useGetPaciente() {
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const repository: Ipacientes = new APIRepositoryPacientes();
        const getPacientesUseCase = new GetPacientes(repository);

        getPacientesUseCase
        .execute()
        .then(setPacientes)
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
        }, []);

        return { pacientes, loading, error };
};