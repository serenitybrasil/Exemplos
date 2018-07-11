namespace Exemplos.Clinica {
    export class FolhasPagamentosProfissionaisForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.FolhasPagamentosProfissionais';

    }

    export interface FolhasPagamentosProfissionaisForm {
        ProfissionalId: Serenity.LookupEditor;
        NotaFiscalProfissional: Serenity.IntegerEditor;
        Arquivos: Serenity.TextAreaEditor;
        Movimento: Serenity.DateTimeEditor;
        DataPagamento: Serenity.DateTimeEditor;
        ValorPago: Serenity.DecimalEditor;
        DataImpressao: Serenity.DateTimeEditor;
    }

    [['ProfissionalId', () => Serenity.LookupEditor], ['NotaFiscalProfissional', () => Serenity.IntegerEditor], ['Arquivos', () => Serenity.TextAreaEditor], ['Movimento', () => Serenity.DateTimeEditor], ['DataPagamento', () => Serenity.DateTimeEditor], ['ValorPago', () => Serenity.DecimalEditor], ['DataImpressao', () => Serenity.DateTimeEditor]].forEach(x => Object.defineProperty(FolhasPagamentosProfissionaisForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

