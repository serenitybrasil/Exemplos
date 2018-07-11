namespace Exemplos.Clinica {
    export class ProtocolosDetalhadosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.ProtocolosDetalhados';

    }

    export interface ProtocolosDetalhadosForm {
        ProtocoloId: Serenity.LookupEditor;
        ItemDescricao: Serenity.TextAreaEditor;
        Arquivos: Serenity.TextAreaEditor;
        Observacao: Serenity.TextAreaEditor;
    }

    [['ProtocoloId', () => Serenity.LookupEditor], ['ItemDescricao', () => Serenity.TextAreaEditor], ['Arquivos', () => Serenity.TextAreaEditor], ['Observacao', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(ProtocolosDetalhadosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

