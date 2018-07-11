
namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class FornecedoresDialog extends Serenity.EntityDialog<FornecedoresRow, any>
    {
        protected getFormKey() { return FornecedoresForm.formKey; }
        protected getIdProperty() { return FornecedoresRow.idProperty; }
        protected getLocalTextPrefix() { return FornecedoresRow.localTextPrefix; }
        protected getNameProperty() { return FornecedoresRow.nameProperty; }
        protected getService() { return FornecedoresService.baseUrl; }

        protected form = new FornecedoresForm(this.idPrefix);


        dialogOpen() {
            super.dialogOpen();
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

        afterLoadEntity() {
        super.afterLoadEntity();

        // SET UPDATE DATE IN EDIT MODE
        if (this.isEditMode()) {
        

//if (this.form.Inativo.value == true)
//{
//    this.form.ALGUMCAMPO.getGridField().toggle(true);
//}
        }

        }
                
                    constructor() {
                    super();

//// *** INICIO - CHECKBOX CHANGE - Inativo ***
//this.form.Inativo.change(e => {
//
//    if (this.form.Inativo.value == true) {
//
//        var isChecked = false;
//
//        Q.confirm("Confirma a seleção ?", 
//            () => {
//                isChecked = true;
//
//                //var texto = this.form.ALGUMCAMPO.getGridField().find('.caption').prop('outerHTML').split('Nome').join('TEXTO NOVO');
//                //this.form.ALGUMCAMPO.getGridField().find('.caption').prop('outerHTML', texto);
//
//                this.form.Inativo.value = isChecked;
//                this.form.ALGUMCAMPO.getGridField().toggle(true);
//
//                this.form.ALGUMCAMPO.value = null;
//
//            }
//        );
//
//        this.form.Inativo.value = isChecked;
//
//      }
//      else {
//
//          var isChecked = true;
//
//          Q.confirm("Confirma a exclusão ?\nOs dados existentes serão descartados.", 
//              () => {
//              isChecked = false;
//
//                  this.form.Inativo.value = isChecked;
//                  this.form.ALGUMCAMPO.getGridField().toggle(false);
//
//            }
//        );
//
//        this.form.Inativo.value = isChecked;
//
//    }
//});
//// *** FIM - CHECKBOX CHANGE - NotaFiscalTerceiro ***
//


                        }
                        
                
    }
}
