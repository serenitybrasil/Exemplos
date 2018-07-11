namespace Exemplos.Clinica {
    export interface TiposMeiosContatosRow {
        TipoMeioContatoId?: number;
        TipoMeioContato?: string;
        Mascara?: string;
    }

    export namespace TiposMeiosContatosRow {
        export const idProperty = 'TipoMeioContatoId';
        export const nameProperty = 'TipoMeioContato';
        export const localTextPrefix = 'Clinica.TiposMeiosContatos';
        export const lookupKey = 'Clinica.TiposMeiosContatos';

        export function getLookup(): Q.Lookup<TiposMeiosContatosRow> {
            return Q.getLookup<TiposMeiosContatosRow>('Clinica.TiposMeiosContatos');
        }

        export namespace Fields {
            export declare const TipoMeioContatoId: string;
            export declare const TipoMeioContato: string;
            export declare const Mascara: string;
        }

        ['TipoMeioContatoId', 'TipoMeioContato', 'Mascara'].forEach(x => (<any>Fields)[x] = x);
    }
}

