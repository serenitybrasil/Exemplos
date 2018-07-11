namespace Exemplos.Clinica {
    export interface StatusRow {
        StatusId?: number;
        Status?: string;
    }

    export namespace StatusRow {
        export const idProperty = 'StatusId';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'Clinica.Status';
        export const lookupKey = 'Clinica.Status';

        export function getLookup(): Q.Lookup<StatusRow> {
            return Q.getLookup<StatusRow>('Clinica.Status');
        }

        export namespace Fields {
            export declare const StatusId: string;
            export declare const Status: string;
        }

        ['StatusId', 'Status'].forEach(x => (<any>Fields)[x] = x);
    }
}

