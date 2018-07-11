
namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class SexoDialog extends Serenity.EntityDialog<SexoRow, any>
    {
        protected getFormKey() { return SexoForm.formKey; }
        protected getIdProperty() { return SexoRow.idProperty; }
        protected getLocalTextPrefix() { return SexoRow.localTextPrefix; }
        protected getNameProperty() { return SexoRow.nameProperty; }
        protected getService() { return SexoService.baseUrl; }

        protected form = new SexoForm(this.idPrefix);


        dialogOpen() {
            super.dialogOpen();
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

    }
}
