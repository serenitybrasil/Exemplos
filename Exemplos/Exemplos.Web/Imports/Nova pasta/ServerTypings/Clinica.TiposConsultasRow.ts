namespace Exemplos.Clinica {
    export interface TiposConsultasRow {
        TipoConsultaId?: number;
        Descricao?: string;
        Ativo?: boolean;
    }

    export namespace TiposConsultasRow {
        export const idProperty = 'TipoConsultaId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.TiposConsultas';
        export const lookupKey = 'Clinica.TiposConsultas';

        export function getLookup(): Q.Lookup<TiposConsultasRow> {
            return Q.getLookup<TiposConsultasRow>('Clinica.TiposConsultas');
        }

        export namespace Fields {
            export declare const TipoConsultaId: string;
            export declare const Descricao: string;
            export declare const Ativo: string;
        }

        ['TipoConsultaId', 'Descricao', 'Ativo'].forEach(x => (<any>Fields)[x] = x);
    }
}

