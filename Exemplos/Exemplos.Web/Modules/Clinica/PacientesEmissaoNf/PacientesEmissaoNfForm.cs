
namespace Exemplos.Clinica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Clinica.PacientesEmissaoNf")]
    [BasedOnRow(typeof(Entities.PacientesEmissaoNfRow))]
    public class PacientesEmissaoNfForm
    {
        [Visible(false)]
        public Int32 PacienteId { get; set; }        
        public String NomeResponsavel { get; set; }        
        public Boolean PessoaJuridica { get; set; }        
        public String CpfResponsavel { get; set; }
        public String CnpjResponsavel { get; set; }
        [EmailEditor]
        public String EmailNf { get; set; }        
        public Boolean Padrao { get; set; }

        [Category("Endereço para emissão da NF")]        
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
    }
}