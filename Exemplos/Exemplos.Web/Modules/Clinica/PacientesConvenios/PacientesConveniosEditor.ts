
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class PacientesConveniosEditor extends Common.GridEditorBase<PacientesConveniosRow> {
        protected getColumnsKey() { return 'Clinica.PacientesConvenios'; }
        protected getDialogType() { return PacientesConveniosEditorDialog; }
                protected getLocalTextPrefix() { return PacientesConveniosRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}