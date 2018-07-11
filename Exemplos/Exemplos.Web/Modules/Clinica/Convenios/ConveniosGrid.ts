
namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class ConveniosGrid extends Serenity.EntityGrid<ConveniosRow, any> {
        protected getColumnsKey() { return 'Clinica.Convenios'; }
        protected getDialogType() { return ConveniosDialog; }
        protected getIdProperty() { return ConveniosRow.idProperty; }
        protected getLocalTextPrefix() { return ConveniosRow.localTextPrefix; }
        protected getService() { return ConveniosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}