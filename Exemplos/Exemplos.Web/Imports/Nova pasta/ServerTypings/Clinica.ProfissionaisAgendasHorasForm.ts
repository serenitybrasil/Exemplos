namespace Exemplos.Clinica {
    export class ProfissionaisAgendasHorasForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.ProfissionaisAgendasHoras';

    }

    export interface ProfissionaisAgendasHorasForm {
        ProfissionalAgendaId: Serenity.IntegerEditor;
        Horario: Serenity.StringEditor;
    }

    [['ProfissionalAgendaId', () => Serenity.IntegerEditor], ['Horario', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ProfissionaisAgendasHorasForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

