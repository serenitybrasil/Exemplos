namespace Exemplos.Clinica {
    export interface ConselhosProfissionaisRow {
        ConselhoProfissionalId?: number;
        Descricao?: string;
    }

    export namespace ConselhosProfissionaisRow {
        export const idProperty = 'ConselhoProfissionalId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.ConselhosProfissionais';
        export const lookupKey = 'Clinica.ConselhosProfissionais';

        export function getLookup(): Q.Lookup<ConselhosProfissionaisRow> {
            return Q.getLookup<ConselhosProfissionaisRow>('Clinica.ConselhosProfissionais');
        }

        export namespace Fields {
            export declare const ConselhoProfissionalId: string;
            export declare const Descricao: string;
        }

        ['ConselhoProfissionalId', 'Descricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

