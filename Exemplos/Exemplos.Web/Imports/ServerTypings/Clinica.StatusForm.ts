namespace Exemplos.Clinica {
    export class StatusForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Status';

    }

    export interface StatusForm {
        Status: Serenity.StringEditor;
    }

    [['Status', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(StatusForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

