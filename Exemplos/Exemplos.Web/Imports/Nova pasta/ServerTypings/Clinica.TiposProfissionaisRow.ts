namespace Exemplos.Clinica {
    export interface TiposProfissionaisRow {
        TipoProfissionalId?: number;
        Descricao?: string;
    }

    export namespace TiposProfissionaisRow {
        export const idProperty = 'TipoProfissionalId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.TiposProfissionais';
        export const lookupKey = 'Clinica.TiposProfissionais';

        export function getLookup(): Q.Lookup<TiposProfissionaisRow> {
            return Q.getLookup<TiposProfissionaisRow>('Clinica.TiposProfissionais');
        }

        export namespace Fields {
            export declare const TipoProfissionalId: string;
            export declare const Descricao: string;
        }

        ['TipoProfissionalId', 'Descricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

