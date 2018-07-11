
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class StatusEditor extends Common.GridEditorBase<StatusRow> {
        protected getColumnsKey() { return 'Clinica.Status'; }
        protected getDialogType() { return StatusEditorDialog; }
                protected getLocalTextPrefix() { return StatusRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}