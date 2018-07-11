namespace Exemplos.Clinica {
    export class CbosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Cbos';

    }

    export interface CbosForm {
        Codigo: Serenity.StringEditor;
        Cbos: Serenity.StringEditor;
    }

    [['Codigo', () => Serenity.StringEditor], ['Cbos', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CbosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

