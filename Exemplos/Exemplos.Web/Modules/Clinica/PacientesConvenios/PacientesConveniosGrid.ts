
namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class PacientesConveniosGrid extends Serenity.EntityGrid<PacientesConveniosRow, any> {
        protected getColumnsKey() { return 'Clinica.PacientesConvenios'; }
        protected getDialogType() { return PacientesConveniosDialog; }
        protected getIdProperty() { return PacientesConveniosRow.idProperty; }
        protected getLocalTextPrefix() { return PacientesConveniosRow.localTextPrefix; }
        protected getService() { return PacientesConveniosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}