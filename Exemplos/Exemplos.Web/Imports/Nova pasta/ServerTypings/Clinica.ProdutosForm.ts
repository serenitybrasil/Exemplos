namespace Exemplos.Clinica {
    export class ProdutosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Produtos';

    }

    export interface ProdutosForm {
        DescricaoProduto: Serenity.TextAreaEditor;
        TipoProdutoId: Serenity.IntegerEditor;
        Descricao: Serenity.StringEditor;
        DescricaoResumida: Serenity.StringEditor;
        ValorVenda: Serenity.DecimalEditor;
        ValorCusto: Serenity.DecimalEditor;
        MargemLucroMinima: Serenity.DecimalEditor;
        FornecedorId: Serenity.LookupEditor;
        GrupoProdutoId: Serenity.IntegerEditor;
        UnidadeId: Serenity.IntegerEditor;
        ObservacaoProduto: Serenity.TextAreaEditor;
        Ativo: Serenity.BooleanEditor;
        DataCriacao: Serenity.DateTimeEditor;
        LoginIdCriacao: Serenity.IntegerEditor;
        Inativo: Serenity.BooleanEditor;
        DataInativo: Serenity.DateTimeEditor;
        LoginIdInativo: Serenity.IntegerEditor;
        PlanoContaId: Serenity.IntegerEditor;
        NcmId: Serenity.IntegerEditor;
    }

    [['DescricaoProduto', () => Serenity.TextAreaEditor], ['TipoProdutoId', () => Serenity.IntegerEditor], ['Descricao', () => Serenity.StringEditor], ['DescricaoResumida', () => Serenity.StringEditor], ['ValorVenda', () => Serenity.DecimalEditor], ['ValorCusto', () => Serenity.DecimalEditor], ['MargemLucroMinima', () => Serenity.DecimalEditor], ['FornecedorId', () => Serenity.LookupEditor], ['GrupoProdutoId', () => Serenity.IntegerEditor], ['UnidadeId', () => Serenity.IntegerEditor], ['ObservacaoProduto', () => Serenity.TextAreaEditor], ['Ativo', () => Serenity.BooleanEditor], ['DataCriacao', () => Serenity.DateTimeEditor], ['LoginIdCriacao', () => Serenity.IntegerEditor], ['Inativo', () => Serenity.BooleanEditor], ['DataInativo', () => Serenity.DateTimeEditor], ['LoginIdInativo', () => Serenity.IntegerEditor], ['PlanoContaId', () => Serenity.IntegerEditor], ['NcmId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ProdutosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

