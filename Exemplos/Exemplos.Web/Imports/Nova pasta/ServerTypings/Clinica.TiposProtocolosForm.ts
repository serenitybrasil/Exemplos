namespace Exemplos.Clinica {
    export class TiposProtocolosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposProtocolos';

    }

    export interface TiposProtocolosForm {
        Descricao: Serenity.StringEditor;
    }

    [['Descricao', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TiposProtocolosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

