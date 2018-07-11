
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.Status")]
    [BasedOnRow(typeof(Entities.StatusRow))]
    public class StatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StatusId { get; set; }
        [EditLink]
        public String Status { get; set; }
    }
}