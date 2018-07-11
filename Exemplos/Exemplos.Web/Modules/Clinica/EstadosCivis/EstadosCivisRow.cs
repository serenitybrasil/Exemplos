
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
    [DisplayName("Estados Civis"), InstanceName("Estados Civis"), TwoLevelCached]
    [ReadPermission("Clinica:EstadosCivis:Read")]
    [InsertPermission("Clinica:EstadosCivis:Insert")]
    [UpdatePermission("Clinica:EstadosCivis:Update")]
    [DeletePermission("Clinica:EstadosCivis:Delete")]
    [LookupScript("Clinica.EstadosCivis")]
    public sealed class EstadosCivisRow : Row, IIdRow, INameRow
    {        
            #region Estado Civil Id
                [DisplayName("Estado Civil Id"), Column("EstadoCivilID"), Identity, Placeholder("Código do Estado Civil")]
            public Int32? EstadoCivilId { get { return Fields.EstadoCivilId[this]; } set { Fields.EstadoCivilId[this] = value; } }
            public partial class RowFields { public Int32Field EstadoCivilId; }
            #endregion EstadoCivilId
                
            #region Descrição
                [DisplayName("Descrição"), Size(100), QuickSearch, Placeholder("Descrição do Estado Civil (S = Solteiro(a); C = Casado(a); P = Separado(a); D = Divorciado(a); V = Viúvo(a))")]
            public String Descricao { get { return Fields.Descricao[this]; } set { Fields.Descricao[this] = value; } }
            public partial class RowFields { public StringField Descricao; }
            #endregion Descricao
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.EstadoCivilId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Descricao; }
            }
            #endregion Id and Name fields

    #region Constructor
    public EstadosCivisRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public const string TableName = "[dbo].[EstadosCivis]";

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[EstadosCivis]")
    {
    LocalTextPrefix = "Clinica.EstadosCivis";
    }
    }
    #endregion RowFields
    }
    }
