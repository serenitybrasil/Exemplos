
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class ExceptionsEditor extends Common.GridEditorBase<ExceptionsRow> {
        protected getColumnsKey() { return 'Clinica.Exceptions'; }
        protected getDialogType() { return ExceptionsEditorDialog; }
                protected getLocalTextPrefix() { return ExceptionsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}