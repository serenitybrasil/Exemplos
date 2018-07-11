namespace Exemplos.Clinica {
    export class TipoEspecialidadeForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TipoEspecialidade';

    }

    export interface TipoEspecialidadeForm {
        Descricao: Serenity.StringEditor;
    }

    [['Descricao', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TipoEspecialidadeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

