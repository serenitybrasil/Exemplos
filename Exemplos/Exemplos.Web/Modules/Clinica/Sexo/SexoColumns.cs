
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.Sexo")]
    [BasedOnRow(typeof(Entities.SexoRow))]
    public class SexoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SexoId { get; set; }
        [EditLink]
        public String Sexo { get; set; }
        public String Abreviatura { get; set; }
    }
}