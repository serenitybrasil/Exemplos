
namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class ContatosDialog extends Serenity.EntityDialog<ContatosRow, any>
    {
        protected getFormKey() { return ContatosForm.formKey; }
        protected getIdProperty() { return ContatosRow.idProperty; }
        protected getLocalTextPrefix() { return ContatosRow.localTextPrefix; }
        protected getNameProperty() { return ContatosRow.nameProperty; }
        protected getService() { return ContatosService.baseUrl; }

        protected form = new ContatosForm(this.idPrefix);


        dialogOpen() {
            super.dialogOpen();
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

    }
}
