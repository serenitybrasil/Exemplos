namespace Exemplos.Clinica {
    export class TabelasForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Tabelas';

    }

    export interface TabelasForm {
        Descricao: Serenity.StringEditor;
    }

    [['Descricao', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TabelasForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

