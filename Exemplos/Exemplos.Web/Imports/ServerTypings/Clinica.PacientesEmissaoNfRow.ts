namespace Exemplos.Clinica {
    export interface PacientesEmissaoNfRow {
        PacienteEmissaoNf?: number;
        PacienteId?: number;
        NomeResponsavel?: string;
        PessoaJuridica?: boolean;
        CpfResponsavel?: string;
        CnpjResponsavel?: string;
        EmailNf?: string;
        Padrao?: boolean;
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
        PacienteMatricula?: string;
        Paciente?: string;
        TipoEndereco?: string;
        TipoEnderecoPessoaFisica?: boolean;
        TipoEnderecoOrdem?: number;
    }

    export namespace PacientesEmissaoNfRow {
        export const idProperty = 'PacienteEmissaoNf';
        export const nameProperty = 'NomeResponsavel';
        export const localTextPrefix = 'Clinica.PacientesEmissaoNf';
        export const lookupKey = 'Clinica.PacientesEmissaoNf';

        export function getLookup(): Q.Lookup<PacientesEmissaoNfRow> {
            return Q.getLookup<PacientesEmissaoNfRow>('Clinica.PacientesEmissaoNf');
        }

        export namespace Fields {
            export declare const PacienteEmissaoNf: string;
            export declare const PacienteId: string;
            export declare const NomeResponsavel: string;
            export declare const PessoaJuridica: string;
            export declare const CpfResponsavel: string;
            export declare const CnpjResponsavel: string;
            export declare const EmailNf: string;
            export declare const Padrao: string;
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
            export declare const PacienteMatricula: string;
            export declare const Paciente: string;
            export declare const TipoEndereco: string;
            export declare const TipoEnderecoPessoaFisica: string;
            export declare const TipoEnderecoOrdem: string;
        }

        ['PacienteEmissaoNf', 'PacienteId', 'NomeResponsavel', 'PessoaJuridica', 'CpfResponsavel', 'CnpjResponsavel', 'EmailNf', 'Padrao', 'TipoEnderecoId', 'Rua', 'Numero', 'Complemento', 'Bairro', 'Cidade', 'CodigoIbgeCidade', 'Estado', 'CodigoIbgeEstado', 'Pais', 'Cep', 'Referencia', 'PacienteMatricula', 'Paciente', 'TipoEndereco', 'TipoEnderecoPessoaFisica', 'TipoEnderecoOrdem'].forEach(x => (<any>Fields)[x] = x);
    }
}

