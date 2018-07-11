namespace Exemplos.Clinica {
    export class TiposEnvolvimentosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposEnvolvimentos';

    }

    export interface TiposEnvolvimentosForm {
        Descricao: Serenity.StringEditor;
    }

    [['Descricao', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TiposEnvolvimentosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

