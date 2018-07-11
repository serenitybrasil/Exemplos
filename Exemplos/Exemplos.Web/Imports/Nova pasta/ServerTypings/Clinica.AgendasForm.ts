namespace Exemplos.Clinica {
    export class AgendasForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Agendas';

    }

    export interface AgendasForm {
        AgendaIdPrincipal: Serenity.LookupEditor;
        EmpresaId: Serenity.IntegerEditor;
        DataHoraCadastro: Serenity.DateTimeEditor;
        DataHoraAgendamento: Serenity.DateTimeEditor;
        EspecialidadeProfisisonalId: Serenity.IntegerEditor;
        ProfissionalId: Serenity.IntegerEditor;
        EspecialidadeId: Serenity.IntegerEditor;
        MedicoIdSolicitante: Serenity.IntegerEditor;
        EscalaId: Serenity.IntegerEditor;
        PacienteId: Serenity.IntegerEditor;
        ConvenioId: Serenity.IntegerEditor;
        ServicoId: Serenity.IntegerEditor;
        DataHoraChegada: Serenity.DateTimeEditor;
        DataHoraAtendimentoInicio: Serenity.DateTimeEditor;
        DataHoraAtendimentoFim: Serenity.DateTimeEditor;
        StatusAgendaId: Serenity.IntegerEditor;
        Faturado: Serenity.BooleanEditor;
        Observacao: Serenity.TextAreaEditor;
        ValorTotal: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        Descontos: Serenity.DecimalEditor;
        PgtoDinheiro: Serenity.DecimalEditor;
        PgtoCheque: Serenity.DecimalEditor;
        PgtoCartao: Serenity.DecimalEditor;
        PgtoFaturar: Serenity.DecimalEditor;
        NumeroNfs: Serenity.IntegerEditor;
        GuiaId: Serenity.LookupEditor;
    }

    [['AgendaIdPrincipal', () => Serenity.LookupEditor], ['EmpresaId', () => Serenity.IntegerEditor], ['DataHoraCadastro', () => Serenity.DateTimeEditor], ['DataHoraAgendamento', () => Serenity.DateTimeEditor], ['EspecialidadeProfisisonalId', () => Serenity.IntegerEditor], ['ProfissionalId', () => Serenity.IntegerEditor], ['EspecialidadeId', () => Serenity.IntegerEditor], ['MedicoIdSolicitante', () => Serenity.IntegerEditor], ['EscalaId', () => Serenity.IntegerEditor], ['PacienteId', () => Serenity.IntegerEditor], ['ConvenioId', () => Serenity.IntegerEditor], ['ServicoId', () => Serenity.IntegerEditor], ['DataHoraChegada', () => Serenity.DateTimeEditor], ['DataHoraAtendimentoInicio', () => Serenity.DateTimeEditor], ['DataHoraAtendimentoFim', () => Serenity.DateTimeEditor], ['StatusAgendaId', () => Serenity.IntegerEditor], ['Faturado', () => Serenity.BooleanEditor], ['Observacao', () => Serenity.TextAreaEditor], ['ValorTotal', () => Serenity.DecimalEditor], ['SubTotal', () => Serenity.DecimalEditor], ['Descontos', () => Serenity.DecimalEditor], ['PgtoDinheiro', () => Serenity.DecimalEditor], ['PgtoCheque', () => Serenity.DecimalEditor], ['PgtoCartao', () => Serenity.DecimalEditor], ['PgtoFaturar', () => Serenity.DecimalEditor], ['NumeroNfs', () => Serenity.IntegerEditor], ['GuiaId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(AgendasForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

