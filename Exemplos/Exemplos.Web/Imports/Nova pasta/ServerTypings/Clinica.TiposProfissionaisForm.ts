namespace Exemplos.Clinica {
    export class TiposProfissionaisForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposProfissionais';

    }

    export interface TiposProfissionaisForm {
        Descricao: Serenity.StringEditor;
    }

    [['Descricao', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TiposProfissionaisForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

