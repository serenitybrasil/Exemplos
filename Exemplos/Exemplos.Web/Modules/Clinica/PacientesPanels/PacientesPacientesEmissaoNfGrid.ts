/// <reference path="../PacientesEmissaoNf/PacientesEmissaoNfGrid.ts" />

namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    export class PacientesPacientesEmissaoNfGrid extends PacientesEmissaoNfGrid {
        protected getDialogType() { return PacientesPacientesEmissaoNfDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            let fld = PacientesEmissaoNfRow.Fields;
            return super.getColumns().filter(x => x.field !== fld.PacienteId);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ PacienteId: this.PacienteId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.PacienteId;
        }

        private _PacienteId: number;

        get PacienteId() {
            return this._PacienteId;
        }

        set PacienteId(value: number) {
            if (this._PacienteId !== value) {
                this._PacienteId = value;
                this.setEquality('PacienteId', value);
                this.refresh();
            }
        }

    }
}