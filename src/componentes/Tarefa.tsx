import { ModeloTarefa } from "../modelos/tarefa";

export type TarefaProps = {
    tarefa: ModeloTarefa;
};

export default function Tarefa(props: TarefaProps) {
    return (
        <>
            <li>{props.tarefa.texto}</li>
        </>
    );
}
