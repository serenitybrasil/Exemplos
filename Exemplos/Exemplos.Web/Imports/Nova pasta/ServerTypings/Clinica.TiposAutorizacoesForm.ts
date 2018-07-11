namespace Exemplos.Clinica {
    export class TiposAutorizacoesForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.TiposAutorizacoes';

    }

    export interface TiposAutorizacoesForm {
        Descricao: Serenity.StringEditor;
    }

    [['Descricao', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TiposAutorizacoesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

