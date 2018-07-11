namespace Exemplos.Clinica {
    export interface DemonstrativosRow {
        DemonstrativoId?: number;
        ConvenioId?: number;
        Demonstrativo?: string;
        DataDemonstrativo?: string;
        DataPagamento?: string;
        Observacoes?: string;
        ValorProcessado?: number;
        ValorLiberado?: number;
        ValorGlosado?: number;
        NumeroLotePrestador?: string;
        NumeroProtocolo?: string;
        DataProtocolo?: string;
        Observacao?: string;
        Arquivos?: string;
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

    export namespace DemonstrativosRow {
        export const idProperty = 'DemonstrativoId';
        export const nameProperty = 'Demonstrativo';
        export const localTextPrefix = 'Clinica.Demonstrativos';
        export const lookupKey = 'Clinica.Demonstrativos';

        export function getLookup(): Q.Lookup<DemonstrativosRow> {
            return Q.getLookup<DemonstrativosRow>('Clinica.Demonstrativos');
        }

        export namespace Fields {
            export declare const DemonstrativoId: string;
            export declare const ConvenioId: string;
            export declare const Demonstrativo: string;
            export declare const DataDemonstrativo: string;
            export declare const DataPagamento: string;
            export declare const Observacoes: string;
            export declare const ValorProcessado: string;
            export declare const ValorLiberado: string;
            export declare const ValorGlosado: string;
            export declare const NumeroLotePrestador: string;
            export declare const NumeroProtocolo: string;
            export declare const DataProtocolo: string;
            export declare const Observacao: string;
            export declare const Arquivos: string;
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

        ['DemonstrativoId', 'ConvenioId', 'Demonstrativo', 'DataDemonstrativo', 'DataPagamento', 'Observacoes', 'ValorProcessado', 'ValorLiberado', 'ValorGlosado', 'NumeroLotePrestador', 'NumeroProtocolo', 'DataProtocolo', 'Observacao', 'Arquivos', 'ConvenioCnpj', 'ConvenioRazaoSocial', 'ConvenioNomeFantasia', 'ConvenioCodigoAns', 'ConvenioCadastroConvenio', 'ConvenioLogo', 'ConvenioInscricaoMunicipal', 'ConvenioInscricaoEstadual', 'ConvenioSite', 'ConvenioDataInicio', 'ConvenioInativo', 'ConvenioDataFim', 'ConvenioMotivoCancelamento', 'ConvenioObservacao', 'ConvenioVersaoTiss', 'ConvenioWebService', 'ConvenioSadtSolContratadoId', 'ConvenioSadtExecutanteId', 'ConvenioSadtProfissionalexecutante', 'ConvenioSadtMembroEquipe', 'ConvenioIdOrigem', 'ConvenioIdDestino', 'ConvenioOrigemIdPrestador', 'ConvenioDestinoIdPrestador', 'ConvenioIdLogo', 'ConvenioGeraTiss', 'ConvenioDataCadastro', 'ConvenioDataUltimaAtualizacao', 'ConvenioLatitude', 'ConvenioLongitude', 'ConvenioEmailNotaFiscal', 'ConvenioEmailContato', 'ConvenioEmailFaturamento', 'ConvenioEmailGlosa'].forEach(x => (<any>Fields)[x] = x);
    }
}

