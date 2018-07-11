
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.EstadosCivis")]
    [BasedOnRow(typeof(Entities.EstadosCivisRow))]
    public class EstadosCivisColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EstadoCivilId { get; set; }
        [EditLink]
        public String Descricao { get; set; }
    }
}