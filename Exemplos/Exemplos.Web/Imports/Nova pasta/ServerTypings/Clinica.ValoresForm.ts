namespace Exemplos.Clinica {
    export class ValoresForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Valores';

    }

    export interface ValoresForm {
        TipoItemId: Serenity.LookupEditor;
        TipoTabelaId: Serenity.LookupEditor;
        ProcedimentoId: Serenity.LookupEditor;
        ConvenioId: Serenity.LookupEditor;
        ValorCh: Serenity.DecimalEditor;
        ValorSessao: Serenity.DecimalEditor;
        DataInicio: Serenity.DateTimeEditor;
        DataFim: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
        DataCadastrada: Serenity.DateTimeEditor;
        CodigoRegistrado: Serenity.BooleanEditor;
        RequerAutorizacao: Serenity.BooleanEditor;
        TipoAutorizacaoId: Serenity.LookupEditor;
    }

    [['TipoItemId', () => Serenity.LookupEditor], ['TipoTabelaId', () => Serenity.LookupEditor], ['ProcedimentoId', () => Serenity.LookupEditor], ['ConvenioId', () => Serenity.LookupEditor], ['ValorCh', () => Serenity.DecimalEditor], ['ValorSessao', () => Serenity.DecimalEditor], ['DataInicio', () => Serenity.DateTimeEditor], ['DataFim', () => Serenity.DateTimeEditor], ['Observacao', () => Serenity.TextAreaEditor], ['DataCadastrada', () => Serenity.DateTimeEditor], ['CodigoRegistrado', () => Serenity.BooleanEditor], ['RequerAutorizacao', () => Serenity.BooleanEditor], ['TipoAutorizacaoId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ValoresForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

