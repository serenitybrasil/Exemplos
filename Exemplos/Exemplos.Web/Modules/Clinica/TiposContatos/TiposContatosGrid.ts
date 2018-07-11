
namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class TiposContatosGrid extends Serenity.EntityGrid<TiposContatosRow, any> {
        protected getColumnsKey() { return 'Clinica.TiposContatos'; }
        protected getDialogType() { return TiposContatosDialog; }
        protected getIdProperty() { return TiposContatosRow.idProperty; }
        protected getLocalTextPrefix() { return TiposContatosRow.localTextPrefix; }
        protected getService() { return TiposContatosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}