namespace Exemplos.Clinica {
    export class TiposEnderecosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposEnderecos';

    }

    export interface TiposEnderecosForm {
        TipoEndereco: Serenity.StringEditor;
        PessoaFisica: Serenity.BooleanEditor;
        Ordem: Serenity.IntegerEditor;
    }

    [['TipoEndereco', () => Serenity.StringEditor], ['PessoaFisica', () => Serenity.BooleanEditor], ['Ordem', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(TiposEnderecosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

