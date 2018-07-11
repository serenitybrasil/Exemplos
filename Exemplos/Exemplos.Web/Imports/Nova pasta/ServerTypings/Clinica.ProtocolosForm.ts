namespace Exemplos.Clinica {
    export class ProtocolosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Protocolos';

    }

    export interface ProtocolosForm {
        Protocolo: Serenity.TextAreaEditor;
        TipoProtocoloId: Serenity.LookupEditor;
        ConvenioId: Serenity.IntegerEditor;
        Responsável: Serenity.StringEditor;
        Assunto: Serenity.TextAreaEditor;
        DataEnvio: Serenity.DateTimeEditor;
        DataRetorno: Serenity.DateTimeEditor;
        Resolvido: Serenity.BooleanEditor;
        DataResolvido: Serenity.DateTimeEditor;
        DecisaoTomada: Serenity.TextAreaEditor;
    }

    [['Protocolo', () => Serenity.TextAreaEditor], ['TipoProtocoloId', () => Serenity.LookupEditor], ['ConvenioId', () => Serenity.IntegerEditor], ['Responsável', () => Serenity.StringEditor], ['Assunto', () => Serenity.TextAreaEditor], ['DataEnvio', () => Serenity.DateTimeEditor], ['DataRetorno', () => Serenity.DateTimeEditor], ['Resolvido', () => Serenity.BooleanEditor], ['DataResolvido', () => Serenity.DateTimeEditor], ['DecisaoTomada', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(ProtocolosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

