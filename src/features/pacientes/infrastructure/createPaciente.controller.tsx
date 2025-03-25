import { useEffect, useState } from "react";
import { CreatePacientes } from "../application/create_pacientes.usecase";
import Ipacientes from "../domain/pacientes.repository";
import Paciente from "../domain/paciente.entity";
import APIRepositoryPacientes from "./apiPaciente.repository";

export default function useCreatePaciente(pacienteNuevo: Paciente) {
    const [paciente, setPaciente] = useState<Paciente>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const repository: Ipacientes = new APIRepositoryPacientes();
        const createPacienteUsecase = new CreatePacientes(repository);

        createPacienteUsecase
        .execute(pacienteNuevo)
        .then(setPaciente)
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);
  
    return { paciente, loading, error };
  };