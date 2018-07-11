
namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class EstadosCivisDialog extends Serenity.EntityDialog<EstadosCivisRow, any>
    {
        protected getFormKey() { return EstadosCivisForm.formKey; }
        protected getIdProperty() { return EstadosCivisRow.idProperty; }
        protected getLocalTextPrefix() { return EstadosCivisRow.localTextPrefix; }
        protected getNameProperty() { return EstadosCivisRow.nameProperty; }
        protected getService() { return EstadosCivisService.baseUrl; }

        protected form = new EstadosCivisForm(this.idPrefix);


        dialogOpen() {
            super.dialogOpen();
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

    }
}
