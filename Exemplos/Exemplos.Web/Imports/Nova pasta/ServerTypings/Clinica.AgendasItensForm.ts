namespace Exemplos.Clinica {
    export class AgendasItensForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.AgendasItens';

    }

    export interface AgendasItensForm {
        AgendaId: Serenity.LookupEditor;
        ConvenioId: Serenity.IntegerEditor;
        ProcedimentoId: Serenity.IntegerEditor;
        ValorId: Serenity.IntegerEditor;
        Desconto: Serenity.DecimalEditor;
        ValorPraticado: Serenity.DecimalEditor;
        Quantidade: Serenity.IntegerEditor;
        GuiaId: Serenity.IntegerEditor;
        Faturado: Serenity.BooleanEditor;
    }

    [['AgendaId', () => Serenity.LookupEditor], ['ConvenioId', () => Serenity.IntegerEditor], ['ProcedimentoId', () => Serenity.IntegerEditor], ['ValorId', () => Serenity.IntegerEditor], ['Desconto', () => Serenity.DecimalEditor], ['ValorPraticado', () => Serenity.DecimalEditor], ['Quantidade', () => Serenity.IntegerEditor], ['GuiaId', () => Serenity.IntegerEditor], ['Faturado', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(AgendasItensForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

