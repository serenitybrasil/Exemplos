namespace Exemplos.Clinica {
    export class TiposMeiosContatosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposMeiosContatos';

    }

    export interface TiposMeiosContatosForm {
        TipoMeioContato: Serenity.StringEditor;
        Mascara: Serenity.StringEditor;
    }

    [['TipoMeioContato', () => Serenity.StringEditor], ['Mascara', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TiposMeiosContatosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

