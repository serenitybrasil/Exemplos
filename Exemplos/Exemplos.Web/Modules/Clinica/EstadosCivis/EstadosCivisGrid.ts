
namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class EstadosCivisGrid extends Serenity.EntityGrid<EstadosCivisRow, any> {
        protected getColumnsKey() { return 'Clinica.EstadosCivis'; }
        protected getDialogType() { return EstadosCivisDialog; }
        protected getIdProperty() { return EstadosCivisRow.idProperty; }
        protected getLocalTextPrefix() { return EstadosCivisRow.localTextPrefix; }
        protected getService() { return EstadosCivisService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}