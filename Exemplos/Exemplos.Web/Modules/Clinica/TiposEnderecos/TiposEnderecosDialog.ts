
namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class TiposEnderecosDialog extends Serenity.EntityDialog<TiposEnderecosRow, any>
    {
        protected getFormKey() { return TiposEnderecosForm.formKey; }
        protected getIdProperty() { return TiposEnderecosRow.idProperty; }
        protected getLocalTextPrefix() { return TiposEnderecosRow.localTextPrefix; }
        protected getNameProperty() { return TiposEnderecosRow.nameProperty; }
        protected getService() { return TiposEnderecosService.baseUrl; }

        protected form = new TiposEnderecosForm(this.idPrefix);


        dialogOpen() {
            super.dialogOpen();
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

    }
}
