
namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class TiposMeiosContatosGrid extends Serenity.EntityGrid<TiposMeiosContatosRow, any> {
        protected getColumnsKey() { return 'Clinica.TiposMeiosContatos'; }
        protected getDialogType() { return TiposMeiosContatosDialog; }
        protected getIdProperty() { return TiposMeiosContatosRow.idProperty; }
        protected getLocalTextPrefix() { return TiposMeiosContatosRow.localTextPrefix; }
        protected getService() { return TiposMeiosContatosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}