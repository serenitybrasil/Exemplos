namespace Exemplos.Clinica {
    export class LotesForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Lotes';

    }

    export interface LotesForm {
        StatusLoteId: Serenity.LookupEditor;
        Movimentacao: Serenity.DateTimeEditor;
        ConvenioId: Serenity.IntegerEditor;
        DataEmissaoLote: Serenity.DateTimeEditor;
        Lote: Serenity.StringEditor;
        Protocolo: Serenity.StringEditor;
        LoteConvenio: Serenity.StringEditor;
        ValorLote: Serenity.DecimalEditor;
        CapaLote: Serenity.StringEditor;
        Extrato: Serenity.StringEditor;
        EnviadoConvenioId: Serenity.BooleanEditor;
        DataEnviadoConvenio: Serenity.DateTimeEditor;
        ArquivoFisicoEnviadoId: Serenity.BooleanEditor;
        CartaSimplesId: Serenity.BooleanEditor;
        Sedex: Serenity.StringEditor;
        Arid: Serenity.BooleanEditor;
        DataRetornoAr: Serenity.DateTimeEditor;
        ValorCorreios: Serenity.DecimalEditor;
        Arquivos: Serenity.TextAreaEditor;
        Observacao: Serenity.TextAreaEditor;
        Nfseid: Serenity.IntegerEditor;
        NotaFiscal: Serenity.StringEditor;
        ValorNotaFiscal: Serenity.DecimalEditor;
        DataEmissaoNotaFiscal: Serenity.DateTimeEditor;
        EmailNotaFiscal: Serenity.EmailEditor;
        NotaFiscalImpressaId: Serenity.BooleanEditor;
        NotaFiscalRecebida: Serenity.StringEditor;
        DataNotaFiscalImpressa: Serenity.DateTimeEditor;
    }

    [['StatusLoteId', () => Serenity.LookupEditor], ['Movimentacao', () => Serenity.DateTimeEditor], ['ConvenioId', () => Serenity.IntegerEditor], ['DataEmissaoLote', () => Serenity.DateTimeEditor], ['Lote', () => Serenity.StringEditor], ['Protocolo', () => Serenity.StringEditor], ['LoteConvenio', () => Serenity.StringEditor], ['ValorLote', () => Serenity.DecimalEditor], ['CapaLote', () => Serenity.StringEditor], ['Extrato', () => Serenity.StringEditor], ['EnviadoConvenioId', () => Serenity.BooleanEditor], ['DataEnviadoConvenio', () => Serenity.DateTimeEditor], ['ArquivoFisicoEnviadoId', () => Serenity.BooleanEditor], ['CartaSimplesId', () => Serenity.BooleanEditor], ['Sedex', () => Serenity.StringEditor], ['Arid', () => Serenity.BooleanEditor], ['DataRetornoAr', () => Serenity.DateTimeEditor], ['ValorCorreios', () => Serenity.DecimalEditor], ['Arquivos', () => Serenity.TextAreaEditor], ['Observacao', () => Serenity.TextAreaEditor], ['Nfseid', () => Serenity.IntegerEditor], ['NotaFiscal', () => Serenity.StringEditor], ['ValorNotaFiscal', () => Serenity.DecimalEditor], ['DataEmissaoNotaFiscal', () => Serenity.DateTimeEditor], ['EmailNotaFiscal', () => Serenity.EmailEditor], ['NotaFiscalImpressaId', () => Serenity.BooleanEditor], ['NotaFiscalRecebida', () => Serenity.StringEditor], ['DataNotaFiscalImpressa', () => Serenity.DateTimeEditor]].forEach(x => Object.defineProperty(LotesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

