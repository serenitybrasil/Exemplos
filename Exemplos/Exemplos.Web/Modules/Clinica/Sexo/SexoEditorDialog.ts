
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SexoEditorDialog extends Common.GridEditorDialog<SexoRow> {
        protected getFormKey() { return SexoForm.formKey; }
                protected getLocalTextPrefix() { return SexoRow.localTextPrefix; }
        protected getNameProperty() { return SexoRow.nameProperty; }
        protected form = new SexoForm(this.idPrefix);
    }
}