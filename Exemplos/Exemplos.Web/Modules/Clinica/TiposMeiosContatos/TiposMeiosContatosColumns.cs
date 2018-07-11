
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.TiposMeiosContatos")]
    [BasedOnRow(typeof(Entities.TiposMeiosContatosRow))]
    public class TiposMeiosContatosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TipoMeioContatoId { get; set; }
        [EditLink]
        public String TipoMeioContato { get; set; }
        public String Mascara { get; set; }
    }
}