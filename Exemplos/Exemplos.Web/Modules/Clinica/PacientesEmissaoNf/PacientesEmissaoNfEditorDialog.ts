
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PacientesEmissaoNfEditorDialog extends Common.GridEditorDialog<PacientesEmissaoNfRow> {
        protected getFormKey() { return PacientesEmissaoNfForm.formKey; }
                protected getLocalTextPrefix() { return PacientesEmissaoNfRow.localTextPrefix; }
        protected getNameProperty() { return PacientesEmissaoNfRow.nameProperty; }
        protected form = new PacientesEmissaoNfForm(this.idPrefix);
    }
}