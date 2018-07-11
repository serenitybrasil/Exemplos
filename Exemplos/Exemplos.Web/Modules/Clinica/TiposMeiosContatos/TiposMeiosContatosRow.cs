
namespace Exemplos.Clinica.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Exemplos"), TableName(TableName)]
    [DisplayName("Tipos Meios Contatos"), InstanceName("Tipos Meios Contatos"), TwoLevelCached]
    [ReadPermission("Clinica:TiposMeiosContatos:Read")]
    [InsertPermission("Clinica:TiposMeiosContatos:Insert")]
    [UpdatePermission("Clinica:TiposMeiosContatos:Update")]
    [DeletePermission("Clinica:TiposMeiosContatos:Delete")]
    [LookupScript("Clinica.TiposMeiosContatos")]
    public sealed class TiposMeiosContatosRow : Row, IIdRow, INameRow
    {        
            #region Tipo Meio Contato Id
                [DisplayName("Tipo Meio Contato Id"), Column("TipoMeioContatoID"), Identity]
            public Int32? TipoMeioContatoId { get { return Fields.TipoMeioContatoId[this]; } set { Fields.TipoMeioContatoId[this] = value; } }
            public partial class RowFields { public Int32Field TipoMeioContatoId; }
            #endregion TipoMeioContatoId
                
            #region Tipo Meio Contato
                [DisplayName("Tipo Meio Contato"), Size(50), NotNull, QuickSearch, Placeholder("Se é celular, telefone, etc...")]
            public String TipoMeioContato { get { return Fields.TipoMeioContato[this]; } set { Fields.TipoMeioContato[this] = value; } }
            public partial class RowFields { public StringField TipoMeioContato; }
            #endregion TipoMeioContato
                
            #region Mascara
                [DisplayName("Mascara"), Size(50), Placeholder("Máscara do Tipo do Contato.")]
            public String Mascara { get { return Fields.Mascara[this]; } set { Fields.Mascara[this] = value; } }
            public partial class RowFields { public StringField Mascara; }
            #endregion Mascara
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.TipoMeioContatoId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.TipoMeioContato; }
            }
            #endregion Id and Name fields

    #region Constructor
    public TiposMeiosContatosRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public const string TableName = "[dbo].[TiposMeiosContatos]";

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[TiposMeiosContatos]")
    {
    LocalTextPrefix = "Clinica.TiposMeiosContatos";
    }
    }
    #endregion RowFields
    }
    }
