namespace Exemplos.Clinica {
    export interface ProdutosRow {
        ProdutoId?: number;
        DescricaoProduto?: string;
        TipoProdutoId?: number;
        Descricao?: string;
        DescricaoResumida?: string;
        ValorVenda?: number;
        ValorCusto?: number;
        MargemLucroMinima?: number;
        FornecedorId?: number;
        GrupoProdutoId?: number;
        UnidadeId?: number;
        ObservacaoProduto?: string;
        Ativo?: boolean;
        DataCriacao?: string;
        LoginIdCriacao?: number;
        Inativo?: boolean;
        DataInativo?: string;
        LoginIdInativo?: number;
        PlanoContaId?: number;
        NcmId?: number;
        FornecedorStatus?: boolean;
        FornecedorPessoaJuridica?: boolean;
        FornecedorRazaoSocial?: string;
        FornecedorNomeFantasia?: string;
        FornecedorNomeAbreviado?: string;
        FornecedorCpf?: string;
        FornecedorRg?: string;
        FornecedorCnpj?: string;
        FornecedorInscricaoEstadual?: string;
        FornecedorInscricaoMunicipal?: string;
        FornecedorSite?: string;
        FornecedorTelefone?: string;
        FornecedorFax?: string;
        FornecedorTelefoneAlternativo?: string;
        FornecedorEmailCorporativo?: string;
        FornecedorAceitaReceberEmail?: boolean;
        FornecedorMotivoStatus?: string;
        FornecedorQuantidadeEmpregados?: number;
        FornecedorAtividadeEmpresaId?: number;
        FornecedorReceitaAnual?: number;
        FornecedorMarcasTrabalhadas?: string;
        FornecedorObservacoesGerais?: string;
        FornecedorDataCriacao?: string;
        FornecedorDataAlteracao?: string;
        FornecedorInativo?: boolean;
        FornecedorDataInativo?: string;
    }

    export namespace ProdutosRow {
        export const idProperty = 'ProdutoId';
        export const nameProperty = 'DescricaoProduto';
        export const localTextPrefix = 'Clinica.Produtos';
        export const lookupKey = 'Clinica.Produtos';

        export function getLookup(): Q.Lookup<ProdutosRow> {
            return Q.getLookup<ProdutosRow>('Clinica.Produtos');
        }

        export namespace Fields {
            export declare const ProdutoId: string;
            export declare const DescricaoProduto: string;
            export declare const TipoProdutoId: string;
            export declare const Descricao: string;
            export declare const DescricaoResumida: string;
            export declare const ValorVenda: string;
            export declare const ValorCusto: string;
            export declare const MargemLucroMinima: string;
            export declare const FornecedorId: string;
            export declare const GrupoProdutoId: string;
            export declare const UnidadeId: string;
            export declare const ObservacaoProduto: string;
            export declare const Ativo: string;
            export declare const DataCriacao: string;
            export declare const LoginIdCriacao: string;
            export declare const Inativo: string;
            export declare const DataInativo: string;
            export declare const LoginIdInativo: string;
            export declare const PlanoContaId: string;
            export declare const NcmId: string;
            export declare const FornecedorStatus: string;
            export declare const FornecedorPessoaJuridica: string;
            export declare const FornecedorRazaoSocial: string;
            export declare const FornecedorNomeFantasia: string;
            export declare const FornecedorNomeAbreviado: string;
            export declare const FornecedorCpf: string;
            export declare const FornecedorRg: string;
            export declare const FornecedorCnpj: string;
            export declare const FornecedorInscricaoEstadual: string;
            export declare const FornecedorInscricaoMunicipal: string;
            export declare const FornecedorSite: string;
            export declare const FornecedorTelefone: string;
            export declare const FornecedorFax: string;
            export declare const FornecedorTelefoneAlternativo: string;
            export declare const FornecedorEmailCorporativo: string;
            export declare const FornecedorAceitaReceberEmail: string;
            export declare const FornecedorMotivoStatus: string;
            export declare const FornecedorQuantidadeEmpregados: string;
            export declare const FornecedorAtividadeEmpresaId: string;
            export declare const FornecedorReceitaAnual: string;
            export declare const FornecedorMarcasTrabalhadas: string;
            export declare const FornecedorObservacoesGerais: string;
            export declare const FornecedorDataCriacao: string;
            export declare const FornecedorDataAlteracao: string;
            export declare const FornecedorInativo: string;
            export declare const FornecedorDataInativo: string;
        }

        ['ProdutoId', 'DescricaoProduto', 'TipoProdutoId', 'Descricao', 'DescricaoResumida', 'ValorVenda', 'ValorCusto', 'MargemLucroMinima', 'FornecedorId', 'GrupoProdutoId', 'UnidadeId', 'ObservacaoProduto', 'Ativo', 'DataCriacao', 'LoginIdCriacao', 'Inativo', 'DataInativo', 'LoginIdInativo', 'PlanoContaId', 'NcmId', 'FornecedorStatus', 'FornecedorPessoaJuridica', 'FornecedorRazaoSocial', 'FornecedorNomeFantasia', 'FornecedorNomeAbreviado', 'FornecedorCpf', 'FornecedorRg', 'FornecedorCnpj', 'FornecedorInscricaoEstadual', 'FornecedorInscricaoMunicipal', 'FornecedorSite', 'FornecedorTelefone', 'FornecedorFax', 'FornecedorTelefoneAlternativo', 'FornecedorEmailCorporativo', 'FornecedorAceitaReceberEmail', 'FornecedorMotivoStatus', 'FornecedorQuantidadeEmpregados', 'FornecedorAtividadeEmpresaId', 'FornecedorReceitaAnual', 'FornecedorMarcasTrabalhadas', 'FornecedorObservacoesGerais', 'FornecedorDataCriacao', 'FornecedorDataAlteracao', 'FornecedorInativo', 'FornecedorDataInativo'].forEach(x => (<any>Fields)[x] = x);
    }
}

