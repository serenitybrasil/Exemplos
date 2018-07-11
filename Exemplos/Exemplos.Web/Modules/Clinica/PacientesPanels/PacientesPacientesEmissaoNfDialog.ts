/// <reference path="../PacientesConvenios/PacientesConveniosDialog.ts" />

namespace Exemplos.Clinica {

    @Serenity.Decorators.registerClass()
    export class PacientesPacientesEmissaoNfDialog extends PacientesEmissaoNfDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.PacienteId, true);
        }
    }
}