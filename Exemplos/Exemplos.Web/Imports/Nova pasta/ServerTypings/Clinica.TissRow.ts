namespace Exemplos.Clinica {
    export interface TissRow {
        Tissid?: number;
        Versao?: string;
    }

    export namespace TissRow {
        export const idProperty = 'Tissid';
        export const nameProperty = 'Versao';
        export const localTextPrefix = 'Clinica.Tiss';
        export const lookupKey = 'Clinica.Tiss';

        export function getLookup(): Q.Lookup<TissRow> {
            return Q.getLookup<TissRow>('Clinica.Tiss');
        }

        export namespace Fields {
            export declare const Tissid: string;
            export declare const Versao: string;
        }

        ['Tissid', 'Versao'].forEach(x => (<any>Fields)[x] = x);
    }
}

