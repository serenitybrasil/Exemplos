namespace Exemplos.Clinica {
    export interface ProfissionaisAgendasHorasRow {
        ProfissionalAgendaHoraId?: number;
        ProfissionalAgendaId?: number;
        Horario?: string;
    }

    export namespace ProfissionaisAgendasHorasRow {
        export const idProperty = 'ProfissionalAgendaHoraId';
        export const localTextPrefix = 'Clinica.ProfissionaisAgendasHoras';
        export const lookupKey = 'Clinica.ProfissionaisAgendasHoras';

        export function getLookup(): Q.Lookup<ProfissionaisAgendasHorasRow> {
            return Q.getLookup<ProfissionaisAgendasHorasRow>('Clinica.ProfissionaisAgendasHoras');
        }

        export namespace Fields {
            export declare const ProfissionalAgendaHoraId: string;
            export declare const ProfissionalAgendaId: string;
            export declare const Horario: string;
        }

        ['ProfissionalAgendaHoraId', 'ProfissionalAgendaId', 'Horario'].forEach(x => (<any>Fields)[x] = x);
    }
}

