namespace Exemplos.Clinica {
    export class TiposFichasCnesForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposFichasCnes';

    }

    export interface TiposFichasCnesForm {
        Descricao: Serenity.StringEditor;
    }

    [['Descricao', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TiposFichasCnesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

