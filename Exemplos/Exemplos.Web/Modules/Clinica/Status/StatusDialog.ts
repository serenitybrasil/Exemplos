
namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class StatusDialog extends Serenity.EntityDialog<StatusRow, any>
    {
        protected getFormKey() { return StatusForm.formKey; }
        protected getIdProperty() { return StatusRow.idProperty; }
        protected getLocalTextPrefix() { return StatusRow.localTextPrefix; }
        protected getNameProperty() { return StatusRow.nameProperty; }
        protected getService() { return StatusService.baseUrl; }

        protected form = new StatusForm(this.idPrefix);


        dialogOpen() {
            super.dialogOpen();
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

    }
}
