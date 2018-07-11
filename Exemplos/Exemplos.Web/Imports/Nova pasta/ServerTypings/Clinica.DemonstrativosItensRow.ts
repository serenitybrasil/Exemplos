namespace Exemplos.Clinica {
    export interface DemonstrativosItensRow {
        DemonstrativoItemId?: number;
        DemonstrativoId?: number;
        StatusDemonstrativoId?: number;
        NumeroGuiaPrestador?: string;
        NumeroGuiaOperadora?: string;
        Registro?: string;
        Senha?: string;
        Matricula?: string;
        Beneficiario?: string;
        DataSessao?: string;
        Tabela?: string;
        Codigo?: string;
        Procedimento?: string;
        Quantidade?: number;
        ValorInformado?: number;
        ValorLiberado?: number;
        ValorGlosado?: number;
        CodigoGlosa?: string;
        MotivoGlosa?: string;
        SessaoId?: number;
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
        StatusDemonstrativoStatus?: string;
    }

    export namespace DemonstrativosItensRow {
        export const idProperty = 'DemonstrativoItemId';
        export const nameProperty = 'NumeroGuiaPrestador';
        export const localTextPrefix = 'Clinica.DemonstrativosItens';
        export const lookupKey = 'Clinica.DemonstrativosItens';

        export function getLookup(): Q.Lookup<DemonstrativosItensRow> {
            return Q.getLookup<DemonstrativosItensRow>('Clinica.DemonstrativosItens');
        }

        export namespace Fields {
            export declare const DemonstrativoItemId: string;
            export declare const DemonstrativoId: string;
            export declare const StatusDemonstrativoId: string;
            export declare const NumeroGuiaPrestador: string;
            export declare const NumeroGuiaOperadora: string;
            export declare const Registro: string;
            export declare const Senha: string;
            export declare const Matricula: string;
            export declare const Beneficiario: string;
            export declare const DataSessao: string;
            export declare const Tabela: string;
            export declare const Codigo: string;
            export declare const Procedimento: string;
            export declare const Quantidade: string;
            export declare const ValorInformado: string;
            export declare const ValorLiberado: string;
            export declare const ValorGlosado: string;
            export declare const CodigoGlosa: string;
            export declare const MotivoGlosa: string;
            export declare const SessaoId: string;
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
            export declare const StatusDemonstrativoStatus: string;
        }

        ['DemonstrativoItemId', 'DemonstrativoId', 'StatusDemonstrativoId', 'NumeroGuiaPrestador', 'NumeroGuiaOperadora', 'Registro', 'Senha', 'Matricula', 'Beneficiario', 'DataSessao', 'Tabela', 'Codigo', 'Procedimento', 'Quantidade', 'ValorInformado', 'ValorLiberado', 'ValorGlosado', 'CodigoGlosa', 'MotivoGlosa', 'SessaoId', 'DemonstrativoConvenioId', 'Demonstrativo', 'DemonstrativoDataDemonstrativo', 'DemonstrativoDataPagamento', 'DemonstrativoObservacoes', 'DemonstrativoValorProcessado', 'DemonstrativoValorLiberado', 'DemonstrativoValorGlosado', 'DemonstrativoNumeroLotePrestador', 'DemonstrativoNumeroProtocolo', 'DemonstrativoDataProtocolo', 'DemonstrativoObservacao', 'DemonstrativoArquivos', 'StatusDemonstrativoStatus'].forEach(x => (<any>Fields)[x] = x);
    }
}

