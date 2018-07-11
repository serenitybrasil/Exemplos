namespace Exemplos.Clinica {
    export interface TiposEnderecosRow {
        TipoEnderecoId?: number;
        TipoEndereco?: string;
        PessoaFisica?: boolean;
        Ordem?: number;
    }

    export namespace TiposEnderecosRow {
        export const idProperty = 'TipoEnderecoId';
        export const nameProperty = 'TipoEndereco';
        export const localTextPrefix = 'Clinica.TiposEnderecos';
        export const lookupKey = 'Clinica.TiposEnderecos';

        export function getLookup(): Q.Lookup<TiposEnderecosRow> {
            return Q.getLookup<TiposEnderecosRow>('Clinica.TiposEnderecos');
        }

        export namespace Fields {
            export declare const TipoEnderecoId: string;
            export declare const TipoEndereco: string;
            export declare const PessoaFisica: string;
            export declare const Ordem: string;
        }

        ['TipoEnderecoId', 'TipoEndereco', 'PessoaFisica', 'Ordem'].forEach(x => (<any>Fields)[x] = x);
    }
}

