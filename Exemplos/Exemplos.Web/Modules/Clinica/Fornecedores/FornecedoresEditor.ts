
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class FornecedoresEditor extends Common.GridEditorBase<FornecedoresRow> {
        protected getColumnsKey() { return 'Clinica.Fornecedores'; }
        protected getDialogType() { return FornecedoresEditorDialog; }
                protected getLocalTextPrefix() { return FornecedoresRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}