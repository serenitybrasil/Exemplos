namespace Exemplos.Clinica {
    export interface AutorizacoesProcedimentosRow {
        AutorizacaoProcedimentoId?: number;
        AutorizacaoId?: number;
        ProcedimentoId?: number;
        Procedimento?: string;
        QuantidadeLiberada?: number;
        DataInicial?: string;
        DataFinal?: string;
        Observacao?: string;
        IdAuditada?: boolean;
        DataAuditoria?: string;
        IdAuditoriaAprovada?: boolean;
        ConclusaoAuditoria?: string;
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

    export namespace AutorizacoesProcedimentosRow {
        export const idProperty = 'AutorizacaoProcedimentoId';
        export const nameProperty = 'Procedimento';
        export const localTextPrefix = 'Clinica.AutorizacoesProcedimentos';
        export const lookupKey = 'Clinica.AutorizacoesProcedimentos';

        export function getLookup(): Q.Lookup<AutorizacoesProcedimentosRow> {
            return Q.getLookup<AutorizacoesProcedimentosRow>('Clinica.AutorizacoesProcedimentos');
        }

        export namespace Fields {
            export declare const AutorizacaoProcedimentoId: string;
            export declare const AutorizacaoId: string;
            export declare const ProcedimentoId: string;
            export declare const Procedimento: string;
            export declare const QuantidadeLiberada: string;
            export declare const DataInicial: string;
            export declare const DataFinal: string;
            export declare const Observacao: string;
            export declare const IdAuditada: string;
            export declare const DataAuditoria: string;
            export declare const IdAuditoriaAprovada: string;
            export declare const ConclusaoAuditoria: string;
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

        ['AutorizacaoProcedimentoId', 'AutorizacaoId', 'ProcedimentoId', 'Procedimento', 'QuantidadeLiberada', 'DataInicial', 'DataFinal', 'Observacao', 'IdAuditada', 'DataAuditoria', 'IdAuditoriaAprovada', 'ConclusaoAuditoria', 'AutorizacaoNumeroAutorizacao', 'AutorizacaoConvenioId', 'AutorizacaoPacienteId', 'AutorizacaoArquivos', 'AutorizacaoDataSolicitacao', 'AutorizacaoDataAutorizacao', 'AutorizacaoDataValidade', 'AutorizacaoObservacao', 'AutorizacaoIdAuditoriaAprovada'].forEach(x => (<any>Fields)[x] = x);
    }
}

