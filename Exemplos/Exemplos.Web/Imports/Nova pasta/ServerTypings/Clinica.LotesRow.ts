namespace Exemplos.Clinica {
    export interface LotesRow {
        LoteId?: number;
        StatusLoteId?: number;
        Movimentacao?: string;
        ConvenioId?: number;
        DataEmissaoLote?: string;
        Lote?: string;
        Protocolo?: string;
        LoteConvenio?: string;
        ValorLote?: number;
        CapaLote?: string;
        Extrato?: string;
        EnviadoConvenioId?: boolean;
        DataEnviadoConvenio?: string;
        ArquivoFisicoEnviadoId?: boolean;
        CartaSimplesId?: boolean;
        Sedex?: string;
        Arid?: boolean;
        DataRetornoAr?: string;
        ValorCorreios?: number;
        Arquivos?: string;
        Observacao?: string;
        Nfseid?: number;
        NotaFiscal?: string;
        ValorNotaFiscal?: number;
        DataEmissaoNotaFiscal?: string;
        EmailNotaFiscal?: string;
        NotaFiscalImpressaId?: boolean;
        NotaFiscalRecebida?: string;
        DataNotaFiscalImpressa?: string;
        StatusLoteStatus?: string;
    }

    export namespace LotesRow {
        export const idProperty = 'LoteId';
        export const nameProperty = 'Lote';
        export const localTextPrefix = 'Clinica.Lotes';
        export const lookupKey = 'Clinica.Lotes';

        export function getLookup(): Q.Lookup<LotesRow> {
            return Q.getLookup<LotesRow>('Clinica.Lotes');
        }

        export namespace Fields {
            export declare const LoteId: string;
            export declare const StatusLoteId: string;
            export declare const Movimentacao: string;
            export declare const ConvenioId: string;
            export declare const DataEmissaoLote: string;
            export declare const Lote: string;
            export declare const Protocolo: string;
            export declare const LoteConvenio: string;
            export declare const ValorLote: string;
            export declare const CapaLote: string;
            export declare const Extrato: string;
            export declare const EnviadoConvenioId: string;
            export declare const DataEnviadoConvenio: string;
            export declare const ArquivoFisicoEnviadoId: string;
            export declare const CartaSimplesId: string;
            export declare const Sedex: string;
            export declare const Arid: string;
            export declare const DataRetornoAr: string;
            export declare const ValorCorreios: string;
            export declare const Arquivos: string;
            export declare const Observacao: string;
            export declare const Nfseid: string;
            export declare const NotaFiscal: string;
            export declare const ValorNotaFiscal: string;
            export declare const DataEmissaoNotaFiscal: string;
            export declare const EmailNotaFiscal: string;
            export declare const NotaFiscalImpressaId: string;
            export declare const NotaFiscalRecebida: string;
            export declare const DataNotaFiscalImpressa: string;
            export declare const StatusLoteStatus: string;
        }

        ['LoteId', 'StatusLoteId', 'Movimentacao', 'ConvenioId', 'DataEmissaoLote', 'Lote', 'Protocolo', 'LoteConvenio', 'ValorLote', 'CapaLote', 'Extrato', 'EnviadoConvenioId', 'DataEnviadoConvenio', 'ArquivoFisicoEnviadoId', 'CartaSimplesId', 'Sedex', 'Arid', 'DataRetornoAr', 'ValorCorreios', 'Arquivos', 'Observacao', 'Nfseid', 'NotaFiscal', 'ValorNotaFiscal', 'DataEmissaoNotaFiscal', 'EmailNotaFiscal', 'NotaFiscalImpressaId', 'NotaFiscalRecebida', 'DataNotaFiscalImpressa', 'StatusLoteStatus'].forEach(x => (<any>Fields)[x] = x);
    }
}

