
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class EstadosCivisEditor extends Common.GridEditorBase<EstadosCivisRow> {
        protected getColumnsKey() { return 'Clinica.EstadosCivis'; }
        protected getDialogType() { return EstadosCivisEditorDialog; }
                protected getLocalTextPrefix() { return EstadosCivisRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}