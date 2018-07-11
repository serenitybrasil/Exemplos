namespace Exemplos.Clinica {
    export class DemonstrativosItensForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.DemonstrativosItens';

    }

    export interface DemonstrativosItensForm {
        DemonstrativoId: Serenity.LookupEditor;
        StatusDemonstrativoId: Serenity.LookupEditor;
        NumeroGuiaPrestador: Serenity.StringEditor;
        NumeroGuiaOperadora: Serenity.StringEditor;
        Registro: Serenity.StringEditor;
        Senha: Serenity.StringEditor;
        Matricula: Serenity.StringEditor;
        Beneficiario: Serenity.StringEditor;
        DataSessao: Serenity.DateTimeEditor;
        Tabela: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Procedimento: Serenity.TextAreaEditor;
        Quantidade: Serenity.IntegerEditor;
        ValorInformado: Serenity.DecimalEditor;
        ValorLiberado: Serenity.DecimalEditor;
        ValorGlosado: Serenity.DecimalEditor;
        CodigoGlosa: Serenity.StringEditor;
        MotivoGlosa: Serenity.TextAreaEditor;
        SessaoId: Serenity.IntegerEditor;
    }

    [['DemonstrativoId', () => Serenity.LookupEditor], ['StatusDemonstrativoId', () => Serenity.LookupEditor], ['NumeroGuiaPrestador', () => Serenity.StringEditor], ['NumeroGuiaOperadora', () => Serenity.StringEditor], ['Registro', () => Serenity.StringEditor], ['Senha', () => Serenity.StringEditor], ['Matricula', () => Serenity.StringEditor], ['Beneficiario', () => Serenity.StringEditor], ['DataSessao', () => Serenity.DateTimeEditor], ['Tabela', () => Serenity.StringEditor], ['Codigo', () => Serenity.StringEditor], ['Procedimento', () => Serenity.TextAreaEditor], ['Quantidade', () => Serenity.IntegerEditor], ['ValorInformado', () => Serenity.DecimalEditor], ['ValorLiberado', () => Serenity.DecimalEditor], ['ValorGlosado', () => Serenity.DecimalEditor], ['CodigoGlosa', () => Serenity.StringEditor], ['MotivoGlosa', () => Serenity.TextAreaEditor], ['SessaoId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(DemonstrativosItensForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

