namespace Exemplos.Clinica {
    export class PacientesForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Pacientes';

    }

    export interface PacientesForm {
        PacienteIdControlMedic: Serenity.IntegerEditor;
        PacienteIdGestorMedico: Serenity.IntegerEditor;
        DataCadastro: Serenity.DateTimeEditor;
        DataUltimaAtualizacao: Serenity.DateTimeEditor;
        Matricula: Serenity.StringEditor;
        StatusId: Serenity.LookupEditor;
        Paciente: Serenity.StringEditor;
        SexoId: Serenity.LookupEditor;
        DataNascimento: Serenity.DateEditor;
        Especial: Serenity.BooleanEditor;
        Pai: Serenity.StringEditor;
        Mae: Serenity.StringEditor;
        Responsavel: Serenity.StringEditor;
        CNS: Serenity.StringEditor;
        CarteiraIdentidade: Serenity.StringEditor;
        CPF: Serenity.MaskedEditor;
        Observacao: Serenity.TextAreaEditor;
        DisturbiosAssociados: Serenity.TextAreaEditor;
        Foto: Serenity.ImageUploadEditor;
        DataFoto: Serenity.DateEditor;
        ContatosList: ContatosEditor;
        EnderecosList: EnderecosEditor;
    }

    [['PacienteIdControlMedic', () => Serenity.IntegerEditor], ['PacienteIdGestorMedico', () => Serenity.IntegerEditor], ['DataCadastro', () => Serenity.DateTimeEditor], ['DataUltimaAtualizacao', () => Serenity.DateTimeEditor], ['Matricula', () => Serenity.StringEditor], ['StatusId', () => Serenity.LookupEditor], ['Paciente', () => Serenity.StringEditor], ['SexoId', () => Serenity.LookupEditor], ['DataNascimento', () => Serenity.DateEditor], ['Especial', () => Serenity.BooleanEditor], ['Pai', () => Serenity.StringEditor], ['Mae', () => Serenity.StringEditor], ['Responsavel', () => Serenity.StringEditor], ['CNS', () => Serenity.StringEditor], ['CarteiraIdentidade', () => Serenity.StringEditor], ['CPF', () => Serenity.MaskedEditor], ['Observacao', () => Serenity.TextAreaEditor], ['DisturbiosAssociados', () => Serenity.TextAreaEditor], ['Foto', () => Serenity.ImageUploadEditor], ['DataFoto', () => Serenity.DateEditor], ['ContatosList', () => ContatosEditor], ['EnderecosList', () => EnderecosEditor]].forEach(x => Object.defineProperty(PacientesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

