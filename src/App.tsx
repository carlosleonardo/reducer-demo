import { ChangeEvent, useReducer, useState } from "react";
import "./App.css";
import Tarefas from "./componentes/Tarefas";
import { tarefaReducer, TipoAcao } from "./reducers/reducer";

let novoId = 1;

function App() {
    const [tarefas, despachar] = useReducer(tarefaReducer, []);
    const [nomeTarefa, definirNomeTarefa] = useState("");
    const [invalido, definirInvalido] = useState(true);

    function excluirTarefa(id: number) {
        despachar({
            tipo: TipoAcao.ACAO_EXCLUIR,
            id: id,
        });
    }

    function aoMudarNomeTarefa(evento: ChangeEvent<HTMLInputElement>) {
        definirNomeTarefa(evento.target.value);
        if (evento.target.value !== "") {
            definirInvalido(false);
        } else {
            definirInvalido(true);
        }
    }

    function adicionarTarefa() {
        despachar({
            tipo: TipoAcao.ACAO_ADICIONAR,
            tarefa: {
                id: novoId++,
                texto: nomeTarefa,
                feita: false,
            },
        });
        definirNomeTarefa("");
    }
    return (
        <>
            <label htmlFor="nomeTarefa">Tarefa</label>&nbsp;
            <input
                type="text"
                id="nomeTarefa"
                placeholder="Nome da tarefa"
                value={nomeTarefa}
                onChange={aoMudarNomeTarefa}
            />
            &nbsp;
            <button type="button" disabled={invalido} onClick={adicionarTarefa}>
                Adicionar
            </button>
            <Tarefas tarefas={tarefas} excluirTarefa={excluirTarefa} />
        </>
    );
}

export default App;
