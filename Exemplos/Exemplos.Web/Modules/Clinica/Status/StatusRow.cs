
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
    [DisplayName("Status"), InstanceName("Status"), TwoLevelCached]
    [ReadPermission("Clinica:Status:Read")]
    [InsertPermission("Clinica:Status:Insert")]
    [UpdatePermission("Clinica:Status:Update")]
    [DeletePermission("Clinica:Status:Delete")]
    [LookupScript("Clinica.Status")]
    public sealed class StatusRow : Row, IIdRow, INameRow
    {        
            #region Status Id
                [DisplayName("Status Id"), Column("StatusID"), Identity, Placeholder("Status")]
            public Int32? StatusId { get { return Fields.StatusId[this]; } set { Fields.StatusId[this] = value; } }
            public partial class RowFields { public Int32Field StatusId; }
            #endregion StatusId
                
            #region Status
                [DisplayName("Status"), Size(100), QuickSearch, Placeholder("Descrição do Status")]
            public String Status { get { return Fields.Status[this]; } set { Fields.Status[this] = value; } }
            public partial class RowFields { public StringField Status; }
            #endregion Status
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.StatusId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Status; }
            }
            #endregion Id and Name fields

    #region Constructor
    public StatusRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public const string TableName = "[dbo].[Status]";

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Status]")
    {
    LocalTextPrefix = "Clinica.Status";
    }
    }
    #endregion RowFields
    }
    }
