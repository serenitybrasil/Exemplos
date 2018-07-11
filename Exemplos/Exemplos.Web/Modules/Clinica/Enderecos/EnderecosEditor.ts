
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class EnderecosEditor extends Common.GridEditorBase<EnderecosRow> {
        protected getColumnsKey() { return 'Clinica.Enderecos'; }
        protected getDialogType() { return EnderecosEditorDialog; }
                protected getLocalTextPrefix() { return EnderecosRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Adicionar";
        }

        protected validateEntity(row: EnderecosRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.TipoEndereco = TiposEnderecosRow.getLookup()
                .itemById[row.TipoEnderecoId].TipoEndereco;

            return true;
        }

    }
}