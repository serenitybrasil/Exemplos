namespace Exemplos.Clinica {
    export interface FeriadosRow {
        FeriadoId?: number;
        TipoFeriadoId?: number;
        DataFeriado?: string;
        Feriado?: string;
        Ativo?: boolean;
        TipoFeriado?: string;
    }

    export namespace FeriadosRow {
        export const idProperty = 'FeriadoId';
        export const nameProperty = 'Feriado';
        export const localTextPrefix = 'Clinica.Feriados';
        export const lookupKey = 'Clinica.Feriados';

        export function getLookup(): Q.Lookup<FeriadosRow> {
            return Q.getLookup<FeriadosRow>('Clinica.Feriados');
        }

        export namespace Fields {
            export declare const FeriadoId: string;
            export declare const TipoFeriadoId: string;
            export declare const DataFeriado: string;
            export declare const Feriado: string;
            export declare const Ativo: string;
            export declare const TipoFeriado: string;
        }

        ['FeriadoId', 'TipoFeriadoId', 'DataFeriado', 'Feriado', 'Ativo', 'TipoFeriado'].forEach(x => (<any>Fields)[x] = x);
    }
}

