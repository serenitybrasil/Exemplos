
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
    [DisplayName("Tipos Endereços"), InstanceName("Tipos Endereços"), TwoLevelCached]
    [ReadPermission("Clinica:TiposEnderecos:Read")]
    [InsertPermission("Clinica:TiposEnderecos:Insert")]
    [UpdatePermission("Clinica:TiposEnderecos:Update")]
    [DeletePermission("Clinica:TiposEnderecos:Delete")]
    [LookupScript("Clinica.TiposEnderecos")]
    public sealed class TiposEnderecosRow : Row, IIdRow, INameRow
    {        
            #region Tipo Endereço Id
                [DisplayName("Tipo Endereço Id"), Column("TipoEnderecoID"), Identity]
            public Int32? TipoEnderecoId { get { return Fields.TipoEnderecoId[this]; } set { Fields.TipoEnderecoId[this] = value; } }
            public partial class RowFields { public Int32Field TipoEnderecoId; }
            #endregion TipoEnderecoId
                
            #region Tipo Endereço
                [DisplayName("Tipo Endereço"), Size(50), QuickSearch, Placeholder("se será residencial, comercial, etc")]
            public String TipoEndereco { get { return Fields.TipoEndereco[this]; } set { Fields.TipoEndereco[this] = value; } }
            public partial class RowFields { public StringField TipoEndereco; }
            #endregion TipoEndereco
                
            #region Pessoa Fisica
                [DisplayName("Pessoa Fisica"), Placeholder("Se o tipo de endereço é de Pessoa Física ou Jurídica")]
            public Boolean? PessoaFisica { get { return Fields.PessoaFisica[this]; } set { Fields.PessoaFisica[this] = value; } }
            public partial class RowFields { public BooleanField PessoaFisica; }
            #endregion PessoaFisica
                
            #region Ordem
                [DisplayName("Ordem"), Placeholder("Ordem de exibição do Tipo de Endereço")]
            public Int32? Ordem { get { return Fields.Ordem[this]; } set { Fields.Ordem[this] = value; } }
            public partial class RowFields { public Int32Field Ordem; }
            #endregion Ordem
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.TipoEnderecoId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.TipoEndereco; }
            }
            #endregion Id and Name fields

    #region Constructor
    public TiposEnderecosRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public const string TableName = "[dbo].[TiposEnderecos]";

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[TiposEnderecos]")
    {
    LocalTextPrefix = "Clinica.TiposEnderecos";
    }
    }
    #endregion RowFields
    }
    }
