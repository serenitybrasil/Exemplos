namespace Exemplos.Clinica {
    export interface ProtocolosDetalhadosRow {
        ProtocoloDetalhadoId?: number;
        ProtocoloId?: number;
        ItemDescricao?: string;
        Arquivos?: string;
        Observacao?: string;
        Protocolo?: string;
        ProtocoloTipoProtocoloId?: number;
        ProtocoloConvenioId?: number;
        ProtocoloResponsável?: string;
        ProtocoloAssunto?: string;
        ProtocoloDataEnvio?: string;
        ProtocoloDataRetorno?: string;
        ProtocoloResolvido?: boolean;
        ProtocoloDataResolvido?: string;
        ProtocoloDecisaoTomada?: string;
    }

    export namespace ProtocolosDetalhadosRow {
        export const idProperty = 'ProtocoloDetalhadoId';
        export const nameProperty = 'ItemDescricao';
        export const localTextPrefix = 'Clinica.ProtocolosDetalhados';
        export const lookupKey = 'Clinica.ProtocolosDetalhados';

        export function getLookup(): Q.Lookup<ProtocolosDetalhadosRow> {
            return Q.getLookup<ProtocolosDetalhadosRow>('Clinica.ProtocolosDetalhados');
        }

        export namespace Fields {
            export declare const ProtocoloDetalhadoId: string;
            export declare const ProtocoloId: string;
            export declare const ItemDescricao: string;
            export declare const Arquivos: string;
            export declare const Observacao: string;
            export declare const Protocolo: string;
            export declare const ProtocoloTipoProtocoloId: string;
            export declare const ProtocoloConvenioId: string;
            export declare const ProtocoloResponsável: string;
            export declare const ProtocoloAssunto: string;
            export declare const ProtocoloDataEnvio: string;
            export declare const ProtocoloDataRetorno: string;
            export declare const ProtocoloResolvido: string;
            export declare const ProtocoloDataResolvido: string;
            export declare const ProtocoloDecisaoTomada: string;
        }

        ['ProtocoloDetalhadoId', 'ProtocoloId', 'ItemDescricao', 'Arquivos', 'Observacao', 'Protocolo', 'ProtocoloTipoProtocoloId', 'ProtocoloConvenioId', 'ProtocoloResponsável', 'ProtocoloAssunto', 'ProtocoloDataEnvio', 'ProtocoloDataRetorno', 'ProtocoloResolvido', 'ProtocoloDataResolvido', 'ProtocoloDecisaoTomada'].forEach(x => (<any>Fields)[x] = x);
    }
}

