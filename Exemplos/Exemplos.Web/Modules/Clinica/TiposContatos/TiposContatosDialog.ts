
namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class TiposContatosDialog extends Serenity.EntityDialog<TiposContatosRow, any>
    {
        protected getFormKey() { return TiposContatosForm.formKey; }
        protected getIdProperty() { return TiposContatosRow.idProperty; }
        protected getLocalTextPrefix() { return TiposContatosRow.localTextPrefix; }
        protected getNameProperty() { return TiposContatosRow.nameProperty; }
        protected getService() { return TiposContatosService.baseUrl; }

        protected form = new TiposContatosForm(this.idPrefix);


        dialogOpen() {
            super.dialogOpen();
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

    }
}
