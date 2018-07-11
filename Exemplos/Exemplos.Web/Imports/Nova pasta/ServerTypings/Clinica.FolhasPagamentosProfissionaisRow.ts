namespace Exemplos.Clinica {
    export interface FolhasPagamentosProfissionaisRow {
        FolhaPagamentoProfissionalId?: number;
        ProfissionalId?: number;
        NotaFiscalProfissional?: number;
        Arquivos?: string;
        Movimento?: string;
        DataPagamento?: string;
        ValorPago?: number;
        DataImpressao?: string;
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
    }

    export namespace FolhasPagamentosProfissionaisRow {
        export const idProperty = 'FolhaPagamentoProfissionalId';
        export const nameProperty = 'Arquivos';
        export const localTextPrefix = 'Clinica.FolhasPagamentosProfissionais';
        export const lookupKey = 'Clinica.FolhasPagamentosProfissionais';

        export function getLookup(): Q.Lookup<FolhasPagamentosProfissionaisRow> {
            return Q.getLookup<FolhasPagamentosProfissionaisRow>('Clinica.FolhasPagamentosProfissionais');
        }

        export namespace Fields {
            export declare const FolhaPagamentoProfissionalId: string;
            export declare const ProfissionalId: string;
            export declare const NotaFiscalProfissional: string;
            export declare const Arquivos: string;
            export declare const Movimento: string;
            export declare const DataPagamento: string;
            export declare const ValorPago: string;
            export declare const DataImpressao: string;
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
        }

        ['FolhaPagamentoProfissionalId', 'ProfissionalId', 'NotaFiscalProfissional', 'Arquivos', 'Movimento', 'DataPagamento', 'ValorPago', 'DataImpressao', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato'].forEach(x => (<any>Fields)[x] = x);
    }
}

