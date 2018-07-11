namespace Exemplos.Clinica {
    export interface ProtocolosRow {
        ProtocoloId?: number;
        Protocolo?: string;
        TipoProtocoloId?: number;
        ConvenioId?: number;
        Responsável?: string;
        Assunto?: string;
        DataEnvio?: string;
        DataRetorno?: string;
        Resolvido?: boolean;
        DataResolvido?: string;
        DecisaoTomada?: string;
        TipoProtocoloDescricao?: string;
    }

    export namespace ProtocolosRow {
        export const idProperty = 'ProtocoloId';
        export const nameProperty = 'Protocolo';
        export const localTextPrefix = 'Clinica.Protocolos';
        export const lookupKey = 'Clinica.Protocolos';

        export function getLookup(): Q.Lookup<ProtocolosRow> {
            return Q.getLookup<ProtocolosRow>('Clinica.Protocolos');
        }

        export namespace Fields {
            export declare const ProtocoloId: string;
            export declare const Protocolo: string;
            export declare const TipoProtocoloId: string;
            export declare const ConvenioId: string;
            export declare const Responsável: string;
            export declare const Assunto: string;
            export declare const DataEnvio: string;
            export declare const DataRetorno: string;
            export declare const Resolvido: string;
            export declare const DataResolvido: string;
            export declare const DecisaoTomada: string;
            export declare const TipoProtocoloDescricao: string;
        }

        ['ProtocoloId', 'Protocolo', 'TipoProtocoloId', 'ConvenioId', 'Responsável', 'Assunto', 'DataEnvio', 'DataRetorno', 'Resolvido', 'DataResolvido', 'DecisaoTomada', 'TipoProtocoloDescricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

