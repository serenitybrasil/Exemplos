
namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class PacientesEmissaoNfDialog extends Serenity.EntityDialog<PacientesEmissaoNfRow, any>
    {
        protected getFormKey() { return PacientesEmissaoNfForm.formKey; }
        protected getIdProperty() { return PacientesEmissaoNfRow.idProperty; }
        protected getLocalTextPrefix() { return PacientesEmissaoNfRow.localTextPrefix; }
        protected getNameProperty() { return PacientesEmissaoNfRow.nameProperty; }
        protected getService() { return PacientesEmissaoNfService.baseUrl; }

        protected form = new PacientesEmissaoNfForm(this.idPrefix);

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


        dialogOpen() {
            super.dialogOpen();
            //this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        }

        //Adicionado para evitar o disparo da validacao no keyup e limpeza do icone de erro quando o usuario digitar, padroes do plugin jaqueryvalidation utilizado
        getValidatorOptions() {
            var opts = super.getValidatorOptions();
            opts.onkeyup = false;
            opts.focusCleanup = true;
            return opts;
        }

        constructor() {
            super();

            // *** VALIDAÇÃO DE CPF e CNPJ***
            Exemplos.addValidationRule_CPF(this.form.CpfResponsavel);
            Exemplos.addValidationRule_CNPJ(this.form.CnpjResponsavel);


            // *** INICIO - CHECKBOX CHANGE - NotaFiscalPessoaFisica ***
            this.form.PessoaJuridica.change(e => {

                // *** SÓ EXECUTA A VERIFICAÇÃO SE NOTA FISCAL TERCEIRO ESTIVER SELECIONADA!!! ***
                if (this.form.PessoaJuridica.value == true) {

                    var isChecked = false;
                    // *** Display a warning / confirm Dialog when the Checkbox is being checked ***
                    //var warning = new LocalText("Dialogs.Delivery.DataImport_PeripheryAssets.WarningNotaFiscalTerceiro.Confirm");

                    Q.confirm("A NF é para uma Pessoa Jurídica (empresa) ?",
                        () => {

                            isChecked = true;

                            this.form.PessoaJuridica.value = isChecked;
                            this.form.CpfResponsavel.getGridField().toggle(false);
                            this.form.CnpjResponsavel.getGridField().toggle(true);

                            this.form.CpfResponsavel.value = null;

                        }
                    );

                    this.form.PessoaJuridica.value = isChecked;

                }
                else {

                    var isChecked = true;

                    Q.confirm("A NF é para uma Pessoa Física ?",
                        () => {

                            isChecked = false;

                            this.form.PessoaJuridica.value = isChecked;
                            this.form.CpfResponsavel.getGridField().toggle(true);
                            this.form.CnpjResponsavel.getGridField().toggle(false);

                            this.form.CnpjResponsavel.value = null;

                        }
                    );

                    this.form.PessoaJuridica.value = isChecked;

                }
            });
            // *** FIM - CHECKBOX CHANGE - NotaFiscalPessoaFisica ***


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
