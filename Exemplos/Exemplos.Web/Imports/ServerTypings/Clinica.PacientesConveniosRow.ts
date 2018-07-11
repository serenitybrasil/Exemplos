namespace Exemplos.Clinica {
    export interface PacientesConveniosRow {
        PacienteConvenioId?: number;
        PacienteId?: number;
        ConvenioId?: number;
        SubConvenioId?: number;
        ConvenioPrincipal?: boolean;
        DescricaoPlano?: string;
        Carteirinha?: string;
        DataValidadeCarteirinha?: string;
        NomePacienteConvenio?: string;
        Inativo?: boolean;
        DataInativo?: string;
        ImagemCarteirinha?: string;
        DataCadastro?: string;
        DataUltimaAtualizacao?: string;
        Observacao?: string;
        ConvenioRazaoSocial?: string;
        ConvenioNomeFantasia?: string;
    }

    export namespace PacientesConveniosRow {
        export const idProperty = 'PacienteConvenioId';
        export const nameProperty = 'DescricaoPlano';
        export const localTextPrefix = 'Clinica.PacientesConvenios';
        export const lookupKey = 'Clinica.PacientesConvenios';

        export function getLookup(): Q.Lookup<PacientesConveniosRow> {
            return Q.getLookup<PacientesConveniosRow>('Clinica.PacientesConvenios');
        }

        export namespace Fields {
            export declare const PacienteConvenioId: string;
            export declare const PacienteId: string;
            export declare const ConvenioId: string;
            export declare const SubConvenioId: string;
            export declare const ConvenioPrincipal: string;
            export declare const DescricaoPlano: string;
            export declare const Carteirinha: string;
            export declare const DataValidadeCarteirinha: string;
            export declare const NomePacienteConvenio: string;
            export declare const Inativo: string;
            export declare const DataInativo: string;
            export declare const ImagemCarteirinha: string;
            export declare const DataCadastro: string;
            export declare const DataUltimaAtualizacao: string;
            export declare const Observacao: string;
            export declare const ConvenioRazaoSocial: string;
            export declare const ConvenioNomeFantasia: string;
        }

        ['PacienteConvenioId', 'PacienteId', 'ConvenioId', 'SubConvenioId', 'ConvenioPrincipal', 'DescricaoPlano', 'Carteirinha', 'DataValidadeCarteirinha', 'NomePacienteConvenio', 'Inativo', 'DataInativo', 'ImagemCarteirinha', 'DataCadastro', 'DataUltimaAtualizacao', 'Observacao', 'ConvenioRazaoSocial', 'ConvenioNomeFantasia'].forEach(x => (<any>Fields)[x] = x);
    }
}

