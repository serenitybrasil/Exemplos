namespace Exemplos.Clinica {
    export class DiasSemanasForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.DiasSemanas';

    }

    export interface DiasSemanasForm {
        Descricao: Serenity.StringEditor;
    }

    [['Descricao', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(DiasSemanasForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

