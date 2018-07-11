namespace Exemplos.Clinica {
    export class ProfissionaisAgendasForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.ProfissionaisAgendas';

    }

    export interface ProfissionaisAgendasForm {
        ProfissionalId: Serenity.LookupEditor;
        EscalaId: Serenity.LookupEditor;
        DiaSemanaId: Serenity.LookupEditor;
    }

    [['ProfissionalId', () => Serenity.LookupEditor], ['EscalaId', () => Serenity.LookupEditor], ['DiaSemanaId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ProfissionaisAgendasForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

