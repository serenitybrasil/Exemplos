
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.TiposContatos")]
    [BasedOnRow(typeof(Entities.TiposContatosRow))]
    public class TiposContatosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TipoContatoId { get; set; }
        [EditLink]
        public String TipoContato { get; set; }
        public Boolean PessoaFisica { get; set; }
        public Int32 Ordem { get; set; }
    }
}