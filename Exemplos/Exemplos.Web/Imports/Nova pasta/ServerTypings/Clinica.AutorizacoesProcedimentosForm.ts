namespace Exemplos.Clinica {
    export class AutorizacoesProcedimentosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.AutorizacoesProcedimentos';

    }

    export interface AutorizacoesProcedimentosForm {
        AutorizacaoId: Serenity.LookupEditor;
        ProcedimentoId: Serenity.IntegerEditor;
        Procedimento: Serenity.StringEditor;
        QuantidadeLiberada: Serenity.IntegerEditor;
        DataInicial: Serenity.DateTimeEditor;
        DataFinal: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
        IdAuditada: Serenity.BooleanEditor;
        DataAuditoria: Serenity.DateTimeEditor;
        IdAuditoriaAprovada: Serenity.BooleanEditor;
        ConclusaoAuditoria: Serenity.TextAreaEditor;
    }

    [['AutorizacaoId', () => Serenity.LookupEditor], ['ProcedimentoId', () => Serenity.IntegerEditor], ['Procedimento', () => Serenity.StringEditor], ['QuantidadeLiberada', () => Serenity.IntegerEditor], ['DataInicial', () => Serenity.DateTimeEditor], ['DataFinal', () => Serenity.DateTimeEditor], ['Observacao', () => Serenity.TextAreaEditor], ['IdAuditada', () => Serenity.BooleanEditor], ['DataAuditoria', () => Serenity.DateTimeEditor], ['IdAuditoriaAprovada', () => Serenity.BooleanEditor], ['ConclusaoAuditoria', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(AutorizacoesProcedimentosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

