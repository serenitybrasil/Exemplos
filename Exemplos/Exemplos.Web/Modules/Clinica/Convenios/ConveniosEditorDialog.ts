
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ConveniosEditorDialog extends Common.GridEditorDialog<ConveniosRow> {
        protected getFormKey() { return ConveniosForm.formKey; }
                protected getLocalTextPrefix() { return ConveniosRow.localTextPrefix; }
        protected getNameProperty() { return ConveniosRow.nameProperty; }
        protected form = new ConveniosForm(this.idPrefix);
    }
}