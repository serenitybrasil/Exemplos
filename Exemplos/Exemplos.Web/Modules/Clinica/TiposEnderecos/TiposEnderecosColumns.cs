
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.TiposEnderecos")]
    [BasedOnRow(typeof(Entities.TiposEnderecosRow))]
    public class TiposEnderecosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TipoEnderecoId { get; set; }
        [EditLink]
        public String TipoEndereco { get; set; }
        public Boolean PessoaFisica { get; set; }
        public Int32 Ordem { get; set; }
    }
}