
namespace Exemplos.Clinica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Clinica.PacientesConvenios")]
    [BasedOnRow(typeof(Entities.PacientesConveniosRow))]
    public class PacientesConveniosForm
    {
        public Int32 PacienteId { get; set; }
        public Int32 ConvenioId { get; set; }
        public Int32 SubConvenioId { get; set; }
        public Boolean ConvenioPrincipal { get; set; }
        public String DescricaoPlano { get; set; }
        public String Carteirinha { get; set; }
        public DateTime DataValidadeCarteirinha { get; set; }
        public String NomePacienteConvenio { get; set; }
        public Boolean Inativo { get; set; }
        public DateTime DataInativo { get; set; }
        public String ImagemCarteirinha { get; set; }
        public DateTime DataCadastro { get; set; }
        public DateTime DataUltimaAtualizacao { get; set; }
        public String Observacao { get; set; }
    }
}