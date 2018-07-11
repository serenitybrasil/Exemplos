namespace Exemplos.Clinica {
    export class PacientesConveniosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.PacientesConvenios';

    }

    export interface PacientesConveniosForm {
        PacienteId: Serenity.LookupEditor;
        ConvenioId: Serenity.LookupEditor;
        SubConvenioId: Serenity.IntegerEditor;
        ConvenioPrincipal: Serenity.BooleanEditor;
        DescricaoPlano: Serenity.StringEditor;
        Carteirinha: Serenity.StringEditor;
        DataValidadeCarteirinha: Serenity.DateEditor;
        NomePacienteConvenio: Serenity.StringEditor;
        Inativo: Serenity.BooleanEditor;
        DataInativo: Serenity.DateTimeEditor;
        ImagemCarteirinha: Serenity.MultipleImageUploadEditor;
        DataCadastro: Serenity.DateTimeEditor;
        DataUltimaAtualizacao: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
    }

    [['PacienteId', () => Serenity.LookupEditor], ['ConvenioId', () => Serenity.LookupEditor], ['SubConvenioId', () => Serenity.IntegerEditor], ['ConvenioPrincipal', () => Serenity.BooleanEditor], ['DescricaoPlano', () => Serenity.StringEditor], ['Carteirinha', () => Serenity.StringEditor], ['DataValidadeCarteirinha', () => Serenity.DateEditor], ['NomePacienteConvenio', () => Serenity.StringEditor], ['Inativo', () => Serenity.BooleanEditor], ['DataInativo', () => Serenity.DateTimeEditor], ['ImagemCarteirinha', () => Serenity.MultipleImageUploadEditor], ['DataCadastro', () => Serenity.DateTimeEditor], ['DataUltimaAtualizacao', () => Serenity.DateTimeEditor], ['Observacao', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(PacientesConveniosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

