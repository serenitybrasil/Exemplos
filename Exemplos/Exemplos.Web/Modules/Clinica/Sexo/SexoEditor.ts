
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class SexoEditor extends Common.GridEditorBase<SexoRow> {
        protected getColumnsKey() { return 'Clinica.Sexo'; }
        protected getDialogType() { return SexoEditorDialog; }
                protected getLocalTextPrefix() { return SexoRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}