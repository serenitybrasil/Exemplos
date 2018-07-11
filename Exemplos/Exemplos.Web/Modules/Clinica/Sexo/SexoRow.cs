
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
    [DisplayName("Sexo"), InstanceName("Sexo"), TwoLevelCached]
    [ReadPermission("Clinica:Sexo:Read")]
    [InsertPermission("Clinica:Sexo:Insert")]
    [UpdatePermission("Clinica:Sexo:Update")]
    [DeletePermission("Clinica:Sexo:Delete")]
    [LookupScript("Clinica.Sexo")]
    public sealed class SexoRow : Row, IIdRow, INameRow
    {        
            #region Sexo Id
                [DisplayName("Sexo Id"), Column("SexoID"), Identity, Placeholder("Código do Sexo")]
            public Int32? SexoId { get { return Fields.SexoId[this]; } set { Fields.SexoId[this] = value; } }
            public partial class RowFields { public Int32Field SexoId; }
            #endregion SexoId
                
            #region Sexo
                [DisplayName("Sexo"), Size(100), QuickSearch, Placeholder("Descrição")]
            public String Sexo { get { return Fields.Sexo[this]; } set { Fields.Sexo[this] = value; } }
            public partial class RowFields { public StringField Sexo; }
            #endregion Sexo
                
            #region Abreviatura
                [DisplayName("Abreviatura"), Size(1), Placeholder("M = Masculino; F - Feminino")]
            public String Abreviatura { get { return Fields.Abreviatura[this]; } set { Fields.Abreviatura[this] = value; } }
            public partial class RowFields { public StringField Abreviatura; }
            #endregion Abreviatura
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.SexoId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Sexo; }
            }
            #endregion Id and Name fields

    #region Constructor
    public SexoRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public const string TableName = "[dbo].[Sexo]";

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Sexo]")
    {
    LocalTextPrefix = "Clinica.Sexo";
    }
    }
    #endregion RowFields
    }
    }
