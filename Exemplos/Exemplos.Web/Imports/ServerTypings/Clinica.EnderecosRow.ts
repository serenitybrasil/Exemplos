namespace Exemplos.Clinica {
    export interface EnderecosRow {
        EnderecoId?: number;
        PacienteId?: number;
        ConvenioId?: number;
        ProfissionalId?: number;
        FornecedorId?: number;
        TipoEnderecoId?: number;
        Rua?: string;
        Numero?: string;
        Complemento?: string;
        Bairro?: string;
        Cidade?: string;
        CodigoIbgeCidade?: string;
        Estado?: string;
        CodigoIbgeEstado?: string;
        Pais?: string;
        Cep?: string;
        Referencia?: string;
        Observacao?: string;
        Latitude?: string;
        Longitude?: string;
        TipoEndereco?: string;
        TipoEnderecoPessoaFisica?: boolean;
        TipoEnderecoOrdem?: number;
    }

    export namespace EnderecosRow {
        export const idProperty = 'EnderecoId';
        export const nameProperty = 'Rua';
        export const localTextPrefix = 'Clinica.Enderecos';
        export const lookupKey = 'Clinica.Enderecos';

        export function getLookup(): Q.Lookup<EnderecosRow> {
            return Q.getLookup<EnderecosRow>('Clinica.Enderecos');
        }

        export namespace Fields {
            export declare const EnderecoId: string;
            export declare const PacienteId: string;
            export declare const ConvenioId: string;
            export declare const ProfissionalId: string;
            export declare const FornecedorId: string;
            export declare const TipoEnderecoId: string;
            export declare const Rua: string;
            export declare const Numero: string;
            export declare const Complemento: string;
            export declare const Bairro: string;
            export declare const Cidade: string;
            export declare const CodigoIbgeCidade: string;
            export declare const Estado: string;
            export declare const CodigoIbgeEstado: string;
            export declare const Pais: string;
            export declare const Cep: string;
            export declare const Referencia: string;
            export declare const Observacao: string;
            export declare const Latitude: string;
            export declare const Longitude: string;
            export declare const TipoEndereco: string;
            export declare const TipoEnderecoPessoaFisica: string;
            export declare const TipoEnderecoOrdem: string;
        }

        ['EnderecoId', 'PacienteId', 'ConvenioId', 'ProfissionalId', 'FornecedorId', 'TipoEnderecoId', 'Rua', 'Numero', 'Complemento', 'Bairro', 'Cidade', 'CodigoIbgeCidade', 'Estado', 'CodigoIbgeEstado', 'Pais', 'Cep', 'Referencia', 'Observacao', 'Latitude', 'Longitude', 'TipoEndereco', 'TipoEnderecoPessoaFisica', 'TipoEnderecoOrdem'].forEach(x => (<any>Fields)[x] = x);
    }
}

