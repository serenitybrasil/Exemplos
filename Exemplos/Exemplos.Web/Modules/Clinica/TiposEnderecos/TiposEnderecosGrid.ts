
namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class TiposEnderecosGrid extends Serenity.EntityGrid<TiposEnderecosRow, any> {
        protected getColumnsKey() { return 'Clinica.TiposEnderecos'; }
        protected getDialogType() { return TiposEnderecosDialog; }
        protected getIdProperty() { return TiposEnderecosRow.idProperty; }
        protected getLocalTextPrefix() { return TiposEnderecosRow.localTextPrefix; }
        protected getService() { return TiposEnderecosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}