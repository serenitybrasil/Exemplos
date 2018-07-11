namespace Exemplos.Clinica {
    export interface TiposAutorizacoesRow {
        TipoAutorizacaoId?: number;
        Descricao?: string;
    }

    export namespace TiposAutorizacoesRow {
        export const idProperty = 'TipoAutorizacaoId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.TiposAutorizacoes';
        export const lookupKey = 'Clinica.TiposAutorizacoes';

        export function getLookup(): Q.Lookup<TiposAutorizacoesRow> {
            return Q.getLookup<TiposAutorizacoesRow>('Clinica.TiposAutorizacoes');
        }

        export namespace Fields {
            export declare const TipoAutorizacaoId: string;
            export declare const Descricao: string;
        }

        ['TipoAutorizacaoId', 'Descricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

