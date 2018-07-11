namespace Exemplos.Clinica {
    export interface EspecialidadesRow {
        EspecialidadeId?: number;
        TipoEspecialidadeId?: number;
        Descricao?: string;
        VisivelAgenda?: boolean;
        TipoEspecialidadeDescricao?: string;
    }

    export namespace EspecialidadesRow {
        export const idProperty = 'EspecialidadeId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.Especialidades';
        export const lookupKey = 'Clinica.Especialidades';

        export function getLookup(): Q.Lookup<EspecialidadesRow> {
            return Q.getLookup<EspecialidadesRow>('Clinica.Especialidades');
        }

        export namespace Fields {
            export declare const EspecialidadeId: string;
            export declare const TipoEspecialidadeId: string;
            export declare const Descricao: string;
            export declare const VisivelAgenda: string;
            export declare const TipoEspecialidadeDescricao: string;
        }

        ['EspecialidadeId', 'TipoEspecialidadeId', 'Descricao', 'VisivelAgenda', 'TipoEspecialidadeDescricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

