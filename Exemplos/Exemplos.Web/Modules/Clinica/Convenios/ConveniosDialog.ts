
namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class ConveniosDialog extends Serenity.EntityDialog<ConveniosRow, any>
    {
        protected getFormKey() { return ConveniosForm.formKey; }
        protected getIdProperty() { return ConveniosRow.idProperty; }
        protected getLocalTextPrefix() { return ConveniosRow.localTextPrefix; }
        protected getNameProperty() { return ConveniosRow.nameProperty; }
        protected getService() { return ConveniosService.baseUrl; }

        protected form = new ConveniosForm(this.idPrefix);


        private loadedState: string;


        dialogOpen() {
            super.dialogOpen();
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

        afterLoadEntity() {
            super.afterLoadEntity();

            // SET UPDATE DATE IN EDIT MODE
            if (this.isEditMode()) {
                this.form.DataUltimaAtualizacao.valueAsDate = new Date();

                if (this.form.Inativo.value == true) {
                    this.form.DataFim.getGridField().toggle(true);
                    this.form.MotivoCancelamento.getGridField().toggle(true);
                }
            }

        }

        constructor() {
            super();

            // *** INICIO - CHECKBOX CHANGE - Inativo ***
            this.form.Inativo.change(e => {

                if (this.form.Inativo.value == true) {

                    var isChecked = false;

                    Q.confirm("Confirma a inativação desse Convênio ?",
                        () => {
                            isChecked = true;

                            //var texto = this.form.ALGUMCAMPO.getGridField().find('.caption').prop('outerHTML').split('Nome').join('TEXTO NOVO');
                            //this.form.ALGUMCAMPO.getGridField().find('.caption').prop('outerHTML', texto);

                            this.form.Inativo.value = isChecked;
                            this.form.DataFim.getGridField().toggle(true);
                            this.form.MotivoCancelamento.getGridField().toggle(true);

                            this.form.DataFim.valueAsDate = new Date();
                            this.form.MotivoCancelamento.value = null;

                        }
                    );

                    this.form.Inativo.value = isChecked;

                }
                else {

                    var isChecked = true;

                    Q.confirm("Confirma a REativação desse convênio ?\nOs dados existentes serão descartados.",
                        () => {
                            isChecked = false;

                            if (this.isEditMode) {
                                var breakline = "";
                                if (this.form.Observacao.value != "")
                                    breakline = "\r\n\r\n";
                                this.form.Observacao.value += breakline +
                                    "CONVÊNIO CANCELADO EM: " + (Q.formatDate(this.form.DataFim.valueAsDate, "dd-MM-yyyy HH:mm")), +
                                    "\r\nCONVÊNIO REATIVADO EM: " + (Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"));
                            }

                            this.form.Inativo.value = isChecked;
                            this.form.DataFim.getGridField().toggle(false);
                            this.form.MotivoCancelamento.getGridField().toggle(false);

                        });

                    this.form.Inativo.value = isChecked;

                }
            });
            // *** FIM - CHECKBOX CHANGE - NotaFiscalTerceiro ***



            // *** DIALOG PARA CONFIRMAR SE VAI SALVAR OU NÃO ***
            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        getSaveState() {
            try { return $.toJSON(this.getSaveEntity()); }
            catch (e) { return null; }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }
    }
}
