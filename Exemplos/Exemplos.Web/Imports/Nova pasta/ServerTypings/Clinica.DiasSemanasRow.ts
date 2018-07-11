namespace Exemplos.Clinica {
    export interface DiasSemanasRow {
        DiaSemanaId?: number;
        Descricao?: string;
    }

    export namespace DiasSemanasRow {
        export const idProperty = 'DiaSemanaId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.DiasSemanas';
        export const lookupKey = 'Clinica.DiasSemanas';

        export function getLookup(): Q.Lookup<DiasSemanasRow> {
            return Q.getLookup<DiasSemanasRow>('Clinica.DiasSemanas');
        }

        export namespace Fields {
            export declare const DiaSemanaId: string;
            export declare const Descricao: string;
        }

        ['DiaSemanaId', 'Descricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

