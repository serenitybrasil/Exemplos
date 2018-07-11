namespace Exemplos.Clinica {
    export class EstadosCivisForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.EstadosCivis';

    }

    export interface EstadosCivisForm {
        Descricao: Serenity.StringEditor;
    }

    [['Descricao', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EstadosCivisForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

