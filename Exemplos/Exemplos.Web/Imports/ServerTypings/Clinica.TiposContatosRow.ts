namespace Exemplos.Clinica {
    export interface TiposContatosRow {
        TipoContatoId?: number;
        TipoContato?: string;
        PessoaFisica?: boolean;
        Ordem?: number;
    }

    export namespace TiposContatosRow {
        export const idProperty = 'TipoContatoId';
        export const nameProperty = 'TipoContato';
        export const localTextPrefix = 'Clinica.TiposContatos';
        export const lookupKey = 'Clinica.TiposContatos';

        export function getLookup(): Q.Lookup<TiposContatosRow> {
            return Q.getLookup<TiposContatosRow>('Clinica.TiposContatos');
        }

        export namespace Fields {
            export declare const TipoContatoId: string;
            export declare const TipoContato: string;
            export declare const PessoaFisica: string;
            export declare const Ordem: string;
        }

        ['TipoContatoId', 'TipoContato', 'PessoaFisica', 'Ordem'].forEach(x => (<any>Fields)[x] = x);
    }
}

