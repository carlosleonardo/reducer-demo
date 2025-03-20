import { useReducer, useState } from "react";
import "./App.css";
import Tarefas from "./componentes/Tarefas";
import { tarefaReducer, TipoAcao } from "./reducers/reducer";

function App() {
    const [tarefas, despachar] = useReducer(tarefaReducer, []);
    const [nomeTarefa, definirNomeTarefa] = useState("");
    const [invalido, definirInvalido] = useState(true);
    let novoId = 0;

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
                id: novoId + 1,
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
            <Tarefas tarefas={tarefas} />
        </>
    );
}

export default App;
