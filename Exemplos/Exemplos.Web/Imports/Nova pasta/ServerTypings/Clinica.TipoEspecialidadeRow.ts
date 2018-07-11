namespace Exemplos.Clinica {
    export interface TipoEspecialidadeRow {
        TipoEspecialidadeId?: number;
        Descricao?: string;
    }

    export namespace TipoEspecialidadeRow {
        export const idProperty = 'TipoEspecialidadeId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.TipoEspecialidade';
        export const lookupKey = 'Clinica.TipoEspecialidade';

        export function getLookup(): Q.Lookup<TipoEspecialidadeRow> {
            return Q.getLookup<TipoEspecialidadeRow>('Clinica.TipoEspecialidade');
        }

        export namespace Fields {
            export declare const TipoEspecialidadeId: string;
            export declare const Descricao: string;
        }

        ['TipoEspecialidadeId', 'Descricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

