namespace Exemplos.Clinica {
    export class SexoForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Sexo';

    }

    export interface SexoForm {
        Sexo: Serenity.StringEditor;
        Abreviatura: Serenity.StringEditor;
    }

    [['Sexo', () => Serenity.StringEditor], ['Abreviatura', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SexoForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

