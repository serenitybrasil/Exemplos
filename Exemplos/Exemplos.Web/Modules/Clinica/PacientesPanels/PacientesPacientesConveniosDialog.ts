/// <reference path="../PacientesConvenios/PacientesConveniosDialog.ts" />

namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    export class PacientesPacientesConveniosDialog extends PacientesConveniosDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.PacienteId, true);
        }
    }
}