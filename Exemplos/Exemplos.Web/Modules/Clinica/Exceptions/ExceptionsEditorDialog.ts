
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ExceptionsEditorDialog extends Common.GridEditorDialog<ExceptionsRow> {
        protected getFormKey() { return ExceptionsForm.formKey; }
                protected getLocalTextPrefix() { return ExceptionsRow.localTextPrefix; }
        protected getNameProperty() { return ExceptionsRow.nameProperty; }
        protected form = new ExceptionsForm(this.idPrefix);
    }
}