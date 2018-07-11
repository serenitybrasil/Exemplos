
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FornecedoresEditorDialog extends Common.GridEditorDialog<FornecedoresRow> {
        protected getFormKey() { return FornecedoresForm.formKey; }
                protected getLocalTextPrefix() { return FornecedoresRow.localTextPrefix; }
        protected getNameProperty() { return FornecedoresRow.nameProperty; }
        protected form = new FornecedoresForm(this.idPrefix);
    }
}