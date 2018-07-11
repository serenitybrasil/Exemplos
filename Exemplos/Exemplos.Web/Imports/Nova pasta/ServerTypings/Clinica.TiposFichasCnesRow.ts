namespace Exemplos.Clinica {
    export interface TiposFichasCnesRow {
        TipoFichaCnes?: number;
        Descricao?: string;
    }

    export namespace TiposFichasCnesRow {
        export const idProperty = 'TipoFichaCnes';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.TiposFichasCnes';
        export const lookupKey = 'Clinica.TiposFichasCnes';

        export function getLookup(): Q.Lookup<TiposFichasCnesRow> {
            return Q.getLookup<TiposFichasCnesRow>('Clinica.TiposFichasCnes');
        }

        export namespace Fields {
            export declare const TipoFichaCnes: string;
            export declare const Descricao: string;
        }

        ['TipoFichaCnes', 'Descricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

