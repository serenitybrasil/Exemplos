namespace Exemplos.Clinica {
    export class StatusSessoesForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.StatusSessoes';

    }

    export interface StatusSessoesForm {
        Status: Serenity.StringEditor;
    }

    [['Status', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(StatusSessoesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

