namespace Exemplos.Clinica {
    export class FolhasPagamentosProfissionaisItensForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.FolhasPagamentosProfissionaisItens';

    }

    export interface FolhasPagamentosProfissionaisItensForm {
        FolhaPagamentoProfissionalId: Serenity.LookupEditor;
        Banco: Serenity.StringEditor;
        Agencia: Serenity.StringEditor;
        Conta: Serenity.StringEditor;
        FormaPagamento: Serenity.StringEditor;
    }

    [['FolhaPagamentoProfissionalId', () => Serenity.LookupEditor], ['Banco', () => Serenity.StringEditor], ['Agencia', () => Serenity.StringEditor], ['Conta', () => Serenity.StringEditor], ['FormaPagamento', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(FolhasPagamentosProfissionaisItensForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

