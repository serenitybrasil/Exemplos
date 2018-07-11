
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TiposMeiosContatosEditorDialog extends Common.GridEditorDialog<TiposMeiosContatosRow> {
        protected getFormKey() { return TiposMeiosContatosForm.formKey; }
                protected getLocalTextPrefix() { return TiposMeiosContatosRow.localTextPrefix; }
        protected getNameProperty() { return TiposMeiosContatosRow.nameProperty; }
        protected form = new TiposMeiosContatosForm(this.idPrefix);
    }
}