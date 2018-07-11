namespace Exemplos.Clinica {
    export class EscalasForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Escalas';

    }

    export interface EscalasForm {
        ProfissionalId: Serenity.IntegerEditor;
        Descricao: Serenity.StringEditor;
        Principal: Serenity.BooleanEditor;
    }

    [['ProfissionalId', () => Serenity.IntegerEditor], ['Descricao', () => Serenity.StringEditor], ['Principal', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(EscalasForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

