namespace Exemplos.Clinica {
    export interface CbosRow {
        Cbosid?: number;
        Codigo?: string;
        Cbos?: string;
    }

    export namespace CbosRow {
        export const idProperty = 'Cbosid';
        export const nameProperty = 'Codigo';
        export const localTextPrefix = 'Clinica.Cbos';
        export const lookupKey = 'Clinica.Cbos';

        export function getLookup(): Q.Lookup<CbosRow> {
            return Q.getLookup<CbosRow>('Clinica.Cbos');
        }

        export namespace Fields {
            export declare const Cbosid: string;
            export declare const Codigo: string;
            export declare const Cbos: string;
        }

        ['Cbosid', 'Codigo', 'Cbos'].forEach(x => (<any>Fields)[x] = x);
    }
}

