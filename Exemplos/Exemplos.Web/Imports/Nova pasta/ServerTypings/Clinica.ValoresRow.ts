namespace Exemplos.Clinica {
    export interface ValoresRow {
        ValorId?: number;
        TipoItemId?: number;
        TipoTabelaId?: number;
        ProcedimentoId?: number;
        ConvenioId?: number;
        ValorCh?: number;
        ValorSessao?: number;
        DataInicio?: string;
        DataFim?: string;
        Observacao?: string;
        DataCadastrada?: string;
        CodigoRegistrado?: boolean;
        RequerAutorizacao?: boolean;
        TipoAutorizacaoId?: number;
        TipoItemDescricao?: string;
        TipoItemAtivo?: boolean;
        TipoTabelaDescricao?: string;
        TipoTabelaCodigoTabela?: number;
        TipoTabelaTissid?: number;
        ProcedimentoTabelaId?: number;
        Procedimento?: string;
        ProcedimentoCodigo?: string;
        ProcedimentoCh?: number;
        ProcedimentoCodigoCbhpm?: string;
        ProcedimentoCodigoTuss?: string;
        ProcedimentoDataCadastrada?: string;
        ProcedimentoIdCodigoRegistrado?: boolean;
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
        TipoAutorizacaoDescricao?: string;
    }

    export namespace ValoresRow {
        export const idProperty = 'ValorId';
        export const nameProperty = 'Observacao';
        export const localTextPrefix = 'Clinica.Valores';
        export const lookupKey = 'Clinica.Valores';

        export function getLookup(): Q.Lookup<ValoresRow> {
            return Q.getLookup<ValoresRow>('Clinica.Valores');
        }

        export namespace Fields {
            export declare const ValorId: string;
            export declare const TipoItemId: string;
            export declare const TipoTabelaId: string;
            export declare const ProcedimentoId: string;
            export declare const ConvenioId: string;
            export declare const ValorCh: string;
            export declare const ValorSessao: string;
            export declare const DataInicio: string;
            export declare const DataFim: string;
            export declare const Observacao: string;
            export declare const DataCadastrada: string;
            export declare const CodigoRegistrado: string;
            export declare const RequerAutorizacao: string;
            export declare const TipoAutorizacaoId: string;
            export declare const TipoItemDescricao: string;
            export declare const TipoItemAtivo: string;
            export declare const TipoTabelaDescricao: string;
            export declare const TipoTabelaCodigoTabela: string;
            export declare const TipoTabelaTissid: string;
            export declare const ProcedimentoTabelaId: string;
            export declare const Procedimento: string;
            export declare const ProcedimentoCodigo: string;
            export declare const ProcedimentoCh: string;
            export declare const ProcedimentoCodigoCbhpm: string;
            export declare const ProcedimentoCodigoTuss: string;
            export declare const ProcedimentoDataCadastrada: string;
            export declare const ProcedimentoIdCodigoRegistrado: string;
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
            export declare const TipoAutorizacaoDescricao: string;
        }

        ['ValorId', 'TipoItemId', 'TipoTabelaId', 'ProcedimentoId', 'ConvenioId', 'ValorCh', 'ValorSessao', 'DataInicio', 'DataFim', 'Observacao', 'DataCadastrada', 'CodigoRegistrado', 'RequerAutorizacao', 'TipoAutorizacaoId', 'TipoItemDescricao', 'TipoItemAtivo', 'TipoTabelaDescricao', 'TipoTabelaCodigoTabela', 'TipoTabelaTissid', 'ProcedimentoTabelaId', 'Procedimento', 'ProcedimentoCodigo', 'ProcedimentoCh', 'ProcedimentoCodigoCbhpm', 'ProcedimentoCodigoTuss', 'ProcedimentoDataCadastrada', 'ProcedimentoIdCodigoRegistrado', 'ConvenioCnpj', 'ConvenioRazaoSocial', 'ConvenioNomeFantasia', 'ConvenioCodigoAns', 'ConvenioCadastroConvenio', 'ConvenioLogo', 'ConvenioInscricaoMunicipal', 'ConvenioInscricaoEstadual', 'ConvenioSite', 'ConvenioDataInicio', 'ConvenioInativo', 'ConvenioDataFim', 'ConvenioMotivoCancelamento', 'ConvenioObservacao', 'ConvenioVersaoTiss', 'ConvenioWebService', 'ConvenioSadtSolContratadoId', 'ConvenioSadtExecutanteId', 'ConvenioSadtProfissionalexecutante', 'ConvenioSadtMembroEquipe', 'ConvenioIdOrigem', 'ConvenioIdDestino', 'ConvenioOrigemIdPrestador', 'ConvenioDestinoIdPrestador', 'ConvenioIdLogo', 'ConvenioGeraTiss', 'ConvenioDataCadastro', 'ConvenioDataUltimaAtualizacao', 'ConvenioLatitude', 'ConvenioLongitude', 'ConvenioEmailNotaFiscal', 'ConvenioEmailContato', 'ConvenioEmailFaturamento', 'ConvenioEmailGlosa', 'TipoAutorizacaoDescricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

