namespace Exemplos.Clinica {
    export class ExceptionsForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Exceptions';

    }

    export interface ExceptionsForm {
        Guid: Serenity.StringEditor;
        ApplicationName: Serenity.StringEditor;
        MachineName: Serenity.StringEditor;
        CreationDate: Serenity.DateTimeEditor;
        Type: Serenity.StringEditor;
        IsProtected: Serenity.BooleanEditor;
        Host: Serenity.StringEditor;
        Url: Serenity.TextAreaEditor;
        HttpMethod: Serenity.StringEditor;
        IpAddress: Serenity.StringEditor;
        Source: Serenity.StringEditor;
        Message: Serenity.TextAreaEditor;
        Detail: Serenity.StringEditor;
        StatusCode: Serenity.IntegerEditor;
        Sql: Serenity.StringEditor;
        DeletionDate: Serenity.DateTimeEditor;
        FullJson: Serenity.StringEditor;
        ErrorHash: Serenity.IntegerEditor;
        DuplicateCount: Serenity.IntegerEditor;
    }

    [['Guid', () => Serenity.StringEditor], ['ApplicationName', () => Serenity.StringEditor], ['MachineName', () => Serenity.StringEditor], ['CreationDate', () => Serenity.DateTimeEditor], ['Type', () => Serenity.StringEditor], ['IsProtected', () => Serenity.BooleanEditor], ['Host', () => Serenity.StringEditor], ['Url', () => Serenity.TextAreaEditor], ['HttpMethod', () => Serenity.StringEditor], ['IpAddress', () => Serenity.StringEditor], ['Source', () => Serenity.StringEditor], ['Message', () => Serenity.TextAreaEditor], ['Detail', () => Serenity.StringEditor], ['StatusCode', () => Serenity.IntegerEditor], ['Sql', () => Serenity.StringEditor], ['DeletionDate', () => Serenity.DateTimeEditor], ['FullJson', () => Serenity.StringEditor], ['ErrorHash', () => Serenity.IntegerEditor], ['DuplicateCount', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ExceptionsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

