namespace Exemplos.Clinica {
    export class ProfissionaisForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Profissionais';

    }

    export interface ProfissionaisForm {
        IdAtivo: Serenity.BooleanEditor;
        DataInicio: Serenity.DateTimeEditor;
        DataFim: Serenity.DateTimeEditor;
        MotivoEncerramento: Serenity.TextAreaEditor;
        Profissional: Serenity.StringEditor;
        Pai: Serenity.StringEditor;
        Mae: Serenity.StringEditor;
        SexoId: Serenity.LookupEditor;
        DataNascimento: Serenity.DateTimeEditor;
        EstadoCivilId: Serenity.LookupEditor;
        CarteiraIdentidade: Serenity.StringEditor;
        Cpf: Serenity.MaskedEditor;
        Cnes: Serenity.StringEditor;
        TipoProfissionalId: Serenity.LookupEditor;
        ConselhoProfissionalId: Serenity.LookupEditor;
        NumeroConselho: Serenity.StringEditor;
        UfConselhoProfissional: Serenity.StringEditor;
        Cbosid: Serenity.LookupEditor;
        ProntuarioSigiloso: Serenity.BooleanEditor;
        Observacao: Serenity.TextAreaEditor;
        PessoaJuridica: Serenity.BooleanEditor;
        Cnpj: Serenity.MaskedEditor;
        DataInicioContrato: Serenity.DateTimeEditor;
        DataFimContrato: Serenity.DateTimeEditor;
        MotivoEncerramentoContrato: Serenity.TextAreaEditor;
        ContatosList: ContatosEditor;
        EnderecosList: EnderecosEditor;
    }

    [['IdAtivo', () => Serenity.BooleanEditor], ['DataInicio', () => Serenity.DateTimeEditor], ['DataFim', () => Serenity.DateTimeEditor], ['MotivoEncerramento', () => Serenity.TextAreaEditor], ['Profissional', () => Serenity.StringEditor], ['Pai', () => Serenity.StringEditor], ['Mae', () => Serenity.StringEditor], ['SexoId', () => Serenity.LookupEditor], ['DataNascimento', () => Serenity.DateTimeEditor], ['EstadoCivilId', () => Serenity.LookupEditor], ['CarteiraIdentidade', () => Serenity.StringEditor], ['Cpf', () => Serenity.MaskedEditor], ['Cnes', () => Serenity.StringEditor], ['TipoProfissionalId', () => Serenity.LookupEditor], ['ConselhoProfissionalId', () => Serenity.LookupEditor], ['NumeroConselho', () => Serenity.StringEditor], ['UfConselhoProfissional', () => Serenity.StringEditor], ['Cbosid', () => Serenity.LookupEditor], ['ProntuarioSigiloso', () => Serenity.BooleanEditor], ['Observacao', () => Serenity.TextAreaEditor], ['PessoaJuridica', () => Serenity.BooleanEditor], ['Cnpj', () => Serenity.MaskedEditor], ['DataInicioContrato', () => Serenity.DateTimeEditor], ['DataFimContrato', () => Serenity.DateTimeEditor], ['MotivoEncerramentoContrato', () => Serenity.TextAreaEditor], ['ContatosList', () => ContatosEditor], ['EnderecosList', () => EnderecosEditor]].forEach(x => Object.defineProperty(ProfissionaisForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

