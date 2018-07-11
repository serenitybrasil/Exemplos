
namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class ContatosGrid extends Serenity.EntityGrid<ContatosRow, any> {
        protected getColumnsKey() { return 'Clinica.Contatos'; }
        protected getDialogType() { return ContatosDialog; }
        protected getIdProperty() { return ContatosRow.idProperty; }
        protected getLocalTextPrefix() { return ContatosRow.localTextPrefix; }
        protected getService() { return ContatosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}