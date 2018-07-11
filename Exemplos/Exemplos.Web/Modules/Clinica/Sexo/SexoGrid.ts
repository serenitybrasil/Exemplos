
namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class SexoGrid extends Serenity.EntityGrid<SexoRow, any> {
        protected getColumnsKey() { return 'Clinica.Sexo'; }
        protected getDialogType() { return SexoDialog; }
        protected getIdProperty() { return SexoRow.idProperty; }
        protected getLocalTextPrefix() { return SexoRow.localTextPrefix; }
        protected getService() { return SexoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}