
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EstadosCivisEditorDialog extends Common.GridEditorDialog<EstadosCivisRow> {
        protected getFormKey() { return EstadosCivisForm.formKey; }
                protected getLocalTextPrefix() { return EstadosCivisRow.localTextPrefix; }
        protected getNameProperty() { return EstadosCivisRow.nameProperty; }
        protected form = new EstadosCivisForm(this.idPrefix);
    }
}