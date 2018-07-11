namespace Exemplos.Clinica {
    export interface GuiasRow {
        GuiaId?: number;
        TipoGuiaId?: number;
        TipoConsultaId?: number;
        Guia?: string;
        GuiaOperador?: string;
        Carteirinha?: string;
        NomePaciente?: string;
        AutorizacaoId?: number;
        NumeroAutorizacao?: string;
        IdAuditada?: boolean;
        DataAuditoria?: string;
        IdAuditoriaAprovada?: boolean;
        ConclusaoAuditoria?: string;
        ProfissionalIdSolicitante?: number;
        ProfissionalIdExecutante?: number;
        TipoGuiaDescricao?: string;
        TipoGuiaAtivo?: boolean;
        TipoConsultaDescricao?: string;
        TipoConsultaAtivo?: boolean;
        AutorizacaoNumeroAutorizacao?: string;
        AutorizacaoConvenioId?: number;
        AutorizacaoPacienteId?: number;
        AutorizacaoArquivos?: string;
        AutorizacaoDataSolicitacao?: string;
        AutorizacaoDataAutorizacao?: string;
        AutorizacaoDataValidade?: string;
        AutorizacaoObservacao?: string;
        AutorizacaoIdAuditoriaAprovada?: boolean;
    }

    export namespace GuiasRow {
        export const idProperty = 'GuiaId';
        export const nameProperty = 'Guia';
        export const localTextPrefix = 'Clinica.Guias';
        export const lookupKey = 'Clinica.Guias';

        export function getLookup(): Q.Lookup<GuiasRow> {
            return Q.getLookup<GuiasRow>('Clinica.Guias');
        }

        export namespace Fields {
            export declare const GuiaId: string;
            export declare const TipoGuiaId: string;
            export declare const TipoConsultaId: string;
            export declare const Guia: string;
            export declare const GuiaOperador: string;
            export declare const Carteirinha: string;
            export declare const NomePaciente: string;
            export declare const AutorizacaoId: string;
            export declare const NumeroAutorizacao: string;
            export declare const IdAuditada: string;
            export declare const DataAuditoria: string;
            export declare const IdAuditoriaAprovada: string;
            export declare const ConclusaoAuditoria: string;
            export declare const ProfissionalIdSolicitante: string;
            export declare const ProfissionalIdExecutante: string;
            export declare const TipoGuiaDescricao: string;
            export declare const TipoGuiaAtivo: string;
            export declare const TipoConsultaDescricao: string;
            export declare const TipoConsultaAtivo: string;
            export declare const AutorizacaoNumeroAutorizacao: string;
            export declare const AutorizacaoConvenioId: string;
            export declare const AutorizacaoPacienteId: string;
            export declare const AutorizacaoArquivos: string;
            export declare const AutorizacaoDataSolicitacao: string;
            export declare const AutorizacaoDataAutorizacao: string;
            export declare const AutorizacaoDataValidade: string;
            export declare const AutorizacaoObservacao: string;
            export declare const AutorizacaoIdAuditoriaAprovada: string;
        }

        ['GuiaId', 'TipoGuiaId', 'TipoConsultaId', 'Guia', 'GuiaOperador', 'Carteirinha', 'NomePaciente', 'AutorizacaoId', 'NumeroAutorizacao', 'IdAuditada', 'DataAuditoria', 'IdAuditoriaAprovada', 'ConclusaoAuditoria', 'ProfissionalIdSolicitante', 'ProfissionalIdExecutante', 'TipoGuiaDescricao', 'TipoGuiaAtivo', 'TipoConsultaDescricao', 'TipoConsultaAtivo', 'AutorizacaoNumeroAutorizacao', 'AutorizacaoConvenioId', 'AutorizacaoPacienteId', 'AutorizacaoArquivos', 'AutorizacaoDataSolicitacao', 'AutorizacaoDataAutorizacao', 'AutorizacaoDataValidade', 'AutorizacaoObservacao', 'AutorizacaoIdAuditoriaAprovada'].forEach(x => (<any>Fields)[x] = x);
    }
}

