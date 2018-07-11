namespace Exemplos.Clinica {
    export interface EspecialidadesProfissionaisRow {
        EspecialidadeProfisisonalId?: number;
        ProfissionalId?: number;
        EspecialidadeId?: number;
        Cbosid?: number;
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
        EspecialidadeTipoEspecialidadeId?: number;
        EspecialidadeDescricao?: string;
        EspecialidadeVisivelAgenda?: boolean;
        CbosidCodigo?: string;
        CbosidCbos?: string;
    }

    export namespace EspecialidadesProfissionaisRow {
        export const idProperty = 'EspecialidadeProfisisonalId';
        export const localTextPrefix = 'Clinica.EspecialidadesProfissionais';
        export const lookupKey = 'Clinica.EspecialidadesProfissionais';

        export function getLookup(): Q.Lookup<EspecialidadesProfissionaisRow> {
            return Q.getLookup<EspecialidadesProfissionaisRow>('Clinica.EspecialidadesProfissionais');
        }

        export namespace Fields {
            export declare const EspecialidadeProfisisonalId: string;
            export declare const ProfissionalId: string;
            export declare const EspecialidadeId: string;
            export declare const Cbosid: string;
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
            export declare const EspecialidadeTipoEspecialidadeId: string;
            export declare const EspecialidadeDescricao: string;
            export declare const EspecialidadeVisivelAgenda: string;
            export declare const CbosidCodigo: string;
            export declare const CbosidCbos: string;
        }

        ['EspecialidadeProfisisonalId', 'ProfissionalId', 'EspecialidadeId', 'Cbosid', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato', 'EspecialidadeTipoEspecialidadeId', 'EspecialidadeDescricao', 'EspecialidadeVisivelAgenda', 'CbosidCodigo', 'CbosidCbos'].forEach(x => (<any>Fields)[x] = x);
    }
}

