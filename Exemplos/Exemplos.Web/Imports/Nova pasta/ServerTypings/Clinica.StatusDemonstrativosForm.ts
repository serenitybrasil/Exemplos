namespace Exemplos.Clinica {
    export class StatusDemonstrativosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.StatusDemonstrativos';

    }

    export interface StatusDemonstrativosForm {
        Status: Serenity.StringEditor;
    }

    [['Status', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(StatusDemonstrativosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

