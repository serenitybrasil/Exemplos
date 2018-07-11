namespace Exemplos.Clinica {
    export class PacientesEmissaoNfForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.PacientesEmissaoNf';

    }

    export interface PacientesEmissaoNfForm {
        PacienteId: Serenity.LookupEditor;
        NomeResponsavel: Serenity.StringEditor;
        PessoaJuridica: Serenity.BooleanEditor;
        CpfResponsavel: Serenity.MaskedEditor;
        CnpjResponsavel: Serenity.MaskedEditor;
        EmailNf: Serenity.EmailEditor;
        Padrao: Serenity.BooleanEditor;
        TipoEnderecoId: Serenity.LookupEditor;
        Cep: Serenity.MaskedEditor;
        Rua: Serenity.StringEditor;
        Numero: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Cidade: Serenity.StringEditor;
        CodigoIbgeCidade: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CodigoIbgeEstado: Serenity.StringEditor;
        Pais: Serenity.StringEditor;
        Referencia: Serenity.TextAreaEditor;
    }

    [['PacienteId', () => Serenity.LookupEditor], ['NomeResponsavel', () => Serenity.StringEditor], ['PessoaJuridica', () => Serenity.BooleanEditor], ['CpfResponsavel', () => Serenity.MaskedEditor], ['CnpjResponsavel', () => Serenity.MaskedEditor], ['EmailNf', () => Serenity.EmailEditor], ['Padrao', () => Serenity.BooleanEditor], ['TipoEnderecoId', () => Serenity.LookupEditor], ['Cep', () => Serenity.MaskedEditor], ['Rua', () => Serenity.StringEditor], ['Numero', () => Serenity.StringEditor], ['Complemento', () => Serenity.StringEditor], ['Bairro', () => Serenity.StringEditor], ['Cidade', () => Serenity.StringEditor], ['CodigoIbgeCidade', () => Serenity.StringEditor], ['Estado', () => Serenity.StringEditor], ['CodigoIbgeEstado', () => Serenity.StringEditor], ['Pais', () => Serenity.StringEditor], ['Referencia', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(PacientesEmissaoNfForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

