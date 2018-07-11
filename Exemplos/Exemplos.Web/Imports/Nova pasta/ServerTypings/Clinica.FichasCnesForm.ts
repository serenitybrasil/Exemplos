namespace Exemplos.Clinica {
    export class FichasCnesForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.FichasCnes';

    }

    export interface FichasCnesForm {
        ProfissionalId: Serenity.LookupEditor;
        TipoFichaCnes: Serenity.LookupEditor;
        DataCriacao: Serenity.DateTimeEditor;
        DataHoraEnvio: Serenity.DateTimeEditor;
        ProtocoloRecebimento: Serenity.StringEditor;
        ProfissionalAssinou: Serenity.BooleanEditor;
        ArquivoFichaCnes: Serenity.TextAreaEditor;
    }

    [['ProfissionalId', () => Serenity.LookupEditor], ['TipoFichaCnes', () => Serenity.LookupEditor], ['DataCriacao', () => Serenity.DateTimeEditor], ['DataHoraEnvio', () => Serenity.DateTimeEditor], ['ProtocoloRecebimento', () => Serenity.StringEditor], ['ProfissionalAssinou', () => Serenity.BooleanEditor], ['ArquivoFichaCnes', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(FichasCnesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

