
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class ConveniosEditor extends Common.GridEditorBase<ConveniosRow> {
        protected getColumnsKey() { return 'Clinica.Convenios'; }
        protected getDialogType() { return ConveniosEditorDialog; }
                protected getLocalTextPrefix() { return ConveniosRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}