namespace Exemplos.Clinica {
    export class EspecialidadesProfissionaisForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.EspecialidadesProfissionais';

    }

    export interface EspecialidadesProfissionaisForm {
        ProfissionalId: Serenity.LookupEditor;
        EspecialidadeId: Serenity.LookupEditor;
        Cbosid: Serenity.LookupEditor;
    }

    [['ProfissionalId', () => Serenity.LookupEditor], ['EspecialidadeId', () => Serenity.LookupEditor], ['Cbosid', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(EspecialidadesProfissionaisForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

