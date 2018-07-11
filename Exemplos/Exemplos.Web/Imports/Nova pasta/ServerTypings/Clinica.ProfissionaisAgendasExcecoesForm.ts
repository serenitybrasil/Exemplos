namespace Exemplos.Clinica {
    export class ProfissionaisAgendasExcecoesForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.ProfissionaisAgendasExcecoes';

    }

    export interface ProfissionaisAgendasExcecoesForm {
        ProfissionalId: Serenity.LookupEditor;
        DataInicial: Serenity.DateTimeEditor;
        DataFinal: Serenity.DateTimeEditor;
        Descricao: Serenity.StringEditor;
        DiaInteiro: Serenity.BooleanEditor;
        Ativo: Serenity.BooleanEditor;
    }

    [['ProfissionalId', () => Serenity.LookupEditor], ['DataInicial', () => Serenity.DateTimeEditor], ['DataFinal', () => Serenity.DateTimeEditor], ['Descricao', () => Serenity.StringEditor], ['DiaInteiro', () => Serenity.BooleanEditor], ['Ativo', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(ProfissionaisAgendasExcecoesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

