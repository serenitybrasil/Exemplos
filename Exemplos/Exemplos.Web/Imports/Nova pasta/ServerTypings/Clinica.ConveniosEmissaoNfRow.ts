namespace Exemplos.Clinica {
    export interface ConveniosEmissaoNfRow {
        ConvenioEmissaoNf?: number;
        ConvenioId?: number;
        RazaoSocial?: string;
        Cnpj?: string;
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
        DataInicio?: string;
        DataFim?: string;
        Motivo?: string;
        ConvenioCnpj?: string;
        ConvenioRazaoSocial?: string;
        ConvenioNomeFantasia?: string;
        ConvenioCodigoAns?: string;
        ConvenioCadastroConvenio?: string;
        ConvenioLogo?: string;
        ConvenioInscricaoMunicipal?: string;
        ConvenioInscricaoEstadual?: string;
        ConvenioSite?: string;
        ConvenioDataInicio?: string;
        ConvenioInativo?: boolean;
        ConvenioDataFim?: string;
        ConvenioMotivoCancelamento?: string;
        ConvenioObservacao?: string;
        ConvenioVersaoTiss?: string;
        ConvenioWebService?: string;
        ConvenioSadtSolContratadoId?: string;
        ConvenioSadtExecutanteId?: string;
        ConvenioSadtProfissionalexecutante?: string;
        ConvenioSadtMembroEquipe?: string;
        ConvenioIdOrigem?: string;
        ConvenioIdDestino?: string;
        ConvenioOrigemIdPrestador?: string;
        ConvenioDestinoIdPrestador?: string;
        ConvenioIdLogo?: number;
        ConvenioGeraTiss?: boolean;
        ConvenioDataCadastro?: string;
        ConvenioDataUltimaAtualizacao?: string;
        ConvenioLatitude?: string;
        ConvenioLongitude?: string;
        ConvenioEmailNotaFiscal?: string;
        ConvenioEmailContato?: string;
        ConvenioEmailFaturamento?: string;
        ConvenioEmailGlosa?: string;
    }

    export namespace ConveniosEmissaoNfRow {
        export const idProperty = 'ConvenioEmissaoNf';
        export const nameProperty = 'RazaoSocial';
        export const localTextPrefix = 'Clinica.ConveniosEmissaoNf';
        export const lookupKey = 'Clinica.ConveniosEmissaoNf';

        export function getLookup(): Q.Lookup<ConveniosEmissaoNfRow> {
            return Q.getLookup<ConveniosEmissaoNfRow>('Clinica.ConveniosEmissaoNf');
        }

        export namespace Fields {
            export declare const ConvenioEmissaoNf: string;
            export declare const ConvenioId: string;
            export declare const RazaoSocial: string;
            export declare const Cnpj: string;
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
            export declare const DataInicio: string;
            export declare const DataFim: string;
            export declare const Motivo: string;
            export declare const ConvenioCnpj: string;
            export declare const ConvenioRazaoSocial: string;
            export declare const ConvenioNomeFantasia: string;
            export declare const ConvenioCodigoAns: string;
            export declare const ConvenioCadastroConvenio: string;
            export declare const ConvenioLogo: string;
            export declare const ConvenioInscricaoMunicipal: string;
            export declare const ConvenioInscricaoEstadual: string;
            export declare const ConvenioSite: string;
            export declare const ConvenioDataInicio: string;
            export declare const ConvenioInativo: string;
            export declare const ConvenioDataFim: string;
            export declare const ConvenioMotivoCancelamento: string;
            export declare const ConvenioObservacao: string;
            export declare const ConvenioVersaoTiss: string;
            export declare const ConvenioWebService: string;
            export declare const ConvenioSadtSolContratadoId: string;
            export declare const ConvenioSadtExecutanteId: string;
            export declare const ConvenioSadtProfissionalexecutante: string;
            export declare const ConvenioSadtMembroEquipe: string;
            export declare const ConvenioIdOrigem: string;
            export declare const ConvenioIdDestino: string;
            export declare const ConvenioOrigemIdPrestador: string;
            export declare const ConvenioDestinoIdPrestador: string;
            export declare const ConvenioIdLogo: string;
            export declare const ConvenioGeraTiss: string;
            export declare const ConvenioDataCadastro: string;
            export declare const ConvenioDataUltimaAtualizacao: string;
            export declare const ConvenioLatitude: string;
            export declare const ConvenioLongitude: string;
            export declare const ConvenioEmailNotaFiscal: string;
            export declare const ConvenioEmailContato: string;
            export declare const ConvenioEmailFaturamento: string;
            export declare const ConvenioEmailGlosa: string;
        }

        ['ConvenioEmissaoNf', 'ConvenioId', 'RazaoSocial', 'Cnpj', 'EmailNf', 'Padrao', 'TipoEnderecoId', 'Rua', 'Numero', 'Complemento', 'Bairro', 'Cidade', 'CodigoIbgeCidade', 'Estado', 'CodigoIbgeEstado', 'Pais', 'Cep', 'Referencia', 'DataInicio', 'DataFim', 'Motivo', 'ConvenioCnpj', 'ConvenioRazaoSocial', 'ConvenioNomeFantasia', 'ConvenioCodigoAns', 'ConvenioCadastroConvenio', 'ConvenioLogo', 'ConvenioInscricaoMunicipal', 'ConvenioInscricaoEstadual', 'ConvenioSite', 'ConvenioDataInicio', 'ConvenioInativo', 'ConvenioDataFim', 'ConvenioMotivoCancelamento', 'ConvenioObservacao', 'ConvenioVersaoTiss', 'ConvenioWebService', 'ConvenioSadtSolContratadoId', 'ConvenioSadtExecutanteId', 'ConvenioSadtProfissionalexecutante', 'ConvenioSadtMembroEquipe', 'ConvenioIdOrigem', 'ConvenioIdDestino', 'ConvenioOrigemIdPrestador', 'ConvenioDestinoIdPrestador', 'ConvenioIdLogo', 'ConvenioGeraTiss', 'ConvenioDataCadastro', 'ConvenioDataUltimaAtualizacao', 'ConvenioLatitude', 'ConvenioLongitude', 'ConvenioEmailNotaFiscal', 'ConvenioEmailContato', 'ConvenioEmailFaturamento', 'ConvenioEmailGlosa'].forEach(x => (<any>Fields)[x] = x);
    }
}

