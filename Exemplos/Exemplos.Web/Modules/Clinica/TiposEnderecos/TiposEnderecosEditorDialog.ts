
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TiposEnderecosEditorDialog extends Common.GridEditorDialog<TiposEnderecosRow> {
        protected getFormKey() { return TiposEnderecosForm.formKey; }
                protected getLocalTextPrefix() { return TiposEnderecosRow.localTextPrefix; }
        protected getNameProperty() { return TiposEnderecosRow.nameProperty; }
        protected form = new TiposEnderecosForm(this.idPrefix);
    }
}