namespace Exemplos.Clinica {
    export class FornecedoresForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Fornecedores';

    }

    export interface FornecedoresForm {
        Status: Serenity.BooleanEditor;
        PessoaJuridica: Serenity.BooleanEditor;
        RazaoSocial: Serenity.TextAreaEditor;
        NomeFantasia: Serenity.TextAreaEditor;
        NomeAbreviado: Serenity.StringEditor;
        Cpf: Serenity.MaskedEditor;
        Rg: Serenity.StringEditor;
        Cnpj: Serenity.MaskedEditor;
        InscricaoEstadual: Serenity.TextAreaEditor;
        InscricaoMunicipal: Serenity.TextAreaEditor;
        Site: Serenity.TextAreaEditor;
        Telefone: Serenity.MaskedEditor;
        Fax: Serenity.TextAreaEditor;
        TelefoneAlternativo: Serenity.MaskedEditor;
        EmailCorporativo: Serenity.EmailEditor;
        AceitaReceberEmail: Serenity.BooleanEditor;
        MotivoStatus: Serenity.TextAreaEditor;
        QuantidadeEmpregados: Serenity.IntegerEditor;
        AtividadeEmpresaId: Serenity.IntegerEditor;
        ReceitaAnual: Serenity.DecimalEditor;
        MarcasTrabalhadas: Serenity.TextAreaEditor;
        ObservacoesGerais: Serenity.TextAreaEditor;
        DataCriacao: Serenity.DateTimeEditor;
        DataAlteracao: Serenity.DateTimeEditor;
        Inativo: Serenity.BooleanEditor;
        DataInativo: Serenity.DateTimeEditor;
        ContatosList: ContatosEditor;
        EnderecosList: EnderecosEditor;
    }

    [['Status', () => Serenity.BooleanEditor], ['PessoaJuridica', () => Serenity.BooleanEditor], ['RazaoSocial', () => Serenity.TextAreaEditor], ['NomeFantasia', () => Serenity.TextAreaEditor], ['NomeAbreviado', () => Serenity.StringEditor], ['Cpf', () => Serenity.MaskedEditor], ['Rg', () => Serenity.StringEditor], ['Cnpj', () => Serenity.MaskedEditor], ['InscricaoEstadual', () => Serenity.TextAreaEditor], ['InscricaoMunicipal', () => Serenity.TextAreaEditor], ['Site', () => Serenity.TextAreaEditor], ['Telefone', () => Serenity.MaskedEditor], ['Fax', () => Serenity.TextAreaEditor], ['TelefoneAlternativo', () => Serenity.MaskedEditor], ['EmailCorporativo', () => Serenity.EmailEditor], ['AceitaReceberEmail', () => Serenity.BooleanEditor], ['MotivoStatus', () => Serenity.TextAreaEditor], ['QuantidadeEmpregados', () => Serenity.IntegerEditor], ['AtividadeEmpresaId', () => Serenity.IntegerEditor], ['ReceitaAnual', () => Serenity.DecimalEditor], ['MarcasTrabalhadas', () => Serenity.TextAreaEditor], ['ObservacoesGerais', () => Serenity.TextAreaEditor], ['DataCriacao', () => Serenity.DateTimeEditor], ['DataAlteracao', () => Serenity.DateTimeEditor], ['Inativo', () => Serenity.BooleanEditor], ['DataInativo', () => Serenity.DateTimeEditor], ['ContatosList', () => ContatosEditor], ['EnderecosList', () => EnderecosEditor]].forEach(x => Object.defineProperty(FornecedoresForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

