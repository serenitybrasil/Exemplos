namespace Exemplos.Clinica {
    export interface TabelasRow {
        TabelaId?: number;
        Descricao?: string;
    }

    export namespace TabelasRow {
        export const idProperty = 'TabelaId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.Tabelas';
        export const lookupKey = 'Clinica.Tabelas';

        export function getLookup(): Q.Lookup<TabelasRow> {
            return Q.getLookup<TabelasRow>('Clinica.Tabelas');
        }

        export namespace Fields {
            export declare const TabelaId: string;
            export declare const Descricao: string;
        }

        ['TabelaId', 'Descricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

