namespace Exemplos.Clinica {
    export interface FichasCnesRow {
        FichasCnesid?: number;
        ProfissionalId?: number;
        TipoFichaCnes?: number;
        DataCriacao?: string;
        DataHoraEnvio?: string;
        ProtocoloRecebimento?: string;
        ProfissionalAssinou?: boolean;
        ArquivoFichaCnes?: string;
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
        TipoFichaCnesDescricao?: string;
    }

    export namespace FichasCnesRow {
        export const idProperty = 'FichasCnesid';
        export const nameProperty = 'ProtocoloRecebimento';
        export const localTextPrefix = 'Clinica.FichasCnes';
        export const lookupKey = 'Clinica.FichasCnes';

        export function getLookup(): Q.Lookup<FichasCnesRow> {
            return Q.getLookup<FichasCnesRow>('Clinica.FichasCnes');
        }

        export namespace Fields {
            export declare const FichasCnesid: string;
            export declare const ProfissionalId: string;
            export declare const TipoFichaCnes: string;
            export declare const DataCriacao: string;
            export declare const DataHoraEnvio: string;
            export declare const ProtocoloRecebimento: string;
            export declare const ProfissionalAssinou: string;
            export declare const ArquivoFichaCnes: string;
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
            export declare const TipoFichaCnesDescricao: string;
        }

        ['FichasCnesid', 'ProfissionalId', 'TipoFichaCnes', 'DataCriacao', 'DataHoraEnvio', 'ProtocoloRecebimento', 'ProfissionalAssinou', 'ArquivoFichaCnes', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato', 'TipoFichaCnesDescricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

