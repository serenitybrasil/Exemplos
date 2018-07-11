
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class TiposMeiosContatosEditor extends Common.GridEditorBase<TiposMeiosContatosRow> {
        protected getColumnsKey() { return 'Clinica.TiposMeiosContatos'; }
        protected getDialogType() { return TiposMeiosContatosEditorDialog; }
                protected getLocalTextPrefix() { return TiposMeiosContatosRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}