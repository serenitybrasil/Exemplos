namespace Exemplos.Clinica {
    export class ConveniosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Convenios';

    }

    export interface ConveniosForm {
        Cnpj: Serenity.MaskedEditor;
        RazaoSocial: Serenity.StringEditor;
        NomeFantasia: Serenity.StringEditor;
        CodigoAns: Serenity.StringEditor;
        CadastroConvenio: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
        InscricaoMunicipal: Serenity.StringEditor;
        InscricaoEstadual: Serenity.StringEditor;
        Site: Serenity.StringEditor;
        DataInicio: Serenity.DateTimeEditor;
        Inativo: Serenity.BooleanEditor;
        DataFim: Serenity.DateTimeEditor;
        MotivoCancelamento: Serenity.TextAreaEditor;
        Observacao: Serenity.TextAreaEditor;
        VersaoTiss: Serenity.StringEditor;
        WebService: Serenity.StringEditor;
        SadtSolContratadoId: Serenity.StringEditor;
        SadtExecutanteId: Serenity.StringEditor;
        SadtProfissionalexecutante: Serenity.StringEditor;
        SadtMembroEquipe: Serenity.StringEditor;
        IdOrigem: Serenity.StringEditor;
        IdDestino: Serenity.StringEditor;
        OrigemIdPrestador: Serenity.StringEditor;
        DestinoIdPrestador: Serenity.StringEditor;
        IdLogo: Serenity.IntegerEditor;
        GeraTiss: Serenity.BooleanEditor;
        DataCadastro: Serenity.DateTimeEditor;
        DataUltimaAtualizacao: Serenity.DateTimeEditor;
        Latitude: Serenity.TextAreaEditor;
        Longitude: Serenity.TextAreaEditor;
        EmailNotaFiscal: Serenity.EmailEditor;
        EmailContato: Serenity.EmailEditor;
        EmailFaturamento: Serenity.EmailEditor;
        EmailGlosa: Serenity.EmailEditor;
        ContatosList: ContatosEditor;
        EnderecosList: EnderecosEditor;
    }

    [['Cnpj', () => Serenity.MaskedEditor], ['RazaoSocial', () => Serenity.StringEditor], ['NomeFantasia', () => Serenity.StringEditor], ['CodigoAns', () => Serenity.StringEditor], ['CadastroConvenio', () => Serenity.StringEditor], ['Logo', () => Serenity.StringEditor], ['InscricaoMunicipal', () => Serenity.StringEditor], ['InscricaoEstadual', () => Serenity.StringEditor], ['Site', () => Serenity.StringEditor], ['DataInicio', () => Serenity.DateTimeEditor], ['Inativo', () => Serenity.BooleanEditor], ['DataFim', () => Serenity.DateTimeEditor], ['MotivoCancelamento', () => Serenity.TextAreaEditor], ['Observacao', () => Serenity.TextAreaEditor], ['VersaoTiss', () => Serenity.StringEditor], ['WebService', () => Serenity.StringEditor], ['SadtSolContratadoId', () => Serenity.StringEditor], ['SadtExecutanteId', () => Serenity.StringEditor], ['SadtProfissionalexecutante', () => Serenity.StringEditor], ['SadtMembroEquipe', () => Serenity.StringEditor], ['IdOrigem', () => Serenity.StringEditor], ['IdDestino', () => Serenity.StringEditor], ['OrigemIdPrestador', () => Serenity.StringEditor], ['DestinoIdPrestador', () => Serenity.StringEditor], ['IdLogo', () => Serenity.IntegerEditor], ['GeraTiss', () => Serenity.BooleanEditor], ['DataCadastro', () => Serenity.DateTimeEditor], ['DataUltimaAtualizacao', () => Serenity.DateTimeEditor], ['Latitude', () => Serenity.TextAreaEditor], ['Longitude', () => Serenity.TextAreaEditor], ['EmailNotaFiscal', () => Serenity.EmailEditor], ['EmailContato', () => Serenity.EmailEditor], ['EmailFaturamento', () => Serenity.EmailEditor], ['EmailGlosa', () => Serenity.EmailEditor], ['ContatosList', () => ContatosEditor], ['EnderecosList', () => EnderecosEditor]].forEach(x => Object.defineProperty(ConveniosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

