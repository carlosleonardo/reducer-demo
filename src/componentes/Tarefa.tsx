import { useReducer } from "react";
import { ModeloTarefa } from "../modelos/tarefa";
import { tarefaReducer, TipoAcao } from "../reducers/reducer";

export type TarefaProps = {
    tarefa: ModeloTarefa;
    excluirTarefa: (id: number) => void;
};

export default function Tarefa(props: TarefaProps) {
    return (
        <>
            <li>
                {props.tarefa.id}
                {props.tarefa.texto}
                <button
                    type="button"
                    onClick={() => props.excluirTarefa(props.tarefa.id ?? 0)}
                >
                    Excluir
                </button>
            </li>
        </>
    );
}
