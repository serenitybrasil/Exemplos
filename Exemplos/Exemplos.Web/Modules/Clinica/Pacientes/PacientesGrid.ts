
namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class PacientesGrid extends Serenity.EntityGrid<PacientesRow, any> {
        protected getColumnsKey() { return 'Clinica.Pacientes'; }
        protected getDialogType() { return PacientesDialog; }
        protected getIdProperty() { return PacientesRow.idProperty; }
        protected getLocalTextPrefix() { return PacientesRow.localTextPrefix; }
        protected getService() { return PacientesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}