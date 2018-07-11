namespace Exemplos.Clinica {
    export interface AgendasItensRow {
        AgendaItemId?: number;
        AgendaId?: number;
        ConvenioId?: number;
        ProcedimentoId?: number;
        ValorId?: number;
        Desconto?: number;
        ValorPraticado?: number;
        Quantidade?: number;
        GuiaId?: number;
        Faturado?: boolean;
        AgendaAgendaIdPrincipal?: number;
        AgendaEmpresaId?: number;
        AgendaDataHoraCadastro?: string;
        AgendaDataHoraAgendamento?: string;
        AgendaEspecialidadeProfisisonalId?: number;
        AgendaProfissionalId?: number;
        AgendaEspecialidadeId?: number;
        AgendaMedicoIdSolicitante?: number;
        AgendaEscalaId?: number;
        AgendaPacienteId?: number;
        AgendaConvenioId?: number;
        AgendaServicoId?: number;
        AgendaDataHoraChegada?: string;
        AgendaDataHoraAtendimentoInicio?: string;
        AgendaDataHoraAtendimentoFim?: string;
        AgendaStatusAgendaId?: number;
        AgendaFaturado?: boolean;
        AgendaObservacao?: string;
        AgendaValorTotal?: number;
        AgendaSubTotal?: number;
        AgendaDescontos?: number;
        AgendaPgtoDinheiro?: number;
        AgendaPgtoCheque?: number;
        AgendaPgtoCartao?: number;
        AgendaPgtoFaturar?: number;
        AgendaNumeroNfs?: number;
        AgendaGuiaId?: number;
    }

    export namespace AgendasItensRow {
        export const idProperty = 'AgendaItemId';
        export const localTextPrefix = 'Clinica.AgendasItens';
        export const lookupKey = 'Clinica.AgendasItens';

        export function getLookup(): Q.Lookup<AgendasItensRow> {
            return Q.getLookup<AgendasItensRow>('Clinica.AgendasItens');
        }

        export namespace Fields {
            export declare const AgendaItemId: string;
            export declare const AgendaId: string;
            export declare const ConvenioId: string;
            export declare const ProcedimentoId: string;
            export declare const ValorId: string;
            export declare const Desconto: string;
            export declare const ValorPraticado: string;
            export declare const Quantidade: string;
            export declare const GuiaId: string;
            export declare const Faturado: string;
            export declare const AgendaAgendaIdPrincipal: string;
            export declare const AgendaEmpresaId: string;
            export declare const AgendaDataHoraCadastro: string;
            export declare const AgendaDataHoraAgendamento: string;
            export declare const AgendaEspecialidadeProfisisonalId: string;
            export declare const AgendaProfissionalId: string;
            export declare const AgendaEspecialidadeId: string;
            export declare const AgendaMedicoIdSolicitante: string;
            export declare const AgendaEscalaId: string;
            export declare const AgendaPacienteId: string;
            export declare const AgendaConvenioId: string;
            export declare const AgendaServicoId: string;
            export declare const AgendaDataHoraChegada: string;
            export declare const AgendaDataHoraAtendimentoInicio: string;
            export declare const AgendaDataHoraAtendimentoFim: string;
            export declare const AgendaStatusAgendaId: string;
            export declare const AgendaFaturado: string;
            export declare const AgendaObservacao: string;
            export declare const AgendaValorTotal: string;
            export declare const AgendaSubTotal: string;
            export declare const AgendaDescontos: string;
            export declare const AgendaPgtoDinheiro: string;
            export declare const AgendaPgtoCheque: string;
            export declare const AgendaPgtoCartao: string;
            export declare const AgendaPgtoFaturar: string;
            export declare const AgendaNumeroNfs: string;
            export declare const AgendaGuiaId: string;
        }

        ['AgendaItemId', 'AgendaId', 'ConvenioId', 'ProcedimentoId', 'ValorId', 'Desconto', 'ValorPraticado', 'Quantidade', 'GuiaId', 'Faturado', 'AgendaAgendaIdPrincipal', 'AgendaEmpresaId', 'AgendaDataHoraCadastro', 'AgendaDataHoraAgendamento', 'AgendaEspecialidadeProfisisonalId', 'AgendaProfissionalId', 'AgendaEspecialidadeId', 'AgendaMedicoIdSolicitante', 'AgendaEscalaId', 'AgendaPacienteId', 'AgendaConvenioId', 'AgendaServicoId', 'AgendaDataHoraChegada', 'AgendaDataHoraAtendimentoInicio', 'AgendaDataHoraAtendimentoFim', 'AgendaStatusAgendaId', 'AgendaFaturado', 'AgendaObservacao', 'AgendaValorTotal', 'AgendaSubTotal', 'AgendaDescontos', 'AgendaPgtoDinheiro', 'AgendaPgtoCheque', 'AgendaPgtoCartao', 'AgendaPgtoFaturar', 'AgendaNumeroNfs', 'AgendaGuiaId'].forEach(x => (<any>Fields)[x] = x);
    }
}

