
namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class PacientesConveniosDialog extends Serenity.EntityDialog<PacientesConveniosRow, any> {
        protected getFormKey() { return PacientesConveniosForm.formKey; }
        protected getIdProperty() { return PacientesConveniosRow.idProperty; }
        protected getLocalTextPrefix() { return PacientesConveniosRow.localTextPrefix; }
        protected getNameProperty() { return PacientesConveniosRow.nameProperty; }
        protected getService() { return PacientesConveniosService.baseUrl; }

        protected form = new PacientesConveniosForm(this.idPrefix);

        dialogOpen() {
            super.dialogOpen();
            //this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

        //protected addButtonClick() {
        //    this.editItem(<Clinica.PacientesConveniosRow>{
        //        ConvenioId: Clinica.ConveniosRow.getLookup().items
        //            .filter(x => x.Inativo === '1'),
        //        ShipVia: Northwind.ShipperRow.getLookup().items
        //            .filter(x => x.CompanyName === 'Speedy Express')[0].ShipperID
        //    });
        //}

        afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {
                this.form.ConvenioId.cascadeField = Clinica.ConveniosRow.Fields.Inativo;
                this.form.ConvenioId.cascadeValue = false;
            }

            //if (this.isEditMode()) {
            //    Q.alert("teste edit constructor");
            //}

        }

        constructor() {
            super();


            this.form.ConvenioId.changeSelect2(e => {
                Q.confirm("Confirma a alteração do Convênio ?",
                    () => {
                        Q.warning("<h4>Verificar os itens abaixo !!!</h4>" +
                            "<ul><li>Carteirinha</li>" +
                                "<li>Data Validade</li>" +
                                "<li>Descrição do Plano</li></ul>", {
                                htmlEncode: false
                            });
                    });
            }
            )


            this.form.Inativo.change(e => {
                if (this.form.Inativo.value == true) {
                    Q.confirm("Confirma a inativação dessa carteirinha ?",
                        () => {
                            this.form.DataInativo.getGridField().toggle(true);
                            this.form.DataInativo.valueAsDate = new Date();
                        });
                }
                else
                    if (this.form.Inativo.value == false) {
                        Q.confirm("Confirma a REativação dessa carteirinha ?",
                            () => {
                                this.form.DataInativo.getGridField().toggle(false);
                                this.form.DataInativo.valueAsDate = null;
                            });
                    }
            });
        }
    }
}