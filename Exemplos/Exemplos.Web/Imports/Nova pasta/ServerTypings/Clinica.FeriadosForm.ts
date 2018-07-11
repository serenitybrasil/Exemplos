namespace Exemplos.Clinica {
    export class FeriadosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Feriados';

    }

    export interface FeriadosForm {
        TipoFeriadoId: Serenity.LookupEditor;
        DataFeriado: Serenity.DateTimeEditor;
        Feriado: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
    }

    [['TipoFeriadoId', () => Serenity.LookupEditor], ['DataFeriado', () => Serenity.DateTimeEditor], ['Feriado', () => Serenity.StringEditor], ['Ativo', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(FeriadosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

