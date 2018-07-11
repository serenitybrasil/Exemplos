namespace Exemplos.Clinica {
    export interface ProfissionaisRow {
        ProfissionalId?: number;
        IdAtivo?: boolean;
        DataInicio?: string;
        DataFim?: string;
        MotivoEncerramento?: string;
        Profissional?: string;
        Pai?: string;
        Mae?: string;
        SexoId?: number;
        DataNascimento?: string;
        EstadoCivilId?: number;
        CarteiraIdentidade?: string;
        Cpf?: string;
        Cnes?: string;
        TipoProfissionalId?: number;
        ConselhoProfissionalId?: number;
        NumeroConselho?: string;
        UfConselhoProfissional?: string;
        Cbosid?: number;
        ProntuarioSigiloso?: boolean;
        Observacao?: string;
        PessoaJuridica?: boolean;
        Cnpj?: string;
        DataInicioContrato?: string;
        DataFimContrato?: string;
        MotivoEncerramentoContrato?: string;
        ContatosList?: ContatosRow[];
        EnderecosList?: EnderecosRow[];
        Sexo?: string;
        SexoAbreviatura?: string;
        EstadoCivilDescricao?: string;
        TipoProfissionalDescricao?: string;
        ConselhoProfissionalDescricao?: string;
        CbosidCodigo?: string;
        CbosidCbos?: string;
    }

    export namespace ProfissionaisRow {
        export const idProperty = 'ProfissionalId';
        export const nameProperty = 'MotivoEncerramento';
        export const localTextPrefix = 'Clinica.Profissionais';
        export const lookupKey = 'Clinica.Profissionais';

        export function getLookup(): Q.Lookup<ProfissionaisRow> {
            return Q.getLookup<ProfissionaisRow>('Clinica.Profissionais');
        }

        export namespace Fields {
            export declare const ProfissionalId: string;
            export declare const IdAtivo: string;
            export declare const DataInicio: string;
            export declare const DataFim: string;
            export declare const MotivoEncerramento: string;
            export declare const Profissional: string;
            export declare const Pai: string;
            export declare const Mae: string;
            export declare const SexoId: string;
            export declare const DataNascimento: string;
            export declare const EstadoCivilId: string;
            export declare const CarteiraIdentidade: string;
            export declare const Cpf: string;
            export declare const Cnes: string;
            export declare const TipoProfissionalId: string;
            export declare const ConselhoProfissionalId: string;
            export declare const NumeroConselho: string;
            export declare const UfConselhoProfissional: string;
            export declare const Cbosid: string;
            export declare const ProntuarioSigiloso: string;
            export declare const Observacao: string;
            export declare const PessoaJuridica: string;
            export declare const Cnpj: string;
            export declare const DataInicioContrato: string;
            export declare const DataFimContrato: string;
            export declare const MotivoEncerramentoContrato: string;
            export declare const ContatosList: string;
            export declare const EnderecosList: string;
            export declare const Sexo: string;
            export declare const SexoAbreviatura: string;
            export declare const EstadoCivilDescricao: string;
            export declare const TipoProfissionalDescricao: string;
            export declare const ConselhoProfissionalDescricao: string;
            export declare const CbosidCodigo: string;
            export declare const CbosidCbos: string;
        }

        ['ProfissionalId', 'IdAtivo', 'DataInicio', 'DataFim', 'MotivoEncerramento', 'Profissional', 'Pai', 'Mae', 'SexoId', 'DataNascimento', 'EstadoCivilId', 'CarteiraIdentidade', 'Cpf', 'Cnes', 'TipoProfissionalId', 'ConselhoProfissionalId', 'NumeroConselho', 'UfConselhoProfissional', 'Cbosid', 'ProntuarioSigiloso', 'Observacao', 'PessoaJuridica', 'Cnpj', 'DataInicioContrato', 'DataFimContrato', 'MotivoEncerramentoContrato', 'ContatosList', 'EnderecosList', 'Sexo', 'SexoAbreviatura', 'EstadoCivilDescricao', 'TipoProfissionalDescricao', 'ConselhoProfissionalDescricao', 'CbosidCodigo', 'CbosidCbos'].forEach(x => (<any>Fields)[x] = x);
    }
}

