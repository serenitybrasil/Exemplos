namespace Exemplos.Clinica {
    export interface StatusLotesRow {
        StatusLoteId?: number;
        Status?: string;
    }

    export namespace StatusLotesRow {
        export const idProperty = 'StatusLoteId';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'Clinica.StatusLotes';
        export const lookupKey = 'Clinica.StatusLotes';

        export function getLookup(): Q.Lookup<StatusLotesRow> {
            return Q.getLookup<StatusLotesRow>('Clinica.StatusLotes');
        }

        export namespace Fields {
            export declare const StatusLoteId: string;
            export declare const Status: string;
        }

        ['StatusLoteId', 'Status'].forEach(x => (<any>Fields)[x] = x);
    }
}

