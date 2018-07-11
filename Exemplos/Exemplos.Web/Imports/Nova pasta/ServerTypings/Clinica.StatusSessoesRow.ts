namespace Exemplos.Clinica {
    export interface StatusSessoesRow {
        StatusSessaoId?: number;
        Status?: string;
    }

    export namespace StatusSessoesRow {
        export const idProperty = 'StatusSessaoId';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'Clinica.StatusSessoes';
        export const lookupKey = 'Clinica.StatusSessoes';

        export function getLookup(): Q.Lookup<StatusSessoesRow> {
            return Q.getLookup<StatusSessoesRow>('Clinica.StatusSessoes');
        }

        export namespace Fields {
            export declare const StatusSessaoId: string;
            export declare const Status: string;
        }

        ['StatusSessaoId', 'Status'].forEach(x => (<any>Fields)[x] = x);
    }
}

