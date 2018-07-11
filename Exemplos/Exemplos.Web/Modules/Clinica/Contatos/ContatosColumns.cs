
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.Contatos")]
    [BasedOnRow(typeof(Entities.ContatosRow))]
    public class ContatosColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ContatoId { get; set; }
        //public Int32 PacienteId { get; set; }
        //public Int32 ConvenioId { get; set; }
        //public Int32 ProfissionalId { get; set; }
        [EditLink, Width(50)]
        public String Tratamento { get; set; }
        [EditLink]
        public String Nome { get; set; }
        [EditLink]
        public String Departamento { get; set; }
        //public Int32 TipoContatoId { get; set; }
        // FK:TipoContato
        [DisplayName("Tipo Contato"), Width(100)]//, QuickFilter]
        public String TipoContato { get; set; }
        [DisplayName("Tipo"), Width(60)]//, QuickFilter]
        public String TipoMeioContato { get; set; }
        [EditLink, DisplayName("Conteúdo"), Width(200)]
        public String ConteudoMeioContato { get; set; }
    }
}