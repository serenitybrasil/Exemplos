
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.PacientesConvenios")]
    [BasedOnRow(typeof(Entities.PacientesConveniosRow))]
    public class PacientesConveniosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Visible(false)]
        public Int32 PacienteConvenioId { get; set; }
        //public Int32 PacienteId { get; set; }
        //public Int32 ConvenioId { get; set; }
        [DisplayName("Convênio"), Width(200)]
        public String ConvenioNomeFantasia { get; set; }
        //public Int32 SubConvenioId { get; set; }
        [DisplayName("Principal"), Width(80)]
        public Boolean ConvenioPrincipal { get; set; }
        [EditLink]
        //public String DescricaoPlano { get; set; }
        [Width(200)]
        public String Carteirinha { get; set; }
        [DisplayName("Data Validade"), Width(200), AlignCenter]
        public DateTime DataValidadeCarteirinha { get; set; }
        //public String NomePacienteConvenio { get; set; }
        [Width(80)]
        public Boolean Inativo { get; set; }
        //public DateTime DataInativo { get; set; }
        //public String ImagemCarteirinha { get; set; }
        //public DateTime DataCadastro { get; set; }
        //public DateTime DataUltimaAtualizacao { get; set; }
        //public String Observacao { get; set; }
    }
}