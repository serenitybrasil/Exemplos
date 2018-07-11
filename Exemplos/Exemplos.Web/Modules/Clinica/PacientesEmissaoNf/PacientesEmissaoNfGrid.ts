
namespace Exemplos.Clinica {
    
    @Serenity.Decorators.registerClass()
    export class PacientesEmissaoNfGrid extends Serenity.EntityGrid<PacientesEmissaoNfRow, any> {
        protected getColumnsKey() { return 'Clinica.PacientesEmissaoNf'; }
        protected getDialogType() { return PacientesEmissaoNfDialog; }
        protected getIdProperty() { return PacientesEmissaoNfRow.idProperty; }
        protected getLocalTextPrefix() { return PacientesEmissaoNfRow.localTextPrefix; }
        protected getService() { return PacientesEmissaoNfService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}