namespace Exemplos.Clinica {
    export interface SexoRow {
        SexoId?: number;
        Sexo?: string;
        Abreviatura?: string;
    }

    export namespace SexoRow {
        export const idProperty = 'SexoId';
        export const nameProperty = 'Sexo';
        export const localTextPrefix = 'Clinica.Sexo';
        export const lookupKey = 'Clinica.Sexo';

        export function getLookup(): Q.Lookup<SexoRow> {
            return Q.getLookup<SexoRow>('Clinica.Sexo');
        }

        export namespace Fields {
            export declare const SexoId: string;
            export declare const Sexo: string;
            export declare const Abreviatura: string;
        }

        ['SexoId', 'Sexo', 'Abreviatura'].forEach(x => (<any>Fields)[x] = x);
    }
}

