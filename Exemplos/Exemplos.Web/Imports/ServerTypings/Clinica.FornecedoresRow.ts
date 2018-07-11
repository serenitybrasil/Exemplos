namespace Exemplos.Clinica {
    export interface FornecedoresRow {
        FornecedorId?: number;
        Status?: boolean;
        PessoaJuridica?: boolean;
        RazaoSocial?: string;
        NomeFantasia?: string;
        NomeAbreviado?: string;
        Cpf?: string;
        Rg?: string;
        Cnpj?: string;
        InscricaoEstadual?: string;
        InscricaoMunicipal?: string;
        Site?: string;
        Telefone?: string;
        Fax?: string;
        TelefoneAlternativo?: string;
        EmailCorporativo?: string;
        AceitaReceberEmail?: boolean;
        MotivoStatus?: string;
        QuantidadeEmpregados?: number;
        AtividadeEmpresaId?: number;
        ReceitaAnual?: number;
        MarcasTrabalhadas?: string;
        ObservacoesGerais?: string;
        DataCriacao?: string;
        DataAlteracao?: string;
        Inativo?: boolean;
        DataInativo?: string;
        ContatosList?: ContatosRow[];
        EnderecosList?: EnderecosRow[];
    }

    export namespace FornecedoresRow {
        export const idProperty = 'FornecedorId';
        export const nameProperty = 'RazaoSocial';
        export const localTextPrefix = 'Clinica.Fornecedores';
        export const lookupKey = 'Clinica.Fornecedores';

        export function getLookup(): Q.Lookup<FornecedoresRow> {
            return Q.getLookup<FornecedoresRow>('Clinica.Fornecedores');
        }

        export namespace Fields {
            export declare const FornecedorId: string;
            export declare const Status: string;
            export declare const PessoaJuridica: string;
            export declare const RazaoSocial: string;
            export declare const NomeFantasia: string;
            export declare const NomeAbreviado: string;
            export declare const Cpf: string;
            export declare const Rg: string;
            export declare const Cnpj: string;
            export declare const InscricaoEstadual: string;
            export declare const InscricaoMunicipal: string;
            export declare const Site: string;
            export declare const Telefone: string;
            export declare const Fax: string;
            export declare const TelefoneAlternativo: string;
            export declare const EmailCorporativo: string;
            export declare const AceitaReceberEmail: string;
            export declare const MotivoStatus: string;
            export declare const QuantidadeEmpregados: string;
            export declare const AtividadeEmpresaId: string;
            export declare const ReceitaAnual: string;
            export declare const MarcasTrabalhadas: string;
            export declare const ObservacoesGerais: string;
            export declare const DataCriacao: string;
            export declare const DataAlteracao: string;
            export declare const Inativo: string;
            export declare const DataInativo: string;
            export declare const ContatosList: string;
            export declare const EnderecosList: string;
        }

        ['FornecedorId', 'Status', 'PessoaJuridica', 'RazaoSocial', 'NomeFantasia', 'NomeAbreviado', 'Cpf', 'Rg', 'Cnpj', 'InscricaoEstadual', 'InscricaoMunicipal', 'Site', 'Telefone', 'Fax', 'TelefoneAlternativo', 'EmailCorporativo', 'AceitaReceberEmail', 'MotivoStatus', 'QuantidadeEmpregados', 'AtividadeEmpresaId', 'ReceitaAnual', 'MarcasTrabalhadas', 'ObservacoesGerais', 'DataCriacao', 'DataAlteracao', 'Inativo', 'DataInativo', 'ContatosList', 'EnderecosList'].forEach(x => (<any>Fields)[x] = x);
    }
}

