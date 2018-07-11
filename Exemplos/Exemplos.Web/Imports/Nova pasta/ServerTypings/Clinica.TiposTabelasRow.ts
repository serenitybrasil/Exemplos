namespace Exemplos.Clinica {
    export interface TiposTabelasRow {
        TipoTabelaId?: number;
        Descricao?: string;
        CodigoTabela?: number;
        Tissid?: number;
        TissidVersao?: string;
    }

    export namespace TiposTabelasRow {
        export const idProperty = 'TipoTabelaId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.TiposTabelas';
        export const lookupKey = 'Clinica.TiposTabelas';

        export function getLookup(): Q.Lookup<TiposTabelasRow> {
            return Q.getLookup<TiposTabelasRow>('Clinica.TiposTabelas');
        }

        export namespace Fields {
            export declare const TipoTabelaId: string;
            export declare const Descricao: string;
            export declare const CodigoTabela: string;
            export declare const Tissid: string;
            export declare const TissidVersao: string;
        }

        ['TipoTabelaId', 'Descricao', 'CodigoTabela', 'Tissid', 'TissidVersao'].forEach(x => (<any>Fields)[x] = x);
    }
}

