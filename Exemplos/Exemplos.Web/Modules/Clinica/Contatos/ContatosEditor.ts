
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {

    @Serenity.Decorators.registerEditor()
    export class ContatosEditor extends Common.GridEditorBase<ContatosRow> {
        protected getColumnsKey() { return 'Clinica.Contatos'; }
        protected getDialogType() { return ContatosEditorDialog; }
        protected getLocalTextPrefix() { return ContatosRow.localTextPrefix; }

        //Alteracoes para que myParentForm possua uma acao quando for atribuido.
        protected _myParentForm: string;
        set myParentForm(value: string) {
            if (value != null) {
                this._myParentForm = value;

                //Remover coluna Departamento do Grid do Master quando vier de pacientes
                if (value == "PACIENTES") {
                    this.remove_coluna("Departamento");
                }
                
            }
        }
        get myParentForm() {
            return this._myParentForm;
        }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Adicionar";
        }

        //Ao iniciar o dialog, atribuir o que tiver em myParentForm
        protected initEntityDialog(itemType: string, dialog: ContatosEditorDialog) {
            super.initEntityDialog(itemType, dialog);
            dialog.myParentForm = this.myParentForm;
        }
        

        protected validateEntity(row: ContatosRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.TipoContato = TiposContatosRow.getLookup()
                .itemById[row.TipoContatoId].TipoContato;

            row.TipoMeioContato = TiposMeiosContatosRow.getLookup()
                .itemById[row.TipoMeioContatoId].TipoMeioContato;

            return true;
        }

        //Remove uma determinada coluna do grid
        protected remove_coluna(nomeColuna: string) {
            var cols = this.slickGrid.getColumns();
            for (var i = 0; i < cols.length; i++) {
                if (cols[i].field == nomeColuna) {
                    cols.splice(i, 1);

                    this.slickGrid.setColumns(cols);
                    break;
                }
            }
        }
    }
}