namespace Exemplos.Clinica {
    export class EspecialidadesForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Especialidades';

    }

    export interface EspecialidadesForm {
        TipoEspecialidadeId: Serenity.LookupEditor;
        Descricao: Serenity.StringEditor;
        VisivelAgenda: Serenity.BooleanEditor;
    }

    [['TipoEspecialidadeId', () => Serenity.LookupEditor], ['Descricao', () => Serenity.StringEditor], ['VisivelAgenda', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(EspecialidadesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

