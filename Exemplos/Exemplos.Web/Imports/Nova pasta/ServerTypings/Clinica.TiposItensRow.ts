namespace Exemplos.Clinica {
    export interface TiposItensRow {
        TipoItemId?: number;
        Descricao?: string;
        Ativo?: boolean;
    }

    export namespace TiposItensRow {
        export const idProperty = 'TipoItemId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.TiposItens';
        export const lookupKey = 'Clinica.TiposItens';

        export function getLookup(): Q.Lookup<TiposItensRow> {
            return Q.getLookup<TiposItensRow>('Clinica.TiposItens');
        }

        export namespace Fields {
            export declare const TipoItemId: string;
            export declare const Descricao: string;
            export declare const Ativo: string;
        }

        ['TipoItemId', 'Descricao', 'Ativo'].forEach(x => (<any>Fields)[x] = x);
    }
}

