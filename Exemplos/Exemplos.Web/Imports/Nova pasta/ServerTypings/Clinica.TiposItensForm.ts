namespace Exemplos.Clinica {
    export class TiposItensForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposItens';

    }

    export interface TiposItensForm {
        Descricao: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
    }

    [['Descricao', () => Serenity.StringEditor], ['Ativo', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(TiposItensForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

