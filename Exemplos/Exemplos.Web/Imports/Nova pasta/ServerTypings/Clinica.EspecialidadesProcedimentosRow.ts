namespace Exemplos.Clinica {
    export interface EspecialidadesProcedimentosRow {
        EspecialidadesProcedimentosId?: number;
        EspecialidadeId?: number;
        ProcedimentoId?: number;
        DataInicio?: string;
        DataFim?: string;
        Observacao?: string;
        DataCadastrada?: string;
        IdCodigoRegistrado?: boolean;
        EspecialidadeTipoEspecialidadeId?: number;
        EspecialidadeDescricao?: string;
        EspecialidadeVisivelAgenda?: boolean;
        ProcedimentoTabelaId?: number;
        Procedimento?: string;
        ProcedimentoCodigo?: string;
        ProcedimentoCh?: number;
        ProcedimentoCodigoCbhpm?: string;
        ProcedimentoCodigoTuss?: string;
        ProcedimentoDataCadastrada?: string;
        ProcedimentoIdCodigoRegistrado?: boolean;
    }

    export namespace EspecialidadesProcedimentosRow {
        export const idProperty = 'EspecialidadesProcedimentosId';
        export const nameProperty = 'Observacao';
        export const localTextPrefix = 'Clinica.EspecialidadesProcedimentos';
        export const lookupKey = 'Clinica.EspecialidadesProcedimentos';

        export function getLookup(): Q.Lookup<EspecialidadesProcedimentosRow> {
            return Q.getLookup<EspecialidadesProcedimentosRow>('Clinica.EspecialidadesProcedimentos');
        }

        export namespace Fields {
            export declare const EspecialidadesProcedimentosId: string;
            export declare const EspecialidadeId: string;
            export declare const ProcedimentoId: string;
            export declare const DataInicio: string;
            export declare const DataFim: string;
            export declare const Observacao: string;
            export declare const DataCadastrada: string;
            export declare const IdCodigoRegistrado: string;
            export declare const EspecialidadeTipoEspecialidadeId: string;
            export declare const EspecialidadeDescricao: string;
            export declare const EspecialidadeVisivelAgenda: string;
            export declare const ProcedimentoTabelaId: string;
            export declare const Procedimento: string;
            export declare const ProcedimentoCodigo: string;
            export declare const ProcedimentoCh: string;
            export declare const ProcedimentoCodigoCbhpm: string;
            export declare const ProcedimentoCodigoTuss: string;
            export declare const ProcedimentoDataCadastrada: string;
            export declare const ProcedimentoIdCodigoRegistrado: string;
        }

        ['EspecialidadesProcedimentosId', 'EspecialidadeId', 'ProcedimentoId', 'DataInicio', 'DataFim', 'Observacao', 'DataCadastrada', 'IdCodigoRegistrado', 'EspecialidadeTipoEspecialidadeId', 'EspecialidadeDescricao', 'EspecialidadeVisivelAgenda', 'ProcedimentoTabelaId', 'Procedimento', 'ProcedimentoCodigo', 'ProcedimentoCh', 'ProcedimentoCodigoCbhpm', 'ProcedimentoCodigoTuss', 'ProcedimentoDataCadastrada', 'ProcedimentoIdCodigoRegistrado'].forEach(x => (<any>Fields)[x] = x);
    }
}

