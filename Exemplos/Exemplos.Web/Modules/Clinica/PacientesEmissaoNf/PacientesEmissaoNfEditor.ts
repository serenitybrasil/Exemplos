
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class PacientesEmissaoNfEditor extends Common.GridEditorBase<PacientesEmissaoNfRow> {
        protected getColumnsKey() { return 'Clinica.PacientesEmissaoNf'; }
        protected getDialogType() { return PacientesEmissaoNfEditorDialog; }
                protected getLocalTextPrefix() { return PacientesEmissaoNfRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}