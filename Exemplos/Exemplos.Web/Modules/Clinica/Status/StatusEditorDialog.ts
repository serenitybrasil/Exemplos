
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class StatusEditorDialog extends Common.GridEditorDialog<StatusRow> {
        protected getFormKey() { return StatusForm.formKey; }
                protected getLocalTextPrefix() { return StatusRow.localTextPrefix; }
        protected getNameProperty() { return StatusRow.nameProperty; }
        protected form = new StatusForm(this.idPrefix);
    }
}