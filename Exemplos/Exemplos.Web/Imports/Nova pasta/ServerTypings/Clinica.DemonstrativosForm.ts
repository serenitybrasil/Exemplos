namespace Exemplos.Clinica {
    export class DemonstrativosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Demonstrativos';

    }

    export interface DemonstrativosForm {
        ConvenioId: Serenity.LookupEditor;
        Demonstrativo: Serenity.StringEditor;
        DataDemonstrativo: Serenity.DateTimeEditor;
        DataPagamento: Serenity.DateTimeEditor;
        Observacoes: Serenity.TextAreaEditor;
        ValorProcessado: Serenity.DecimalEditor;
        ValorLiberado: Serenity.DecimalEditor;
        ValorGlosado: Serenity.DecimalEditor;
        NumeroLotePrestador: Serenity.StringEditor;
        NumeroProtocolo: Serenity.StringEditor;
        DataProtocolo: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
        Arquivos: Serenity.TextAreaEditor;
    }

    [['ConvenioId', () => Serenity.LookupEditor], ['Demonstrativo', () => Serenity.StringEditor], ['DataDemonstrativo', () => Serenity.DateTimeEditor], ['DataPagamento', () => Serenity.DateTimeEditor], ['Observacoes', () => Serenity.TextAreaEditor], ['ValorProcessado', () => Serenity.DecimalEditor], ['ValorLiberado', () => Serenity.DecimalEditor], ['ValorGlosado', () => Serenity.DecimalEditor], ['NumeroLotePrestador', () => Serenity.StringEditor], ['NumeroProtocolo', () => Serenity.StringEditor], ['DataProtocolo', () => Serenity.DateTimeEditor], ['Observacao', () => Serenity.TextAreaEditor], ['Arquivos', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(DemonstrativosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

