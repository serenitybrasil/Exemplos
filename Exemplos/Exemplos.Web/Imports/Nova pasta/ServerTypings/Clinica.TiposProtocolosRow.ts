namespace Exemplos.Clinica {
    export interface TiposProtocolosRow {
        TipoProtocoloId?: number;
        Descricao?: string;
    }

    export namespace TiposProtocolosRow {
        export const idProperty = 'TipoProtocoloId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.TiposProtocolos';
        export const lookupKey = 'Clinica.TiposProtocolos';

        export function getLookup(): Q.Lookup<TiposProtocolosRow> {
            return Q.getLookup<TiposProtocolosRow>('Clinica.TiposProtocolos');
        }

        export namespace Fields {
            export declare const TipoProtocoloId: string;
            export declare const Descricao: string;
        }

        ['TipoProtocoloId', 'Descricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

