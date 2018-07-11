namespace Exemplos.Clinica {
    export class SubConveniosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.SubConvenios';

    }

    export interface SubConveniosForm {
        ConvenioId: Serenity.LookupEditor;
        Descricao: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        DataInicio: Serenity.DateTimeEditor;
        Ativo: Serenity.BooleanEditor;
        DataFim: Serenity.DateTimeEditor;
        Participativo: Serenity.BooleanEditor;
        PorcentagemParticipativo: Serenity.DecimalEditor;
        AutorizacaoPrevia: Serenity.BooleanEditor;
    }

    [['ConvenioId', () => Serenity.LookupEditor], ['Descricao', () => Serenity.StringEditor], ['Nome', () => Serenity.StringEditor], ['DataInicio', () => Serenity.DateTimeEditor], ['Ativo', () => Serenity.BooleanEditor], ['DataFim', () => Serenity.DateTimeEditor], ['Participativo', () => Serenity.BooleanEditor], ['PorcentagemParticipativo', () => Serenity.DecimalEditor], ['AutorizacaoPrevia', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(SubConveniosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

