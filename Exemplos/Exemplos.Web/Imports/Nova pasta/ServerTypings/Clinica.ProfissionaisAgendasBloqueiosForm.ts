namespace Exemplos.Clinica {
    export class ProfissionaisAgendasBloqueiosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.ProfissionaisAgendasBloqueios';

    }

    export interface ProfissionaisAgendasBloqueiosForm {
        ProfissionalId: Serenity.LookupEditor;
        EscalaId: Serenity.LookupEditor;
        DataHora: Serenity.DateTimeEditor;
        Descricao: Serenity.StringEditor;
        DiaInteiro: Serenity.BooleanEditor;
    }

    [['ProfissionalId', () => Serenity.LookupEditor], ['EscalaId', () => Serenity.LookupEditor], ['DataHora', () => Serenity.DateTimeEditor], ['Descricao', () => Serenity.StringEditor], ['DiaInteiro', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(ProfissionaisAgendasBloqueiosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

