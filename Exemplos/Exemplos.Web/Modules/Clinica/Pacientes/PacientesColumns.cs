
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.Pacientes")]
    [BasedOnRow(typeof(Entities.PacientesRow))]
    public class PacientesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Visible(false)]
        public Int32 PacienteId { get; set; }
        [Width(110), AlignCenter]
        public DateTime DataCadastro { get; set; }
        //public DateTime DataUltimaAtualizacao { get; set; }
        [EditLink]
        [Width(80), AlignCenter]
        public String Matricula { get; set; }
        //public Int32 StatusId { get; set; }
        [EditLink]
        [Width(300)]
        public String Paciente { get; set; }
        //public Boolean Especial { get; set; }
        //public String Pai { get; set; }
        //public String Mae { get; set; }
        //public Int32 SexoId { get; set; }

        // FK:TipoCliente
        [DisplayName("Sexo"), Width(80), AlignCenter]
        public String SexoAbreviatura { get; set; }
        [Width(115), AlignCenter()]
        public DateTime DataNascimento { get; set; }

        //public String CNS { get; set; }
        //public String CarteiraIdentidade { get; set; }
        //public String CPF { get; set; }
        //public String Observacao { get; set; }
        //public String DisturbiosAssociados { get; set; }
        //public String Responsavel { get; set; }
        //public String Foto { get; set; }
        //public DateTime DataFoto { get; set; }
        //public Int32 PacienteIdControlMedic { get; set; }
        //public Int32 PacienteIdGestorMedico { get; set; }
    }
}