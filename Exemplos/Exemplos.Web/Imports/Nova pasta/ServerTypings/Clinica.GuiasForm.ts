namespace Exemplos.Clinica {
    export class GuiasForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Guias';

    }

    export interface GuiasForm {
        TipoGuiaId: Serenity.LookupEditor;
        TipoConsultaId: Serenity.LookupEditor;
        Guia: Serenity.StringEditor;
        GuiaOperador: Serenity.StringEditor;
        Carteirinha: Serenity.StringEditor;
        NomePaciente: Serenity.TextAreaEditor;
        AutorizacaoId: Serenity.LookupEditor;
        NumeroAutorizacao: Serenity.StringEditor;
        IdAuditada: Serenity.BooleanEditor;
        DataAuditoria: Serenity.DateTimeEditor;
        IdAuditoriaAprovada: Serenity.BooleanEditor;
        ConclusaoAuditoria: Serenity.TextAreaEditor;
        ProfissionalIdSolicitante: Serenity.IntegerEditor;
        ProfissionalIdExecutante: Serenity.IntegerEditor;
    }

    [['TipoGuiaId', () => Serenity.LookupEditor], ['TipoConsultaId', () => Serenity.LookupEditor], ['Guia', () => Serenity.StringEditor], ['GuiaOperador', () => Serenity.StringEditor], ['Carteirinha', () => Serenity.StringEditor], ['NomePaciente', () => Serenity.TextAreaEditor], ['AutorizacaoId', () => Serenity.LookupEditor], ['NumeroAutorizacao', () => Serenity.StringEditor], ['IdAuditada', () => Serenity.BooleanEditor], ['DataAuditoria', () => Serenity.DateTimeEditor], ['IdAuditoriaAprovada', () => Serenity.BooleanEditor], ['ConclusaoAuditoria', () => Serenity.TextAreaEditor], ['ProfissionalIdSolicitante', () => Serenity.IntegerEditor], ['ProfissionalIdExecutante', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(GuiasForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

