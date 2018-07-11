namespace Exemplos.Clinica {
    export class TissForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Tiss';

    }

    export interface TissForm {
        Versao: Serenity.StringEditor;
    }

    [['Versao', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TissForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

