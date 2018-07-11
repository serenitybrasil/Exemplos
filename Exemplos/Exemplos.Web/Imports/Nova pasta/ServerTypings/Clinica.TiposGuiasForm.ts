namespace Exemplos.Clinica {
    export class TiposGuiasForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposGuias';

    }

    export interface TiposGuiasForm {
        Descricao: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
    }

    [['Descricao', () => Serenity.StringEditor], ['Ativo', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(TiposGuiasForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

