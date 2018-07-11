namespace Exemplos.Clinica {
    export class ProtocolosEnvolvidosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.ProtocolosEnvolvidos';

    }

    export interface ProtocolosEnvolvidosForm {
        ProtocoloId: Serenity.LookupEditor;
        TipoEnvolvimentoId: Serenity.LookupEditor;
        ProfissionalId: Serenity.LookupEditor;
        PacienteId: Serenity.LookupEditor;
        FuncionarioId: Serenity.IntegerEditor;
        FornecedorId: Serenity.IntegerEditor;
    }

    [['ProtocoloId', () => Serenity.LookupEditor], ['TipoEnvolvimentoId', () => Serenity.LookupEditor], ['ProfissionalId', () => Serenity.LookupEditor], ['PacienteId', () => Serenity.LookupEditor], ['FuncionarioId', () => Serenity.IntegerEditor], ['FornecedorId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ProtocolosEnvolvidosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

