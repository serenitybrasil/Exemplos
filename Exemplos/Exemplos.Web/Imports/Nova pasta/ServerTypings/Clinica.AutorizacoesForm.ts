namespace Exemplos.Clinica {
    export class AutorizacoesForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Autorizacoes';

    }

    export interface AutorizacoesForm {
        NumeroAutorizacao: Serenity.StringEditor;
        ConvenioId: Serenity.LookupEditor;
        PacienteId: Serenity.LookupEditor;
        Arquivos: Serenity.TextAreaEditor;
        DataSolicitacao: Serenity.DateTimeEditor;
        DataAutorizacao: Serenity.DateTimeEditor;
        DataValidade: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
        IdAuditoriaAprovada: Serenity.BooleanEditor;
    }

    [['NumeroAutorizacao', () => Serenity.StringEditor], ['ConvenioId', () => Serenity.LookupEditor], ['PacienteId', () => Serenity.LookupEditor], ['Arquivos', () => Serenity.TextAreaEditor], ['DataSolicitacao', () => Serenity.DateTimeEditor], ['DataAutorizacao', () => Serenity.DateTimeEditor], ['DataValidade', () => Serenity.DateTimeEditor], ['Observacao', () => Serenity.TextAreaEditor], ['IdAuditoriaAprovada', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(AutorizacoesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

