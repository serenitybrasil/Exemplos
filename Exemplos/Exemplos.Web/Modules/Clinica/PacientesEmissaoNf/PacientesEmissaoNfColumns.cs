
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.PacientesEmissaoNf")]
    [BasedOnRow(typeof(Entities.PacientesEmissaoNfRow))]
    public class PacientesEmissaoNfColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Visible(false)]
        public Int32 PacienteEmissaoNf { get; set; }
        [ Visible(false)]
        public Int32 PacienteId { get; set; }
        [EditLink]
        public String NomeResponsavel { get; set; }
        [EditLink]
        public String CpfResponsavel { get; set; }
        [EditLink]
        public String EmailNf { get; set; }
        public Boolean Padrao { get; set; }
        //public Int32 TipoEnderecoId { get; set; }
        //public String Rua { get; set; }
        //public String Numero { get; set; }
        //public String Complemento { get; set; }
        //public String Bairro { get; set; }
        //public String Cidade { get; set; }
        //public String CodigoIbgeCidade { get; set; }
        //public String Estado { get; set; }
        //public String CodigoIbgeEstado { get; set; }
        //public String Pais { get; set; }
        //public String Cep { get; set; }
        //public String Referencia { get; set; }
    }
}