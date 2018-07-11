
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ContatosEditorDialog extends Common.GridEditorDialog<ContatosRow> {
        protected getFormKey() { return ContatosForm.formKey; }
        protected getLocalTextPrefix() { return ContatosRow.localTextPrefix; }
        protected getNameProperty() { return ContatosRow.nameProperty; }
        protected form = new ContatosForm(this.idPrefix);

        protected _myParentForm: string;
        set myParentForm(value: string) {
            if (value != null) {

                //some o campo departamento no Dialog, pois não precisa ele na tela do Paciente.
                if (value == "PACIENTES")
                    this.form.Departamento.getGridField().toggle(false);

                this._myParentForm = value;

            }
        }
        get myParentForm() {
            return this._myParentForm;
        }

        updateTitle() {
            super.updateTitle();
            this.dialogTitle = "Novo Contato";
        }

        constructor() {

            super();
            
            


            //https://github.com/volkanceylan/Serenity/issues/1377
            //colocar aqui a verificação do checkbox escolhido e sua máscara equivalente.
            //    buscar exemplos no samples (acho que city samples)

            this.form.TipoMeioContatoId.changeSelect2(e => {
                var TipoMeioContatoId = this.form.TipoMeioContatoId.value;

                //verifica se escolheu vazio
                //Q.alert(TipoMeioContatoId.toString());
                if (Q.isEmptyOrNull(TipoMeioContatoId.toString())) {
                    this.setMascara({});
                    return;
                }

                // se não escolheu vazio, retorna o Entity do TipoMeioContato completo.
                TiposMeiosContatosService.Retrieve({
                    EntityId: TipoMeioContatoId
                }, response => {
                    this.setMascara(response.Entity);
                });
            });
        }

//  o METODO ABAIXO MOSTRA O CAMPO TIPO E-MAIL EDITOR
//MEXER NO OVERRIDE DO HANDLER SAVE PARA SALVAR O CAMPO NO CONTATO.

//        private setMascara(details: TiposMeiosContatosRow) {

//            // se o tipo meio contato for E-mail ( ou outro tipo que não tenha máscara),
//            // retira a máscara
//            if (Q.isEmptyOrNull(details.Mascara)) {
//                this.form.ConteudoMeioContato.getGridField().toggle(false);
//                this.form.ConteudoMeioContato.value = "";
//                this.form.Email.getGridField().toggle(true);
//                this.form.Email.value = "";
//                //(this.form.ConteudoMeioContato.element as any).unmask();
//            }
//            else
//            {
//                this.form.ConteudoMeioContato.getGridField().toggle(true);
//                this.form.ConteudoMeioContato.value = "";
//                this.form.Email.getGridField().toggle(false);
//                this.form.Email.value = "";

//                (this.form.ConteudoMeioContato.element as any).mask(details.Mascara);
//}


        private setMascara(details: TiposMeiosContatosRow) {

            // se o tipo meio contato for E-mail ( ou outro tipo que não tenha máscara),
            // retira a máscara
            if (Q.isEmptyOrNull(details.Mascara)) 
                (this.form.ConteudoMeioContato.element as any).unmask();
            else 
                (this.form.ConteudoMeioContato.element as any).mask(details.Mascara);

        }


        

    }
}