
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class TiposEnderecosEditor extends Common.GridEditorBase<TiposEnderecosRow> {
        protected getColumnsKey() { return 'Clinica.TiposEnderecos'; }
        protected getDialogType() { return TiposEnderecosEditorDialog; }
                protected getLocalTextPrefix() { return TiposEnderecosRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}