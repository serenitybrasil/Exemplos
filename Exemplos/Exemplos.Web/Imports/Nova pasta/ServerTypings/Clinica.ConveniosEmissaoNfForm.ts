namespace Exemplos.Clinica {
    export class ConveniosEmissaoNfForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.ConveniosEmissaoNf';

    }

    export interface ConveniosEmissaoNfForm {
        ConvenioId: Serenity.LookupEditor;
        RazaoSocial: Serenity.StringEditor;
        Cnpj: Serenity.MaskedEditor;
        EmailNf: Serenity.EmailEditor;
        Padrao: Serenity.BooleanEditor;
        TipoEnderecoId: Serenity.IntegerEditor;
        Rua: Serenity.TextAreaEditor;
        Numero: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Cidade: Serenity.StringEditor;
        CodigoIbgeCidade: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CodigoIbgeEstado: Serenity.StringEditor;
        Pais: Serenity.StringEditor;
        Cep: Serenity.StringEditor;
        Referencia: Serenity.TextAreaEditor;
        DataInicio: Serenity.DateTimeEditor;
        DataFim: Serenity.DateTimeEditor;
        Motivo: Serenity.TextAreaEditor;
    }

    [['ConvenioId', () => Serenity.LookupEditor], ['RazaoSocial', () => Serenity.StringEditor], ['Cnpj', () => Serenity.MaskedEditor], ['EmailNf', () => Serenity.EmailEditor], ['Padrao', () => Serenity.BooleanEditor], ['TipoEnderecoId', () => Serenity.IntegerEditor], ['Rua', () => Serenity.TextAreaEditor], ['Numero', () => Serenity.StringEditor], ['Complemento', () => Serenity.StringEditor], ['Bairro', () => Serenity.StringEditor], ['Cidade', () => Serenity.StringEditor], ['CodigoIbgeCidade', () => Serenity.StringEditor], ['Estado', () => Serenity.StringEditor], ['CodigoIbgeEstado', () => Serenity.StringEditor], ['Pais', () => Serenity.StringEditor], ['Cep', () => Serenity.StringEditor], ['Referencia', () => Serenity.TextAreaEditor], ['DataInicio', () => Serenity.DateTimeEditor], ['DataFim', () => Serenity.DateTimeEditor], ['Motivo', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(ConveniosEmissaoNfForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

