namespace Exemplos.Clinica {
    export interface EscalasRow {
        EscalaId?: number;
        ProfissionalId?: number;
        Descricao?: string;
        Principal?: boolean;
    }

    export namespace EscalasRow {
        export const idProperty = 'EscalaId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.Escalas';
        export const lookupKey = 'Clinica.Escalas';

        export function getLookup(): Q.Lookup<EscalasRow> {
            return Q.getLookup<EscalasRow>('Clinica.Escalas');
        }

        export namespace Fields {
            export declare const EscalaId: string;
            export declare const ProfissionalId: string;
            export declare const Descricao: string;
            export declare const Principal: string;
        }

        ['EscalaId', 'ProfissionalId', 'Descricao', 'Principal'].forEach(x => (<any>Fields)[x] = x);
    }
}

