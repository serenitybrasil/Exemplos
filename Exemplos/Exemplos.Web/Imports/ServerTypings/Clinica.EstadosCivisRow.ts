namespace Exemplos.Clinica {
    export interface EstadosCivisRow {
        EstadoCivilId?: number;
        Descricao?: string;
    }

    export namespace EstadosCivisRow {
        export const idProperty = 'EstadoCivilId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Clinica.EstadosCivis';
        export const lookupKey = 'Clinica.EstadosCivis';

        export function getLookup(): Q.Lookup<EstadosCivisRow> {
            return Q.getLookup<EstadosCivisRow>('Clinica.EstadosCivis');
        }

        export namespace Fields {
            export declare const EstadoCivilId: string;
            export declare const Descricao: string;
        }

        ['EstadoCivilId', 'Descricao'].forEach(x => (<any>Fields)[x] = x);
    }
}

