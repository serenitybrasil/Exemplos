
namespace Exemplos.Clinica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Clinica.Enderecos")]
    [BasedOnRow(typeof(Entities.EnderecosRow))]
    public class EnderecosForm
    {
        //public Int32 PacienteId { get; set; }
        //public Int32 ConvenioId { get; set; }
        //public Int32 ProfissionalId { get; set; }
        public Int32 TipoEnderecoId { get; set; }
        public String Cep { get; set; }
        public String Rua { get; set; }
        public String Numero { get; set; }
        public String Complemento { get; set; }
        public String Bairro { get; set; }
        public String Cidade { get; set; }
        public String CodigoIbgeCidade { get; set; }
        public String Estado { get; set; }
        public String CodigoIbgeEstado { get; set; }
        public String Pais { get; set; }
        public String Referencia { get; set; }
        public String Observacao { get; set; }
        public String Latitude { get; set; }
        public String Longitude { get; set; }
    }
}