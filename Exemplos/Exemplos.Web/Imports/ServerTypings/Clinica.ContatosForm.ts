namespace Exemplos.Clinica {
    export class ContatosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Contatos';

    }

    export interface ContatosForm {
        Tratamento: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        Departamento: Serenity.StringEditor;
        TipoContatoId: Serenity.LookupEditor;
        TipoMeioContatoId: Serenity.LookupEditor;
        ConteudoMeioContato: Serenity.MaskedEditor;
        Email: Serenity.EmailEditor;
        ObservacoesContato: Serenity.TextAreaEditor;
    }

    [['Tratamento', () => Serenity.StringEditor], ['Nome', () => Serenity.StringEditor], ['Departamento', () => Serenity.StringEditor], ['TipoContatoId', () => Serenity.LookupEditor], ['TipoMeioContatoId', () => Serenity.LookupEditor], ['ConteudoMeioContato', () => Serenity.MaskedEditor], ['Email', () => Serenity.EmailEditor], ['ObservacoesContato', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(ContatosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

