namespace Exemplos.Clinica {
    export class TiposContatosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposContatos';

    }

    export interface TiposContatosForm {
        TipoContato: Serenity.StringEditor;
        PessoaFisica: Serenity.BooleanEditor;
        Ordem: Serenity.IntegerEditor;
    }

    [['TipoContato', () => Serenity.StringEditor], ['PessoaFisica', () => Serenity.BooleanEditor], ['Ordem', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(TiposContatosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

