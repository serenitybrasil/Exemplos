namespace Exemplos.Clinica {
    export class StatusLotesForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.StatusLotes';

    }

    export interface StatusLotesForm {
        Status: Serenity.StringEditor;
    }

    [['Status', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(StatusLotesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

