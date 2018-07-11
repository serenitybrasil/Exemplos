namespace Exemplos.Clinica {
    export class TiposTabelasForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposTabelas';

    }

    export interface TiposTabelasForm {
        Descricao: Serenity.StringEditor;
        CodigoTabela: Serenity.IntegerEditor;
        Tissid: Serenity.LookupEditor;
    }

    [['Descricao', () => Serenity.StringEditor], ['CodigoTabela', () => Serenity.IntegerEditor], ['Tissid', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(TiposTabelasForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

