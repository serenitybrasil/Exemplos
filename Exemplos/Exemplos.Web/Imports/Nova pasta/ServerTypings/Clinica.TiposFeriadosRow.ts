namespace Exemplos.Clinica {
    export interface TiposFeriadosRow {
        TipoFeriadoId?: number;
        TipoFeriado?: string;
    }

    export namespace TiposFeriadosRow {
        export const idProperty = 'TipoFeriadoId';
        export const nameProperty = 'TipoFeriado';
        export const localTextPrefix = 'Clinica.TiposFeriados';
        export const lookupKey = 'Clinica.TiposFeriados';

        export function getLookup(): Q.Lookup<TiposFeriadosRow> {
            return Q.getLookup<TiposFeriadosRow>('Clinica.TiposFeriados');
        }

        export namespace Fields {
            export declare const TipoFeriadoId: string;
            export declare const TipoFeriado: string;
        }

        ['TipoFeriadoId', 'TipoFeriado'].forEach(x => (<any>Fields)[x] = x);
    }
}

