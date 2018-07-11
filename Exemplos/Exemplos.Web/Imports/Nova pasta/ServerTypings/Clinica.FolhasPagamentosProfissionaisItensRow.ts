namespace Exemplos.Clinica {
    export interface FolhasPagamentosProfissionaisItensRow {
        FolhaPagamentoProfissionalItemId?: number;
        FolhaPagamentoProfissionalId?: number;
        Banco?: string;
        Agencia?: string;
        Conta?: string;
        FormaPagamento?: string;
        FolhaPagamentoProfissionalProfissionalId?: number;
        FolhaPagamentoProfissionalNotaFiscalProfissional?: number;
        FolhaPagamentoProfissionalArquivos?: string;
        FolhaPagamentoProfissionalMovimento?: string;
        FolhaPagamentoProfissionalDataPagamento?: string;
        FolhaPagamentoProfissionalValorPago?: number;
        FolhaPagamentoProfissionalDataImpressao?: string;
    }

    export namespace FolhasPagamentosProfissionaisItensRow {
        export const idProperty = 'FolhaPagamentoProfissionalItemId';
        export const nameProperty = 'Banco';
        export const localTextPrefix = 'Clinica.FolhasPagamentosProfissionaisItens';
        export const lookupKey = 'Clinica.FolhasPagamentosProfissionaisItens';

        export function getLookup(): Q.Lookup<FolhasPagamentosProfissionaisItensRow> {
            return Q.getLookup<FolhasPagamentosProfissionaisItensRow>('Clinica.FolhasPagamentosProfissionaisItens');
        }

        export namespace Fields {
            export declare const FolhaPagamentoProfissionalItemId: string;
            export declare const FolhaPagamentoProfissionalId: string;
            export declare const Banco: string;
            export declare const Agencia: string;
            export declare const Conta: string;
            export declare const FormaPagamento: string;
            export declare const FolhaPagamentoProfissionalProfissionalId: string;
            export declare const FolhaPagamentoProfissionalNotaFiscalProfissional: string;
            export declare const FolhaPagamentoProfissionalArquivos: string;
            export declare const FolhaPagamentoProfissionalMovimento: string;
            export declare const FolhaPagamentoProfissionalDataPagamento: string;
            export declare const FolhaPagamentoProfissionalValorPago: string;
            export declare const FolhaPagamentoProfissionalDataImpressao: string;
        }

        ['FolhaPagamentoProfissionalItemId', 'FolhaPagamentoProfissionalId', 'Banco', 'Agencia', 'Conta', 'FormaPagamento', 'FolhaPagamentoProfissionalProfissionalId', 'FolhaPagamentoProfissionalNotaFiscalProfissional', 'FolhaPagamentoProfissionalArquivos', 'FolhaPagamentoProfissionalMovimento', 'FolhaPagamentoProfissionalDataPagamento', 'FolhaPagamentoProfissionalValorPago', 'FolhaPagamentoProfissionalDataImpressao'].forEach(x => (<any>Fields)[x] = x);
    }
}

