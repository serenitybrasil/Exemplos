
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class TiposContatosEditor extends Common.GridEditorBase<TiposContatosRow> {
        protected getColumnsKey() { return 'Clinica.TiposContatos'; }
        protected getDialogType() { return TiposContatosEditorDialog; }
                protected getLocalTextPrefix() { return TiposContatosRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}