
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
    [DisplayName("Tipos Contatos"), InstanceName("Tipos Contatos"), TwoLevelCached]
    [ReadPermission("Clinica:TiposContatos:Read")]
    [InsertPermission("Clinica:TiposContatos:Insert")]
    [UpdatePermission("Clinica:TiposContatos:Update")]
    [DeletePermission("Clinica:TiposContatos:Delete")]
    [LookupScript("Clinica.TiposContatos")]
    public sealed class TiposContatosRow : Row, IIdRow, INameRow
    {        
            #region Tipo Contato Id
                [DisplayName("Tipo Contato Id"), Column("TipoContatoID"), Identity]
            public Int32? TipoContatoId { get { return Fields.TipoContatoId[this]; } set { Fields.TipoContatoId[this] = value; } }
            public partial class RowFields { public Int32Field TipoContatoId; }
            #endregion TipoContatoId
                
            #region Tipo Contato
                [DisplayName("Tipo Contato"), Size(100), NotNull, QuickSearch, Placeholder("Se é pessoal, profissional, etc...")]
            public String TipoContato { get { return Fields.TipoContato[this]; } set { Fields.TipoContato[this] = value; } }
            public partial class RowFields { public StringField TipoContato; }
            #endregion TipoContato
                
            #region Pessoa Fisica
                [DisplayName("Pessoa Fisica"), Placeholder("Se o tipo contato é de Pessoa Física ou Jurídica")]
            public Boolean? PessoaFisica { get { return Fields.PessoaFisica[this]; } set { Fields.PessoaFisica[this] = value; } }
            public partial class RowFields { public BooleanField PessoaFisica; }
            #endregion PessoaFisica
                
            #region Ordem
                [DisplayName("Ordem"), Placeholder("Ordem de exibição do Tipo de Contato")]
            public Int32? Ordem { get { return Fields.Ordem[this]; } set { Fields.Ordem[this] = value; } }
            public partial class RowFields { public Int32Field Ordem; }
            #endregion Ordem
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.TipoContatoId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.TipoContato; }
            }
            #endregion Id and Name fields

    #region Constructor
    public TiposContatosRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public const string TableName = "[dbo].[TiposContatos]";

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[TiposContatos]")
    {
    LocalTextPrefix = "Clinica.TiposContatos";
    }
    }
    #endregion RowFields
    }
    }
