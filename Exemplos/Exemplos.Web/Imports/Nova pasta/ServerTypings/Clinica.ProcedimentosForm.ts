namespace Exemplos.Clinica {
    export class ProcedimentosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Procedimentos';

    }

    export interface ProcedimentosForm {
        TabelaId: Serenity.LookupEditor;
        Procedimento: Serenity.TextAreaEditor;
        Codigo: Serenity.StringEditor;
        Ch: Serenity.DecimalEditor;
        CodigoCbhpm: Serenity.StringEditor;
        CodigoTuss: Serenity.StringEditor;
        DataCadastrada: Serenity.DateTimeEditor;
        IdCodigoRegistrado: Serenity.BooleanEditor;
    }

    [['TabelaId', () => Serenity.LookupEditor], ['Procedimento', () => Serenity.TextAreaEditor], ['Codigo', () => Serenity.StringEditor], ['Ch', () => Serenity.DecimalEditor], ['CodigoCbhpm', () => Serenity.StringEditor], ['CodigoTuss', () => Serenity.StringEditor], ['DataCadastrada', () => Serenity.DateTimeEditor], ['IdCodigoRegistrado', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(ProcedimentosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

