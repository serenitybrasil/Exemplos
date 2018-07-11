namespace Exemplos.Clinica {
    export interface DemonstrativosNotasFiscaisRow {
        DemonstrativoNotaFiscalId?: number;
        DemonstrativoId?: number;
        Nfseid?: number;
        DemonstrativoConvenioId?: number;
        Demonstrativo?: string;
        DemonstrativoDataDemonstrativo?: string;
        DemonstrativoDataPagamento?: string;
        DemonstrativoObservacoes?: string;
        DemonstrativoValorProcessado?: number;
        DemonstrativoValorLiberado?: number;
        DemonstrativoValorGlosado?: number;
        DemonstrativoNumeroLotePrestador?: string;
        DemonstrativoNumeroProtocolo?: string;
        DemonstrativoDataProtocolo?: string;
        DemonstrativoObservacao?: string;
        DemonstrativoArquivos?: string;
    }

    export namespace DemonstrativosNotasFiscaisRow {
        export const idProperty = 'DemonstrativoNotaFiscalId';
        export const localTextPrefix = 'Clinica.DemonstrativosNotasFiscais';
        export const lookupKey = 'Clinica.DemonstrativosNotasFiscais';

        export function getLookup(): Q.Lookup<DemonstrativosNotasFiscaisRow> {
            return Q.getLookup<DemonstrativosNotasFiscaisRow>('Clinica.DemonstrativosNotasFiscais');
        }

        export namespace Fields {
            export declare const DemonstrativoNotaFiscalId: string;
            export declare const DemonstrativoId: string;
            export declare const Nfseid: string;
            export declare const DemonstrativoConvenioId: string;
            export declare const Demonstrativo: string;
            export declare const DemonstrativoDataDemonstrativo: string;
            export declare const DemonstrativoDataPagamento: string;
            export declare const DemonstrativoObservacoes: string;
            export declare const DemonstrativoValorProcessado: string;
            export declare const DemonstrativoValorLiberado: string;
            export declare const DemonstrativoValorGlosado: string;
            export declare const DemonstrativoNumeroLotePrestador: string;
            export declare const DemonstrativoNumeroProtocolo: string;
            export declare const DemonstrativoDataProtocolo: string;
            export declare const DemonstrativoObservacao: string;
            export declare const DemonstrativoArquivos: string;
        }

        ['DemonstrativoNotaFiscalId', 'DemonstrativoId', 'Nfseid', 'DemonstrativoConvenioId', 'Demonstrativo', 'DemonstrativoDataDemonstrativo', 'DemonstrativoDataPagamento', 'DemonstrativoObservacoes', 'DemonstrativoValorProcessado', 'DemonstrativoValorLiberado', 'DemonstrativoValorGlosado', 'DemonstrativoNumeroLotePrestador', 'DemonstrativoNumeroProtocolo', 'DemonstrativoDataProtocolo', 'DemonstrativoObservacao', 'DemonstrativoArquivos'].forEach(x => (<any>Fields)[x] = x);
    }
}

