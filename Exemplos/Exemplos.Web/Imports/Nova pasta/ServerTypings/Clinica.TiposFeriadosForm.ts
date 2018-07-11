namespace Exemplos.Clinica {
    export class TiposFeriadosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposFeriados';

    }

    export interface TiposFeriadosForm {
        TipoFeriado: Serenity.StringEditor;
    }

    [['TipoFeriado', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TiposFeriadosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

