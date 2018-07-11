namespace Exemplos.Clinica {
    export class TiposConsultasForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposConsultas';

    }

    export interface TiposConsultasForm {
        Descricao: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
    }

    [['Descricao', () => Serenity.StringEditor], ['Ativo', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(TiposConsultasForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

