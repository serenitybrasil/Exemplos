namespace Exemplos.Clinica {
    export class EspecialidadesProcedimentosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.EspecialidadesProcedimentos';

    }

    export interface EspecialidadesProcedimentosForm {
        EspecialidadeId: Serenity.LookupEditor;
        ProcedimentoId: Serenity.LookupEditor;
        DataInicio: Serenity.DateTimeEditor;
        DataFim: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
        DataCadastrada: Serenity.DateTimeEditor;
        IdCodigoRegistrado: Serenity.BooleanEditor;
    }

    [['EspecialidadeId', () => Serenity.LookupEditor], ['ProcedimentoId', () => Serenity.LookupEditor], ['DataInicio', () => Serenity.DateTimeEditor], ['DataFim', () => Serenity.DateTimeEditor], ['Observacao', () => Serenity.TextAreaEditor], ['DataCadastrada', () => Serenity.DateTimeEditor], ['IdCodigoRegistrado', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(EspecialidadesProcedimentosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

