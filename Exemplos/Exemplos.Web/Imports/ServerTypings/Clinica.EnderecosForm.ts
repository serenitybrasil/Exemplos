namespace Exemplos.Clinica {
    export class EnderecosForm extends Serenity.PrefixedContext {
        static formKey = 'Clinica.Enderecos';

    }

    export interface EnderecosForm {
        TipoEnderecoId: Serenity.LookupEditor;
        Cep: Serenity.MaskedEditor;
        Rua: Serenity.StringEditor;
        Numero: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Cidade: Serenity.StringEditor;
        CodigoIbgeCidade: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CodigoIbgeEstado: Serenity.StringEditor;
        Pais: Serenity.StringEditor;
        Referencia: Serenity.StringEditor;
        Observacao: Serenity.TextAreaEditor;
        Latitude: Serenity.StringEditor;
        Longitude: Serenity.StringEditor;
    }

    [['TipoEnderecoId', () => Serenity.LookupEditor], ['Cep', () => Serenity.MaskedEditor], ['Rua', () => Serenity.StringEditor], ['Numero', () => Serenity.StringEditor], ['Complemento', () => Serenity.StringEditor], ['Bairro', () => Serenity.StringEditor], ['Cidade', () => Serenity.StringEditor], ['CodigoIbgeCidade', () => Serenity.StringEditor], ['Estado', () => Serenity.StringEditor], ['CodigoIbgeEstado', () => Serenity.StringEditor], ['Pais', () => Serenity.StringEditor], ['Referencia', () => Serenity.StringEditor], ['Observacao', () => Serenity.TextAreaEditor], ['Latitude', () => Serenity.StringEditor], ['Longitude', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EnderecosForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

