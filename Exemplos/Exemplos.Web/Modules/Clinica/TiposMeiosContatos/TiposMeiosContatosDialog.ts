
namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class TiposMeiosContatosDialog extends Serenity.EntityDialog<TiposMeiosContatosRow, any>
    {
        protected getFormKey() { return TiposMeiosContatosForm.formKey; }
        protected getIdProperty() { return TiposMeiosContatosRow.idProperty; }
        protected getLocalTextPrefix() { return TiposMeiosContatosRow.localTextPrefix; }
        protected getNameProperty() { return TiposMeiosContatosRow.nameProperty; }
        protected getService() { return TiposMeiosContatosService.baseUrl; }

        protected form = new TiposMeiosContatosForm(this.idPrefix);


        dialogOpen() {
            super.dialogOpen();
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

    }
}
