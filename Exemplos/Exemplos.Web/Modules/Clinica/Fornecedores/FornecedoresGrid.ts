
namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class FornecedoresGrid extends Serenity.EntityGrid<FornecedoresRow, any> {
        protected getColumnsKey() { return 'Clinica.Fornecedores'; }
        protected getDialogType() { return FornecedoresDialog; }
        protected getIdProperty() { return FornecedoresRow.idProperty; }
        protected getLocalTextPrefix() { return FornecedoresRow.localTextPrefix; }
        protected getService() { return FornecedoresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}