namespace Exemplos.Clinica {
    export class SessoesForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Sessoes';

    }

    export interface SessoesForm {
        IdPrimeiraSessao: Serenity.BooleanEditor;
        OrdemSessao: Serenity.IntegerEditor;
        GuiaId: Serenity.IntegerEditor;
        AgendaItemId: Serenity.LookupEditor;
        LoteId: Serenity.LookupEditor;
        StatusSessaoId: Serenity.LookupEditor;
        ProfissionalIdExecutante: Serenity.IntegerEditor;
        ValorId: Serenity.LookupEditor;
        TipoItemId: Serenity.IntegerEditor;
        TipoTabelaId: Serenity.IntegerEditor;
        ProcedimentoId: Serenity.IntegerEditor;
        ConvenioId: Serenity.IntegerEditor;
        CodigoProcedimento: Serenity.StringEditor;
        Procedimento: Serenity.TextAreaEditor;
        ValorSessao: Serenity.DecimalEditor;
        QuantidadeSessao: Serenity.IntegerEditor;
        ReducaoAcrescimo: Serenity.DecimalEditor;
        DataSessao: Serenity.DateTimeEditor;
        HoraInicioSessao: Serenity.StringEditor;
        HoraFimSessao: Serenity.StringEditor;
        ValorPago: Serenity.DecimalEditor;
        DataPago: Serenity.DateTimeEditor;
        ValorGlosado: Serenity.DecimalEditor;
        CodigoGlosa: Serenity.StringEditor;
        MotivoGlosa: Serenity.TextAreaEditor;
        StatusGlosaId: Serenity.IntegerEditor;
        ProtocoloRecurso: Serenity.StringEditor;
        DataRecurso: Serenity.DateTimeEditor;
        Recurso: Serenity.TextAreaEditor;
        DataRespostaRecurso: Serenity.DateTimeEditor;
        SituacaoRespostaRecurso: Serenity.StringEditor;
        RespostaRecurso: Serenity.TextAreaEditor;
        ValorRecursoPago: Serenity.DecimalEditor;
        ProtocoloUltimoRecurso: Serenity.StringEditor;
        DataUltimoRecurso: Serenity.DateTimeEditor;
        UltimoRecurso: Serenity.TextAreaEditor;
        DataRespostaUltimoRecurso: Serenity.DateTimeEditor;
        SituacaoRespostaUltimoRecurso: Serenity.StringEditor;
        RespostaUltimoRecurso: Serenity.TextAreaEditor;
        ValorUltimoRecursoPago: Serenity.DecimalEditor;
        QuantidadeRecursos: Serenity.IntegerEditor;
        Observacoes: Serenity.TextAreaEditor;
        SequenciaItens: Serenity.IntegerEditor;
        Sequencia: Serenity.IntegerEditor;
        DemonstrativoItemId: Serenity.IntegerEditor;
        DemonstrativoItemIdGlosa: Serenity.IntegerEditor;
        IdAuditada: Serenity.BooleanEditor;
        DataAuditoria: Serenity.DateTimeEditor;
        IdAuditoriaAprovada: Serenity.BooleanEditor;
        ConclusaoAuditoria: Serenity.TextAreaEditor;
        IdPagoProfissional: Serenity.BooleanEditor;
        ValorFixo: Serenity.BooleanEditor;
        PorcentagemAplicadaProfissional: Serenity.DecimalEditor;
        ValorPagoProfissional: Serenity.DecimalEditor;
        DataPagoProfissional: Serenity.DateTimeEditor;
        FolhaPagamentoProfissionalId: Serenity.LookupEditor;
    }

    [['IdPrimeiraSessao', () => Serenity.BooleanEditor], ['OrdemSessao', () => Serenity.IntegerEditor], ['GuiaId', () => Serenity.IntegerEditor], ['AgendaItemId', () => Serenity.LookupEditor], ['LoteId', () => Serenity.LookupEditor], ['StatusSessaoId', () => Serenity.LookupEditor], ['ProfissionalIdExecutante', () => Serenity.IntegerEditor], ['ValorId', () => Serenity.LookupEditor], ['TipoItemId', () => Serenity.IntegerEditor], ['TipoTabelaId', () => Serenity.IntegerEditor], ['ProcedimentoId', () => Serenity.IntegerEditor], ['ConvenioId', () => Serenity.IntegerEditor], ['CodigoProcedimento', () => Serenity.StringEditor], ['Procedimento', () => Serenity.TextAreaEditor], ['ValorSessao', () => Serenity.DecimalEditor], ['QuantidadeSessao', () => Serenity.IntegerEditor], ['ReducaoAcrescimo', () => Serenity.DecimalEditor], ['DataSessao', () => Serenity.DateTimeEditor], ['HoraInicioSessao', () => Serenity.StringEditor], ['HoraFimSessao', () => Serenity.StringEditor], ['ValorPago', () => Serenity.DecimalEditor], ['DataPago', () => Serenity.DateTimeEditor], ['ValorGlosado', () => Serenity.DecimalEditor], ['CodigoGlosa', () => Serenity.StringEditor], ['MotivoGlosa', () => Serenity.TextAreaEditor], ['StatusGlosaId', () => Serenity.IntegerEditor], ['ProtocoloRecurso', () => Serenity.StringEditor], ['DataRecurso', () => Serenity.DateTimeEditor], ['Recurso', () => Serenity.TextAreaEditor], ['DataRespostaRecurso', () => Serenity.DateTimeEditor], ['SituacaoRespostaRecurso', () => Serenity.StringEditor], ['RespostaRecurso', () => Serenity.TextAreaEditor], ['ValorRecursoPago', () => Serenity.DecimalEditor], ['ProtocoloUltimoRecurso', () => Serenity.StringEditor], ['DataUltimoRecurso', () => Serenity.DateTimeEditor], ['UltimoRecurso', () => Serenity.TextAreaEditor], ['DataRespostaUltimoRecurso', () => Serenity.DateTimeEditor], ['SituacaoRespostaUltimoRecurso', () => Serenity.StringEditor], ['RespostaUltimoRecurso', () => Serenity.TextAreaEditor], ['ValorUltimoRecursoPago', () => Serenity.DecimalEditor], ['QuantidadeRecursos', () => Serenity.IntegerEditor], ['Observacoes', () => Serenity.TextAreaEditor], ['SequenciaItens', () => Serenity.IntegerEditor], ['Sequencia', () => Serenity.IntegerEditor], ['DemonstrativoItemId', () => Serenity.IntegerEditor], ['DemonstrativoItemIdGlosa', () => Serenity.IntegerEditor], ['IdAuditada', () => Serenity.BooleanEditor], ['DataAuditoria', () => Serenity.DateTimeEditor], ['IdAuditoriaAprovada', () => Serenity.BooleanEditor], ['ConclusaoAuditoria', () => Serenity.TextAreaEditor], ['IdPagoProfissional', () => Serenity.BooleanEditor], ['ValorFixo', () => Serenity.BooleanEditor], ['PorcentagemAplicadaProfissional', () => Serenity.DecimalEditor], ['ValorPagoProfissional', () => Serenity.DecimalEditor], ['DataPagoProfissional', () => Serenity.DateTimeEditor], ['FolhaPagamentoProfissionalId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(SessoesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

