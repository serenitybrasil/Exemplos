
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PacientesConveniosEditorDialog extends Common.GridEditorDialog<PacientesConveniosRow> {
        protected getFormKey() { return PacientesConveniosForm.formKey; }
                protected getLocalTextPrefix() { return PacientesConveniosRow.localTextPrefix; }
        protected getNameProperty() { return PacientesConveniosRow.nameProperty; }
        protected form = new PacientesConveniosForm(this.idPrefix);
    }
}