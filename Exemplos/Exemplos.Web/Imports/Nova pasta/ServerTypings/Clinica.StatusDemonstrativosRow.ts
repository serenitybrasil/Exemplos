namespace Exemplos.Clinica {
    export interface StatusDemonstrativosRow {
        StatusDemonstrativoId?: number;
        Status?: string;
    }

    export namespace StatusDemonstrativosRow {
        export const idProperty = 'StatusDemonstrativoId';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'Clinica.StatusDemonstrativos';
        export const lookupKey = 'Clinica.StatusDemonstrativos';

        export function getLookup(): Q.Lookup<StatusDemonstrativosRow> {
            return Q.getLookup<StatusDemonstrativosRow>('Clinica.StatusDemonstrativos');
        }

        export namespace Fields {
            export declare const StatusDemonstrativoId: string;
            export declare const Status: string;
        }

        ['StatusDemonstrativoId', 'Status'].forEach(x => (<any>Fields)[x] = x);
    }
}

