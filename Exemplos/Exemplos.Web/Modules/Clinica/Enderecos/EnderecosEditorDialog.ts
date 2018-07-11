
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EnderecosEditorDialog extends Common.GridEditorDialog<EnderecosRow> {
        protected getFormKey() { return EnderecosForm.formKey; }
        protected getLocalTextPrefix() { return EnderecosRow.localTextPrefix; }
        protected getNameProperty() { return EnderecosRow.nameProperty; }
        protected form = new EnderecosForm(this.idPrefix);

        protected limpa_formulario_cep() {
            // Limpa valores do formulário de cep.
            this.form.Rua.value = "";
            this.form.Numero.value = "";
            this.form.Complemento.value = "";
            this.form.Bairro.value = "";
            this.form.Cidade.value = "";
            this.form.CodigoIbgeCidade.value = "";
            this.form.Estado.value = "";
            this.form.Pais.value = "";
        }

        protected preenche_formulario_cep(thisForm, dados_cep: ViaCepData) {
            // Atribui valores do formulário de cep.
            //Atualiza os campos com os valores da consulta.
            thisForm.Rua.value = dados_cep.logradouro;
            thisForm.Numero.value = "";
            thisForm.Complemento.value = "";
            thisForm.Bairro.value = dados_cep.bairro;
            thisForm.Cidade.value = dados_cep.localidade;
            thisForm.CodigoIbgeCidade.value = dados_cep.ibge;
            thisForm.Estado.value = dados_cep.uf;
            thisForm.Pais.value = "Brasil";
        }

        protected preenche_formulario_cep_string(info) {
            // Atribui valores do formulário de cep com alguma string fornecida.
            this.form.Rua.value = info;
            this.form.Numero.value = info;
            this.form.Complemento.value = info;
            this.form.Bairro.value = info;
            this.form.Cidade.value = info;
            this.form.CodigoIbgeCidade.value = info;
            this.form.Estado.value = info;
            this.form.Pais.value = info;
        }


        updateTitle() {
            super.updateTitle();
            this.dialogTitle = "Novo Endereço";
        }

        constructor() {

            super();
            this.form.Cep.element.blur(e => {

                //Nova variável "cep" somente com dígitos.

                var cep = this.form.Cep.value.replace(/\D/g, '');

                //Verifica se campo cep possui valor informado.
                if (cep != "") {

                    //Expressão regular para validar o CEP.
                    var validacep = /^[0-9]{8}$/;

                    //Valida o formato do CEP.
                    if (validacep.test(cep)) {

                        //Preenche os campos com "..." enquanto consulta webservice.
                        this.preenche_formulario_cep_string("...");

                        //Consulta o webservice viacep.com.br/
                        //var dados = Exemplos.BuscaCEP(cep);
                        Exemplos.BuscaCEP(cep, this.form, this.preenche_formulario_cep);


                        //seta o foco no campo Numero
                        this.form.Numero.element.focus();

                    } //end if.
                    else {
                        //cep é inválido.
                        this.limpa_formulario_cep();
                        alert("Formato de CEP inválido.");
                    }
                } //end if.
                else {
                    //cep sem valor, limpa formulário.
                    this.limpa_formulario_cep();
                }
            });

        }

    }
}