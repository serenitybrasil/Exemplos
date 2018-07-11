
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TiposContatosEditorDialog extends Common.GridEditorDialog<TiposContatosRow> {
        protected getFormKey() { return TiposContatosForm.formKey; }
                protected getLocalTextPrefix() { return TiposContatosRow.localTextPrefix; }
        protected getNameProperty() { return TiposContatosRow.nameProperty; }
        protected form = new TiposContatosForm(this.idPrefix);
    }
}