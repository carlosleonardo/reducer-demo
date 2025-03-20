import { ChangeEvent, useState } from "react";
import { ModeloTarefa } from "../modelos/tarefa";
import Tarefa from "./Tarefa";

export type TarefasProps = {
    tarefas: ModeloTarefa[];
    excluirTarefa: (id: number) => void;
};

export default function Tarefas(props: TarefasProps) {
    return (
        <>
            <ul>
                {props.tarefas.map((tarefa) => {
                    return (
                        <Tarefa
                            key={tarefa.id}
                            tarefa={tarefa}
                            excluirTarefa={props.excluirTarefa}
                        />
                    );
                })}
            </ul>
        </>
    );
}
