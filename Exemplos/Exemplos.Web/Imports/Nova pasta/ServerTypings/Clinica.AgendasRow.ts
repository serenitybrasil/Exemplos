namespace Exemplos.Clinica {
    export interface AgendasRow {
        AgendaId?: number;
        AgendaIdPrincipal?: number;
        EmpresaId?: number;
        DataHoraCadastro?: string;
        DataHoraAgendamento?: string;
        EspecialidadeProfisisonalId?: number;
        ProfissionalId?: number;
        EspecialidadeId?: number;
        MedicoIdSolicitante?: number;
        EscalaId?: number;
        PacienteId?: number;
        ConvenioId?: number;
        ServicoId?: number;
        DataHoraChegada?: string;
        DataHoraAtendimentoInicio?: string;
        DataHoraAtendimentoFim?: string;
        StatusAgendaId?: number;
        Faturado?: boolean;
        Observacao?: string;
        ValorTotal?: number;
        SubTotal?: number;
        Descontos?: number;
        PgtoDinheiro?: number;
        PgtoCheque?: number;
        PgtoCartao?: number;
        PgtoFaturar?: number;
        NumeroNfs?: number;
        GuiaId?: number;
        AgendaIdPrincipalEmpresaId?: number;
        AgendaIdPrincipalDataHoraCadastro?: string;
        AgendaIdPrincipalDataHoraAgendamento?: string;
        AgendaIdPrincipalEspecialidadeProfisisonalId?: number;
        AgendaIdPrincipalProfissionalId?: number;
        AgendaIdPrincipalEspecialidadeId?: number;
        AgendaIdPrincipalMedicoIdSolicitante?: number;
        AgendaIdPrincipalEscalaId?: number;
        AgendaIdPrincipalPacienteId?: number;
        AgendaIdPrincipalConvenioId?: number;
        AgendaIdPrincipalServicoId?: number;
        AgendaIdPrincipalDataHoraChegada?: string;
        AgendaIdPrincipalDataHoraAtendimentoInicio?: string;
        AgendaIdPrincipalDataHoraAtendimentoFim?: string;
        AgendaIdPrincipalStatusAgendaId?: number;
        AgendaIdPrincipalFaturado?: boolean;
        AgendaIdPrincipalObservacao?: string;
        AgendaIdPrincipalValorTotal?: number;
        AgendaIdPrincipalSubTotal?: number;
        AgendaIdPrincipalDescontos?: number;
        AgendaIdPrincipalPgtoDinheiro?: number;
        AgendaIdPrincipalPgtoCheque?: number;
        AgendaIdPrincipalPgtoCartao?: number;
        AgendaIdPrincipalPgtoFaturar?: number;
        AgendaIdPrincipalNumeroNfs?: number;
        AgendaIdPrincipalGuiaId?: number;
        GuiaTipoGuiaId?: number;
        GuiaTipoConsultaId?: number;
        Guia?: string;
        GuiaGuiaOperador?: string;
        GuiaCarteirinha?: string;
        GuiaNomePaciente?: string;
        GuiaAutorizacaoId?: number;
        GuiaNumeroAutorizacao?: string;
        GuiaIdAuditada?: boolean;
        GuiaDataAuditoria?: string;
        GuiaIdAuditoriaAprovada?: boolean;
        GuiaConclusaoAuditoria?: string;
        GuiaProfissionalIdSolicitante?: number;
        GuiaProfissionalIdExecutante?: number;
    }

    export namespace AgendasRow {
        export const idProperty = 'AgendaId';
        export const nameProperty = 'Observacao';
        export const localTextPrefix = 'Clinica.Agendas';
        export const lookupKey = 'Clinica.Agendas';

        export function getLookup(): Q.Lookup<AgendasRow> {
            return Q.getLookup<AgendasRow>('Clinica.Agendas');
        }

        export namespace Fields {
            export declare const AgendaId: string;
            export declare const AgendaIdPrincipal: string;
            export declare const EmpresaId: string;
            export declare const DataHoraCadastro: string;
            export declare const DataHoraAgendamento: string;
            export declare const EspecialidadeProfisisonalId: string;
            export declare const ProfissionalId: string;
            export declare const EspecialidadeId: string;
            export declare const MedicoIdSolicitante: string;
            export declare const EscalaId: string;
            export declare const PacienteId: string;
            export declare const ConvenioId: string;
            export declare const ServicoId: string;
            export declare const DataHoraChegada: string;
            export declare const DataHoraAtendimentoInicio: string;
            export declare const DataHoraAtendimentoFim: string;
            export declare const StatusAgendaId: string;
            export declare const Faturado: string;
            export declare const Observacao: string;
            export declare const ValorTotal: string;
            export declare const SubTotal: string;
            export declare const Descontos: string;
            export declare const PgtoDinheiro: string;
            export declare const PgtoCheque: string;
            export declare const PgtoCartao: string;
            export declare const PgtoFaturar: string;
            export declare const NumeroNfs: string;
            export declare const GuiaId: string;
            export declare const AgendaIdPrincipalEmpresaId: string;
            export declare const AgendaIdPrincipalDataHoraCadastro: string;
            export declare const AgendaIdPrincipalDataHoraAgendamento: string;
            export declare const AgendaIdPrincipalEspecialidadeProfisisonalId: string;
            export declare const AgendaIdPrincipalProfissionalId: string;
            export declare const AgendaIdPrincipalEspecialidadeId: string;
            export declare const AgendaIdPrincipalMedicoIdSolicitante: string;
            export declare const AgendaIdPrincipalEscalaId: string;
            export declare const AgendaIdPrincipalPacienteId: string;
            export declare const AgendaIdPrincipalConvenioId: string;
            export declare const AgendaIdPrincipalServicoId: string;
            export declare const AgendaIdPrincipalDataHoraChegada: string;
            export declare const AgendaIdPrincipalDataHoraAtendimentoInicio: string;
            export declare const AgendaIdPrincipalDataHoraAtendimentoFim: string;
            export declare const AgendaIdPrincipalStatusAgendaId: string;
            export declare const AgendaIdPrincipalFaturado: string;
            export declare const AgendaIdPrincipalObservacao: string;
            export declare const AgendaIdPrincipalValorTotal: string;
            export declare const AgendaIdPrincipalSubTotal: string;
            export declare const AgendaIdPrincipalDescontos: string;
            export declare const AgendaIdPrincipalPgtoDinheiro: string;
            export declare const AgendaIdPrincipalPgtoCheque: string;
            export declare const AgendaIdPrincipalPgtoCartao: string;
            export declare const AgendaIdPrincipalPgtoFaturar: string;
            export declare const AgendaIdPrincipalNumeroNfs: string;
            export declare const AgendaIdPrincipalGuiaId: string;
            export declare const GuiaTipoGuiaId: string;
            export declare const GuiaTipoConsultaId: string;
            export declare const Guia: string;
            export declare const GuiaGuiaOperador: string;
            export declare const GuiaCarteirinha: string;
            export declare const GuiaNomePaciente: string;
            export declare const GuiaAutorizacaoId: string;
            export declare const GuiaNumeroAutorizacao: string;
            export declare const GuiaIdAuditada: string;
            export declare const GuiaDataAuditoria: string;
            export declare const GuiaIdAuditoriaAprovada: string;
            export declare const GuiaConclusaoAuditoria: string;
            export declare const GuiaProfissionalIdSolicitante: string;
            export declare const GuiaProfissionalIdExecutante: string;
        }

        ['AgendaId', 'AgendaIdPrincipal', 'EmpresaId', 'DataHoraCadastro', 'DataHoraAgendamento', 'EspecialidadeProfisisonalId', 'ProfissionalId', 'EspecialidadeId', 'MedicoIdSolicitante', 'EscalaId', 'PacienteId', 'ConvenioId', 'ServicoId', 'DataHoraChegada', 'DataHoraAtendimentoInicio', 'DataHoraAtendimentoFim', 'StatusAgendaId', 'Faturado', 'Observacao', 'ValorTotal', 'SubTotal', 'Descontos', 'PgtoDinheiro', 'PgtoCheque', 'PgtoCartao', 'PgtoFaturar', 'NumeroNfs', 'GuiaId', 'AgendaIdPrincipalEmpresaId', 'AgendaIdPrincipalDataHoraCadastro', 'AgendaIdPrincipalDataHoraAgendamento', 'AgendaIdPrincipalEspecialidadeProfisisonalId', 'AgendaIdPrincipalProfissionalId', 'AgendaIdPrincipalEspecialidadeId', 'AgendaIdPrincipalMedicoIdSolicitante', 'AgendaIdPrincipalEscalaId', 'AgendaIdPrincipalPacienteId', 'AgendaIdPrincipalConvenioId', 'AgendaIdPrincipalServicoId', 'AgendaIdPrincipalDataHoraChegada', 'AgendaIdPrincipalDataHoraAtendimentoInicio', 'AgendaIdPrincipalDataHoraAtendimentoFim', 'AgendaIdPrincipalStatusAgendaId', 'AgendaIdPrincipalFaturado', 'AgendaIdPrincipalObservacao', 'AgendaIdPrincipalValorTotal', 'AgendaIdPrincipalSubTotal', 'AgendaIdPrincipalDescontos', 'AgendaIdPrincipalPgtoDinheiro', 'AgendaIdPrincipalPgtoCheque', 'AgendaIdPrincipalPgtoCartao', 'AgendaIdPrincipalPgtoFaturar', 'AgendaIdPrincipalNumeroNfs', 'AgendaIdPrincipalGuiaId', 'GuiaTipoGuiaId', 'GuiaTipoConsultaId', 'Guia', 'GuiaGuiaOperador', 'GuiaCarteirinha', 'GuiaNomePaciente', 'GuiaAutorizacaoId', 'GuiaNumeroAutorizacao', 'GuiaIdAuditada', 'GuiaDataAuditoria', 'GuiaIdAuditoriaAprovada', 'GuiaConclusaoAuditoria', 'GuiaProfissionalIdSolicitante', 'GuiaProfissionalIdExecutante'].forEach(x => (<any>Fields)[x] = x);
    }
}

