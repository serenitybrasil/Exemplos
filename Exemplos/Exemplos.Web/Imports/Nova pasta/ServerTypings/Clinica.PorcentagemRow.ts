namespace Exemplos.Clinica {
    export interface PorcentagemRow {
        PorcentagemId?: number;
        ProfissionalId?: number;
        ProcedimentoId?: number;
        ValorPorcentagem?: number;
        ValorFixo?: number;
        IdMostraFixo?: boolean;
        DataCadastrada?: string;
        DataInicio?: string;
        DataFim?: string;
        Observacao?: string;
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
        ProcedimentoTabelaId?: number;
        Procedimento?: string;
        ProcedimentoCodigo?: string;
        ProcedimentoCh?: number;
        ProcedimentoCodigoCbhpm?: string;
        ProcedimentoCodigoTuss?: string;
        ProcedimentoDataCadastrada?: string;
        ProcedimentoIdCodigoRegistrado?: boolean;
    }

    export namespace PorcentagemRow {
        export const idProperty = 'PorcentagemId';
        export const nameProperty = 'Observacao';
        export const localTextPrefix = 'Clinica.Porcentagem';
        export const lookupKey = 'Clinica.Porcentagem';

        export function getLookup(): Q.Lookup<PorcentagemRow> {
            return Q.getLookup<PorcentagemRow>('Clinica.Porcentagem');
        }

        export namespace Fields {
            export declare const PorcentagemId: string;
            export declare const ProfissionalId: string;
            export declare const ProcedimentoId: string;
            export declare const ValorPorcentagem: string;
            export declare const ValorFixo: string;
            export declare const IdMostraFixo: string;
            export declare const DataCadastrada: string;
            export declare const DataInicio: string;
            export declare const DataFim: string;
            export declare const Observacao: string;
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
            export declare const ProcedimentoTabelaId: string;
            export declare const Procedimento: string;
            export declare const ProcedimentoCodigo: string;
            export declare const ProcedimentoCh: string;
            export declare const ProcedimentoCodigoCbhpm: string;
            export declare const ProcedimentoCodigoTuss: string;
            export declare const ProcedimentoDataCadastrada: string;
            export declare const ProcedimentoIdCodigoRegistrado: string;
        }

        ['PorcentagemId', 'ProfissionalId', 'ProcedimentoId', 'ValorPorcentagem', 'ValorFixo', 'IdMostraFixo', 'DataCadastrada', 'DataInicio', 'DataFim', 'Observacao', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato', 'ProcedimentoTabelaId', 'Procedimento', 'ProcedimentoCodigo', 'ProcedimentoCh', 'ProcedimentoCodigoCbhpm', 'ProcedimentoCodigoTuss', 'ProcedimentoDataCadastrada', 'ProcedimentoIdCodigoRegistrado'].forEach(x => (<any>Fields)[x] = x);
    }
}

