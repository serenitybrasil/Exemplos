namespace Exemplos.Clinica {
    export interface ConveniosRow {
        ConvenioId?: number;
        Cnpj?: string;
        RazaoSocial?: string;
        NomeFantasia?: string;
        CodigoAns?: string;
        CadastroConvenio?: string;
        Logo?: string;
        InscricaoMunicipal?: string;
        InscricaoEstadual?: string;
        Site?: string;
        DataInicio?: string;
        Inativo?: boolean;
        DataFim?: string;
        MotivoCancelamento?: string;
        Observacao?: string;
        VersaoTiss?: string;
        WebService?: string;
        SadtSolContratadoId?: string;
        SadtExecutanteId?: string;
        SadtProfissionalexecutante?: string;
        SadtMembroEquipe?: string;
        IdOrigem?: string;
        IdDestino?: string;
        OrigemIdPrestador?: string;
        DestinoIdPrestador?: string;
        IdLogo?: number;
        GeraTiss?: boolean;
        DataCadastro?: string;
        DataUltimaAtualizacao?: string;
        Latitude?: string;
        Longitude?: string;
        EmailNotaFiscal?: string;
        EmailContato?: string;
        EmailFaturamento?: string;
        EmailGlosa?: string;
        ContatosList?: ContatosRow[];
        EnderecosList?: EnderecosRow[];
    }

    export namespace ConveniosRow {
        export const idProperty = 'ConvenioId';
        export const nameProperty = 'NomeFantasia';
        export const localTextPrefix = 'Clinica.Convenios';
        export const lookupKey = 'Clinica.Convenios';

        export function getLookup(): Q.Lookup<ConveniosRow> {
            return Q.getLookup<ConveniosRow>('Clinica.Convenios');
        }

        export namespace Fields {
            export declare const ConvenioId: string;
            export declare const Cnpj: string;
            export declare const RazaoSocial: string;
            export declare const NomeFantasia: string;
            export declare const CodigoAns: string;
            export declare const CadastroConvenio: string;
            export declare const Logo: string;
            export declare const InscricaoMunicipal: string;
            export declare const InscricaoEstadual: string;
            export declare const Site: string;
            export declare const DataInicio: string;
            export declare const Inativo: string;
            export declare const DataFim: string;
            export declare const MotivoCancelamento: string;
            export declare const Observacao: string;
            export declare const VersaoTiss: string;
            export declare const WebService: string;
            export declare const SadtSolContratadoId: string;
            export declare const SadtExecutanteId: string;
            export declare const SadtProfissionalexecutante: string;
            export declare const SadtMembroEquipe: string;
            export declare const IdOrigem: string;
            export declare const IdDestino: string;
            export declare const OrigemIdPrestador: string;
            export declare const DestinoIdPrestador: string;
            export declare const IdLogo: string;
            export declare const GeraTiss: string;
            export declare const DataCadastro: string;
            export declare const DataUltimaAtualizacao: string;
            export declare const Latitude: string;
            export declare const Longitude: string;
            export declare const EmailNotaFiscal: string;
            export declare const EmailContato: string;
            export declare const EmailFaturamento: string;
            export declare const EmailGlosa: string;
            export declare const ContatosList: string;
            export declare const EnderecosList: string;
        }

        ['ConvenioId', 'Cnpj', 'RazaoSocial', 'NomeFantasia', 'CodigoAns', 'CadastroConvenio', 'Logo', 'InscricaoMunicipal', 'InscricaoEstadual', 'Site', 'DataInicio', 'Inativo', 'DataFim', 'MotivoCancelamento', 'Observacao', 'VersaoTiss', 'WebService', 'SadtSolContratadoId', 'SadtExecutanteId', 'SadtProfissionalexecutante', 'SadtMembroEquipe', 'IdOrigem', 'IdDestino', 'OrigemIdPrestador', 'DestinoIdPrestador', 'IdLogo', 'GeraTiss', 'DataCadastro', 'DataUltimaAtualizacao', 'Latitude', 'Longitude', 'EmailNotaFiscal', 'EmailContato', 'EmailFaturamento', 'EmailGlosa', 'ContatosList', 'EnderecosList'].forEach(x => (<any>Fields)[x] = x);
    }
}

