namespace Exemplos.Clinica {
    export class PorcentagemForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Porcentagem';

    }

    export interface PorcentagemForm {
        ProfissionalId: Serenity.LookupEditor;
        ProcedimentoId: Serenity.LookupEditor;
        ValorPorcentagem: Serenity.DecimalEditor;
        ValorFixo: Serenity.DecimalEditor;
        IdMostraFixo: Serenity.BooleanEditor;
        DataCadastrada: Serenity.DateTimeEditor;
        DataInicio: Serenity.DateTimeEditor;
        DataFim: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
    }

    [['ProfissionalId', () => Serenity.LookupEditor], ['ProcedimentoId', () => Serenity.LookupEditor], ['ValorPorcentagem', () => Serenity.DecimalEditor], ['ValorFixo', () => Serenity.DecimalEditor], ['IdMostraFixo', () => Serenity.BooleanEditor], ['DataCadastrada', () => Serenity.DateTimeEditor], ['DataInicio', () => Serenity.DateTimeEditor], ['DataFim', () => Serenity.DateTimeEditor], ['Observacao', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(PorcentagemForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

