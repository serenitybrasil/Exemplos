
namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class PacientesDialog extends Serenity.EntityDialog<PacientesRow, any> {
        protected getFormKey() { return PacientesForm.formKey; }
        protected getIdProperty() { return PacientesRow.idProperty; }
        protected getLocalTextPrefix() { return PacientesRow.localTextPrefix; }
        protected getNameProperty() { return PacientesRow.nameProperty; }
        protected getService() { return PacientesService.baseUrl; }

        protected form = new PacientesForm(this.idPrefix);

        private pacientesconveniosGrid: Exemplos.Clinica.PacientesPacientesConveniosGrid;
        private pacientesemissaonfGrid: Exemplos.Clinica.PacientesPacientesEmissaoNfGrid;
        private loadedState: string;

        dialogOpen() {
            super.dialogOpen();
            //this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            //this.form.Paciente.element()
        }

        //Adicionado para evitar o disparo da validacao no keyup e limpeza do icone de erro quando o usuario digitar, padroes do plugin jaqueryvalidation utilizado
        getValidatorOptions() {
            var opts = super.getValidatorOptions();
            opts.onkeyup = false;
            opts.focusCleanup = true;
            return opts;
        }

        updateTitle() {
            super.updateTitle();
            this.dialogTitle = "Novo Paciente";
        }

        updateInterface() {
            super.updateInterface();


            this.toolbar.findButton("print-pacientes-button").toggleClass('disabled', this.isNew());
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.push(Exemplos.Common.ReportHelper.createToolButton({
                title: 'Imprimir',
                cssClass: 'export-pdf-button print-pacientes-button disabled',
                reportKey: 'Pacientes.PacientesPrint',
                extension: 'pdf',
                getParams: () => ({ PacientesIdList: [this.get_entityId()] })
            }));

            return buttons;
        }

        afterLoadEntity() {
            super.afterLoadEntity();

            // se for atualizar o dado, registra a data da atualização
            if (this.isEditMode()) {
                this.form.DataUltimaAtualizacao.valueAsDate = new Date();

                ////this.form.Paciente.element.attr('data-toggle', 'tooltip');
                ////this.form.CPF.element.attr('data-toggle', 'TESTE');
                //if (this.form.NotaFiscalTerceiro.value == true) {
                //    this.form.NotaFiscalNome.getGridField().toggle(true);
                //    this.form.NotaFiscalPessoaFisica.getGridField().toggle(true);
                //    this.form.NotaFiscalCPF.getGridField().toggle(true);
                //    this.form.NotaFiscalCNPJ.getGridField().toggle(false);
                //    this.form.NotaFiscalEndereco.getGridField().toggle(true);
                //    this.form.NotaFiscalBairro.getGridField().toggle(true);
                //    this.form.NotaFiscalCidade.getGridField().toggle(true);
                //    this.form.NotaFiscalEstadoId.getGridField().toggle(true);
                //    this.form.NotaFiscalEmail.getGridField().toggle(true);
                //}
            }

            //// passa o nome do form do PACIENTES
            this.form.ContatosList.myParentForm = "PACIENTES";
        }

        constructor() {

            super();

            // *** INICIO - TRATAMENTO DOS TABS ***
            this.pacientesconveniosGrid = new Exemplos.Clinica.PacientesPacientesConveniosGrid(this.byId('PacientesConveniosGrid'));
            this.pacientesconveniosGrid.element.flexHeightOnly(1);
            this.pacientesemissaonfGrid = new Exemplos.Clinica.PacientesPacientesEmissaoNfGrid(this.byId('PacientesEmissaoNfGrid'));
            this.tabs.bind('tabsactivate', () => this.arrange());
            // *** FIM - TRATAMENTO DOS TABS ***

            // *** CUSTOM MESSAGE ***
            //this.customDIV = jQuery("<div style='text-align:center;color:red'>TESTE DE TEXTO EXTRA!</div>");
            //this.customDIV.appendTo(this.form.Status.element.closest(".field"));

            // *** VALIDAÇÃO DE CPF e CNPJ***
            Exemplos.addValidationRule_CPF(this.form.CPF);
            //Exemplos.addValidationRule_CPF(this.form.NotaFiscalCPF, { uniqueName: this.uniqueName });
            //Exemplos.addValidationRule_CNPJ(this.form.NotaFiscalCNPJ, { text: "O CNPJ está inválido, mané !!!",  });


            //// *** INICIO - CHECKBOX CHANGE - NotaFiscalTerceiro ***
            //this.form.NotaFiscalTerceiro.change(e => {

            //    if (this.form.NotaFiscalTerceiro.value == true) {

            //        var isChecked = false;
            //        // *** Display a warning / confirm Dialog when the Checkbox is being checked ***
            //        //var warning = new LocalText("Dialogs.Delivery.DataImport_PeripheryAssets.WarningNotaFiscalTerceiro.Confirm");

            //        Q.confirm("Confirma o cadastro da emissão da NF de Terceiros ?",
            //            () => {

            //                //// show
            //                //this.customDIV.show();

            //                isChecked = true;

            //                //var texto = this.form.NotaFiscalNome.getGridField().find('.caption').prop('outerHTML').split('Nome').join('Razão Social');
            //                //this.form.NotaFiscalNome.getGridField().find('.caption').prop('outerHTML', texto);

            //                this.form.NotaFiscalTerceiro.value = isChecked;
            //                this.form.NotaFiscalNome.getGridField().toggle(true);
            //                this.form.NotaFiscalPessoaFisica.getGridField().toggle(true);
            //                this.form.NotaFiscalCPF.getGridField().toggle(true);
            //                this.form.NotaFiscalCNPJ.getGridField().toggle(false);
            //                this.form.NotaFiscalEndereco.getGridField().toggle(true);
            //                this.form.NotaFiscalBairro.getGridField().toggle(true);
            //                this.form.NotaFiscalCidade.getGridField().toggle(true);
            //                this.form.NotaFiscalEstadoId.getGridField().toggle(true);
            //                this.form.NotaFiscalEmail.getGridField().toggle(true);

            //                this.form.NotaFiscalNome.value = null;
            //                this.form.NotaFiscalPessoaFisica.value = true;
            //                this.form.NotaFiscalCPF.value = null;
            //                this.form.NotaFiscalCNPJ.value = null;
            //                this.form.NotaFiscalEndereco.value = null;
            //                this.form.NotaFiscalBairro.value = null;
            //                this.form.NotaFiscalCidade.value = null;
            //                this.form.NotaFiscalEstadoId.value = null;
            //                this.form.NotaFiscalEmail.value = null;

            //            }
            //        );

            //        this.form.NotaFiscalTerceiro.value = isChecked;

            //    }
            //    else {

            //        var isChecked = true;

            //        Q.confirm("Confirma a exclusão da emissão da NF de Terceiros ?\nOs dados existentes serão descartados.",
            //            () => {
            //                //this.customDIV.hide();
            //                isChecked = false;

            //                this.form.NotaFiscalTerceiro.value = isChecked;
            //                this.form.NotaFiscalNome.getGridField().toggle(false);
            //                this.form.NotaFiscalPessoaFisica.getGridField().toggle(false);
            //                this.form.NotaFiscalCPF.getGridField().toggle(false);
            //                this.form.NotaFiscalCNPJ.getGridField().toggle(false);
            //                this.form.NotaFiscalEndereco.getGridField().toggle(false);
            //                this.form.NotaFiscalBairro.getGridField().toggle(false);
            //                this.form.NotaFiscalCidade.getGridField().toggle(false);
            //                this.form.NotaFiscalEstadoId.getGridField().toggle(false);
            //                this.form.NotaFiscalEmail.getGridField().toggle(false);

            //                this.form.NotaFiscalNome.value = null;
            //                this.form.NotaFiscalCPF.value = null;
            //                this.form.NotaFiscalCNPJ.value = null;
            //                this.form.NotaFiscalEndereco.value = null;
            //                this.form.NotaFiscalBairro.value = null;
            //                this.form.NotaFiscalCidade.value = null;
            //                this.form.NotaFiscalEstadoId.value = null;
            //                this.form.NotaFiscalEmail.value = null;
            //            }
            //        );

            //        this.form.NotaFiscalTerceiro.value = isChecked;

            //    }
            //});
            //// *** FIM - CHECKBOX CHANGE - NotaFiscalTerceiro ***

            //// *** INICIO - CHECKBOX CHANGE - NotaFiscalPessoaFisica ***
            //this.form.NotaFiscalPessoaFisica.change(e => {

            //    // *** SÓ EXECUTA A VERIFICAÇÃO SE NOTA FISCAL TERCEIRO ESTIVER SELECIONADA!!! ***
            //    if (this.form.NotaFiscalTerceiro.value == true) {
            //        if (this.form.NotaFiscalPessoaFisica.value == true) {

            //            var isChecked = false;
            //            // *** Display a warning / confirm Dialog when the Checkbox is being checked ***
            //            //var warning = new LocalText("Dialogs.Delivery.DataImport_PeripheryAssets.WarningNotaFiscalTerceiro.Confirm");

            //            Q.confirm("A NF de Terceiros é uma Pessoa Física ?",
            //                () => {

            //                    isChecked = true;

            //                    this.form.NotaFiscalPessoaFisica.value = isChecked;
            //                    this.form.NotaFiscalCPF.getGridField().toggle(true);
            //                    this.form.NotaFiscalCNPJ.getGridField().toggle(false);

            //                    this.form.NotaFiscalCPF.value = null;

            //                }
            //            );

            //            this.form.NotaFiscalPessoaFisica.value = isChecked;

            //        }
            //        else {

            //            var isChecked = true;

            //            Q.confirm("A NF de Terceiros é uma Pessoa Jurídica (empresa) ?",
            //                () => {

            //                    isChecked = false;

            //                    this.form.NotaFiscalPessoaFisica.value = isChecked;
            //                    this.form.NotaFiscalCPF.getGridField().toggle(false);
            //                    this.form.NotaFiscalCNPJ.getGridField().toggle(true);

            //                    this.form.NotaFiscalCPF.value = null;

            //                }
            //            );

            //            this.form.NotaFiscalPessoaFisica.value = isChecked;

            //        }
            //    }
            //});
            //// *** FIM - CHECKBOX CHANGE - NotaFiscalPessoaFisica ***

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

        loadEntity(entity: PacientesRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'PacientesConvenios', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'PacientesEmissaoNf', this.isNewOrDeleted());

            this.pacientesconveniosGrid.PacienteId = entity.PacienteId;
            this.pacientesemissaonfGrid.PacienteId = entity.PacienteId;
        }

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup('Clinica.Pacientes');
        }

    }
}