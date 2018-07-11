namespace Exemplos.Clinica {
    export class ConselhosProfissionaisForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.ConselhosProfissionais';

    }

    export interface ConselhosProfissionaisForm {
        Descricao: Serenity.StringEditor;
    }

    [['Descricao', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ConselhosProfissionaisForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

