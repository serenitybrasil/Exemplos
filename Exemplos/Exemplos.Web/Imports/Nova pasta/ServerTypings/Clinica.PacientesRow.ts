namespace Exemplos.Clinica {
    export interface PacientesRow {
        PacienteId?: number;
        DataCadastro?: string;
        DataUltimaAtualizacao?: string;
        Matricula?: string;
        StatusId?: number;
        Paciente?: string;
        Especial?: boolean;
        Pai?: string;
        Mae?: string;
        SexoId?: number;
        DataNascimento?: string;
        CNS?: string;
        CarteiraIdentidade?: string;
        CPF?: string;
        Observacao?: string;
        DisturbiosAssociados?: string;
        Responsavel?: string;
        Foto?: string;
        DataFoto?: string;
        PacienteIdControlMedic?: number;
        PacienteIdGestorMedico?: number;
        ContatosList?: ContatosRow[];
        EnderecosList?: EnderecosRow[];
        Sexo?: string;
        SexoAbreviatura?: string;
        Status?: string;
    }

    export namespace PacientesRow {
        export const idProperty = 'PacienteId';
        export const nameProperty = 'Paciente';
        export const localTextPrefix = 'Clinica.Pacientes';
        export const lookupKey = 'Clinica.Pacientes';

        export function getLookup(): Q.Lookup<PacientesRow> {
            return Q.getLookup<PacientesRow>('Clinica.Pacientes');
        }

        export namespace Fields {
            export declare const PacienteId: string;
            export declare const DataCadastro: string;
            export declare const DataUltimaAtualizacao: string;
            export declare const Matricula: string;
            export declare const StatusId: string;
            export declare const Paciente: string;
            export declare const Especial: string;
            export declare const Pai: string;
            export declare const Mae: string;
            export declare const SexoId: string;
            export declare const DataNascimento: string;
            export declare const CNS: string;
            export declare const CarteiraIdentidade: string;
            export declare const CPF: string;
            export declare const Observacao: string;
            export declare const DisturbiosAssociados: string;
            export declare const Responsavel: string;
            export declare const Foto: string;
            export declare const DataFoto: string;
            export declare const PacienteIdControlMedic: string;
            export declare const PacienteIdGestorMedico: string;
            export declare const ContatosList: string;
            export declare const EnderecosList: string;
            export declare const Sexo: string;
            export declare const SexoAbreviatura: string;
            export declare const Status: string;
        }

        ['PacienteId', 'DataCadastro', 'DataUltimaAtualizacao', 'Matricula', 'StatusId', 'Paciente', 'Especial', 'Pai', 'Mae', 'SexoId', 'DataNascimento', 'CNS', 'CarteiraIdentidade', 'CPF', 'Observacao', 'DisturbiosAssociados', 'Responsavel', 'Foto', 'DataFoto', 'PacienteIdControlMedic', 'PacienteIdGestorMedico', 'ContatosList', 'EnderecosList', 'Sexo', 'SexoAbreviatura', 'Status'].forEach(x => (<any>Fields)[x] = x);
    }
}

