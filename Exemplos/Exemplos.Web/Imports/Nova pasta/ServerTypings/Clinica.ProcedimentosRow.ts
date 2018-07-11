namespace Exemplos.Clinica {
    export interface ProcedimentosRow {
        ProcedimentoId?: number;
        TabelaId?: number;
        Procedimento?: string;
        Codigo?: string;
        Ch?: number;
        CodigoCbhpm?: string;
        CodigoTuss?: string;
        DataCadastrada?: string;
        IdCodigoRegistrado?: boolean;
        TabelaDescricao?: string;
    }

    export namespace ProcedimentosRow {
        export const idProperty = 'ProcedimentoId';
        export const nameProperty = 'Procedimento';
        export const localTextPrefix = 'Clinica.Procedimentos';
        export const lookupKey = 'Clinica.Procedimentos';

        export function getLookup(): Q.Lookup<ProcedimentosRow> {
            return Q.getLookup<ProcedimentosRow>('Clinica.Procedimentos');
        }

        export namespace Fields {
            export declare const ProcedimentoId: string;
            export declare const TabelaId: string;
            export declare const Procedimento: string;
            export declare const Codigo: string;
            export declare const Ch: string;
            export declare const CodigoCbhpm: string;
            export declare const CodigoTuss: string;
            export declare const DataCadastrada: string;
            export declare const IdCodigoRegistrado: string;
            export declare const TabelaDescricao: string;
        }

        ['ProcedimentoId', 'TabelaId', 'Procedimento', 'Codigo', 'Ch', 'CodigoCbhpm', 'CodigoTuss', 'DataCadastrada', 'IdCodigoRegistrado', 'TabelaDescricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

