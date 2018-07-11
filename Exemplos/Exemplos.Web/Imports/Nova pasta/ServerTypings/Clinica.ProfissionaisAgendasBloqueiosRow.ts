namespace Exemplos.Clinica {
    export interface ProfissionaisAgendasBloqueiosRow {
        ProfissionalAgendaBloqueioId?: number;
        ProfissionalId?: number;
        EscalaId?: number;
        DataHora?: string;
        Descricao?: string;
        DiaInteiro?: boolean;
        ProfissionalIdAtivo?: boolean;
        ProfissionalDataInicio?: string;
        ProfissionalDataFim?: string;
        ProfissionalMotivoEncerramento?: string;
        Profissional?: string;
        ProfissionalPai?: string;
        ProfissionalMae?: string;
        ProfissionalSexoId?: number;
        ProfissionalDataNascimento?: string;
        ProfissionalEstadoCivilId?: number;
        ProfissionalCarteiraIdentidade?: string;
        ProfissionalCpf?: string;
        ProfissionalCnes?: string;
        ProfissionalTipoProfissionalId?: number;
        ProfissionalConselhoProfissionalId?: number;
        ProfissionalNumeroConselho?: string;
        ProfissionalUfConselhoProfissional?: string;
        ProfissionalCbosid?: number;
        ProfissionalProntuarioSigiloso?: boolean;
        ProfissionalObservacao?: string;
        ProfissionalPessoaJuridica?: boolean;
        ProfissionalCnpj?: string;
        ProfissionalDataInicioContrato?: string;
        ProfissionalDataFimContrato?: string;
        ProfissionalMotivoEncerramentoContrato?: string;
        EscalaProfissionalId?: number;
        EscalaDescricao?: string;
        EscalaPrincipal?: boolean;
    }

    export namespace ProfissionaisAgendasBloqueiosRow {
        export const idProperty = 'ProfissionalAgendaBloqueioId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.ProfissionaisAgendasBloqueios';
        export const lookupKey = 'Clinica.ProfissionaisAgendasBloqueios';

        export function getLookup(): Q.Lookup<ProfissionaisAgendasBloqueiosRow> {
            return Q.getLookup<ProfissionaisAgendasBloqueiosRow>('Clinica.ProfissionaisAgendasBloqueios');
        }

        export namespace Fields {
            export declare const ProfissionalAgendaBloqueioId: string;
            export declare const ProfissionalId: string;
            export declare const EscalaId: string;
            export declare const DataHora: string;
            export declare const Descricao: string;
            export declare const DiaInteiro: string;
            export declare const ProfissionalIdAtivo: string;
            export declare const ProfissionalDataInicio: string;
            export declare const ProfissionalDataFim: string;
            export declare const ProfissionalMotivoEncerramento: string;
            export declare const Profissional: string;
            export declare const ProfissionalPai: string;
            export declare const ProfissionalMae: string;
            export declare const ProfissionalSexoId: string;
            export declare const ProfissionalDataNascimento: string;
            export declare const ProfissionalEstadoCivilId: string;
            export declare const ProfissionalCarteiraIdentidade: string;
            export declare const ProfissionalCpf: string;
            export declare const ProfissionalCnes: string;
            export declare const ProfissionalTipoProfissionalId: string;
            export declare const ProfissionalConselhoProfissionalId: string;
            export declare const ProfissionalNumeroConselho: string;
            export declare const ProfissionalUfConselhoProfissional: string;
            export declare const ProfissionalCbosid: string;
            export declare const ProfissionalProntuarioSigiloso: string;
            export declare const ProfissionalObservacao: string;
            export declare const ProfissionalPessoaJuridica: string;
            export declare const ProfissionalCnpj: string;
            export declare const ProfissionalDataInicioContrato: string;
            export declare const ProfissionalDataFimContrato: string;
            export declare const ProfissionalMotivoEncerramentoContrato: string;
            export declare const EscalaProfissionalId: string;
            export declare const EscalaDescricao: string;
            export declare const EscalaPrincipal: string;
        }

        ['ProfissionalAgendaBloqueioId', 'ProfissionalId', 'EscalaId', 'DataHora', 'Descricao', 'DiaInteiro', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato', 'EscalaProfissionalId', 'EscalaDescricao', 'EscalaPrincipal'].forEach(x => (<any>Fields)[x] = x);
    }
}

