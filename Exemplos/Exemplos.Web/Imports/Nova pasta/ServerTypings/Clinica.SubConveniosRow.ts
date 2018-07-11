namespace Exemplos.Clinica {
    export interface SubConveniosRow {
        SubConvenioId?: number;
        ConvenioId?: number;
        Descricao?: string;
        Nome?: string;
        DataInicio?: string;
        Ativo?: boolean;
        DataFim?: string;
        Participativo?: boolean;
        PorcentagemParticipativo?: number;
        AutorizacaoPrevia?: boolean;
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

    export namespace SubConveniosRow {
        export const idProperty = 'SubConvenioId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.SubConvenios';
        export const lookupKey = 'Clinica.SubConvenios';

        export function getLookup(): Q.Lookup<SubConveniosRow> {
            return Q.getLookup<SubConveniosRow>('Clinica.SubConvenios');
        }

        export namespace Fields {
            export declare const SubConvenioId: string;
            export declare const ConvenioId: string;
            export declare const Descricao: string;
            export declare const Nome: string;
            export declare const DataInicio: string;
            export declare const Ativo: string;
            export declare const DataFim: string;
            export declare const Participativo: string;
            export declare const PorcentagemParticipativo: string;
            export declare const AutorizacaoPrevia: string;
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

        ['SubConvenioId', 'ConvenioId', 'Descricao', 'Nome', 'DataInicio', 'Ativo', 'DataFim', 'Participativo', 'PorcentagemParticipativo', 'AutorizacaoPrevia', 'ConvenioCnpj', 'ConvenioRazaoSocial', 'ConvenioNomeFantasia', 'ConvenioCodigoAns', 'ConvenioCadastroConvenio', 'ConvenioLogo', 'ConvenioInscricaoMunicipal', 'ConvenioInscricaoEstadual', 'ConvenioSite', 'ConvenioDataInicio', 'ConvenioInativo', 'ConvenioDataFim', 'ConvenioMotivoCancelamento', 'ConvenioObservacao', 'ConvenioVersaoTiss', 'ConvenioWebService', 'ConvenioSadtSolContratadoId', 'ConvenioSadtExecutanteId', 'ConvenioSadtProfissionalexecutante', 'ConvenioSadtMembroEquipe', 'ConvenioIdOrigem', 'ConvenioIdDestino', 'ConvenioOrigemIdPrestador', 'ConvenioDestinoIdPrestador', 'ConvenioIdLogo', 'ConvenioGeraTiss', 'ConvenioDataCadastro', 'ConvenioDataUltimaAtualizacao', 'ConvenioLatitude', 'ConvenioLongitude', 'ConvenioEmailNotaFiscal', 'ConvenioEmailContato', 'ConvenioEmailFaturamento', 'ConvenioEmailGlosa'].forEach(x => (<any>Fields)[x] = x);
    }
}

