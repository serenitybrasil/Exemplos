
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.Enderecos")]
    [BasedOnRow(typeof(Entities.EnderecosRow))]
    public class EnderecosColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 EnderecoId { get; set; }
        //public Int32 PacienteId { get; set; }
        //public Int32 ConvenioId { get; set; }
        //public Int32 ProfissionalId { get; set; }
        [EditLink, DisplayName("Tipo"), Width(100), QuickFilter]
        public String TipoEndereco { get; set; }
        //public Int32 TipoEnderecoId { get; set; }
        [EditLink]
        public String Rua { get; set; }
        [EditLink]
        public String Numero { get; set; }
        [EditLink]
        public String Complemento { get; set; }
        [EditLink]
        public String Bairro { get; set; }
        [EditLink]
        public String Cidade { get; set; }
        //public String CodigoIbgeCidade { get; set; }
        public String Estado { get; set; }
        //public String CodigoIbgeEstado { get; set; }
        public String Pais { get; set; }
        public String Cep { get; set; }
        //public String Referencia { get; set; }
        //public String Observacao { get; set; }
        //public String Latitude { get; set; }
        //public String Longitude { get; set; }
    }
}