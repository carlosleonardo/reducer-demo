import { ModeloTarefa } from "../modelos/tarefa";

export enum TipoAcao {
    ACAO_ADICIONAR,
    ACAO_ALTERAR,
    ACAO_EXCLUIR,
}

export type Acao = {
    tarefa?: ModeloTarefa;
    tipo: TipoAcao;
    id?: number;
};

export function tarefaReducer(
    tarefas: ModeloTarefa[],
    acao: Acao
): ModeloTarefa[] {
    switch (acao.tipo) {
        case TipoAcao.ACAO_ADICIONAR:
            return [
                ...tarefas,
                {
                    id: (acao.tarefa?.id ?? 0) + 1,
                    texto: acao.tarefa?.texto ?? "",
                    feita: false,
                },
            ];
        case TipoAcao.ACAO_ALTERAR:
            return tarefas.map((tarefa) => {
                if (tarefa.id === acao.tarefa?.id && acao.tarefa)
                    return acao.tarefa;
                return tarefa;
            });
        case TipoAcao.ACAO_EXCLUIR:
            return tarefas.filter((tarefa) => tarefa.id !== acao.id);
    }
    return tarefas;
}
