namespace Exemplos.Clinica {
    export class DemonstrativosNotasFiscaisForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.DemonstrativosNotasFiscais';

    }

    export interface DemonstrativosNotasFiscaisForm {
        DemonstrativoId: Serenity.LookupEditor;
        Nfseid: Serenity.IntegerEditor;
    }

    [['DemonstrativoId', () => Serenity.LookupEditor], ['Nfseid', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(DemonstrativosNotasFiscaisForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

