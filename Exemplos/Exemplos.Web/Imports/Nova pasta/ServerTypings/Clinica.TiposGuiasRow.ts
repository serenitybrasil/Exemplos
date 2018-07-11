namespace Exemplos.Clinica {
    export interface TiposGuiasRow {
        TipoGuiaId?: number;
        Descricao?: string;
        Ativo?: boolean;
    }

    export namespace TiposGuiasRow {
        export const idProperty = 'TipoGuiaId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.TiposGuias';
        export const lookupKey = 'Clinica.TiposGuias';

        export function getLookup(): Q.Lookup<TiposGuiasRow> {
            return Q.getLookup<TiposGuiasRow>('Clinica.TiposGuias');
        }

        export namespace Fields {
            export declare const TipoGuiaId: string;
            export declare const Descricao: string;
            export declare const Ativo: string;
        }

        ['TipoGuiaId', 'Descricao', 'Ativo'].forEach(x => (<any>Fields)[x] = x);
    }
}

