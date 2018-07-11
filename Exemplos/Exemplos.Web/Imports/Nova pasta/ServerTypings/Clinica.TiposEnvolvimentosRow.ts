namespace Exemplos.Clinica {
    export interface TiposEnvolvimentosRow {
        TipoEnvolvimentoId?: number;
        Descricao?: string;
    }

    export namespace TiposEnvolvimentosRow {
        export const idProperty = 'TipoEnvolvimentoId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.TiposEnvolvimentos';
        export const lookupKey = 'Clinica.TiposEnvolvimentos';

        export function getLookup(): Q.Lookup<TiposEnvolvimentosRow> {
            return Q.getLookup<TiposEnvolvimentosRow>('Clinica.TiposEnvolvimentos');
        }

        export namespace Fields {
            export declare const TipoEnvolvimentoId: string;
            export declare const Descricao: string;
        }

        ['TipoEnvolvimentoId', 'Descricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

