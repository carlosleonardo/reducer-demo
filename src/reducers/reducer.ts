import { ModeloTarefa } from "../modelos/tarefa";

export enum TipoAcao {
    ACAO_ADICIONAR,
    ACAO_ALTERAR,
    ACAO_EXCLUIR,
    ACAO_OBTER_POR_ID,
}

export type Acao = {
    tarefa: ModeloTarefa;
    tipo: TipoAcao;
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
                    id: (acao.tarefa.id ?? 0) + 1,
                    texto: acao.tarefa.texto,
                    feita: acao.tarefa.feita,
                },
            ];
        case TipoAcao.ACAO_ALTERAR:
            break;
        case TipoAcao.ACAO_EXCLUIR:
    }
    return [];
}
