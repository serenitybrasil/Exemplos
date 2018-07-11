
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
    [DisplayName("Exceptions"), InstanceName("Exceptions"), TwoLevelCached]
    [ReadPermission("Clinica:Exceptions:Read")]
    [InsertPermission("Clinica:Exceptions:Insert")]
    [UpdatePermission("Clinica:Exceptions:Update")]
    [DeletePermission("Clinica:Exceptions:Delete")]
    [LookupScript("Clinica.Exceptions")]
    public sealed class ExceptionsRow : Row, IIdRow, INameRow
    {        
            #region Id
                [DisplayName("Id"), Identity]
            public Int64? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
            public partial class RowFields { public Int64Field Id; }
            #endregion Id
                
            #region Guid
                [DisplayName("Guid"), Column("GUID"), NotNull]
            public Guid? Guid { get { return Fields.Guid[this]; } set { Fields.Guid[this] = value; } }
            public partial class RowFields { public GuidField Guid; }
            #endregion Guid
                
            #region Application Name
                [DisplayName("Application Name"), Size(50), NotNull, QuickSearch]
            public String ApplicationName { get { return Fields.ApplicationName[this]; } set { Fields.ApplicationName[this] = value; } }
            public partial class RowFields { public StringField ApplicationName; }
            #endregion ApplicationName
                
            #region Machine Name
                [DisplayName("Machine Name"), Size(50), NotNull]
            public String MachineName { get { return Fields.MachineName[this]; } set { Fields.MachineName[this] = value; } }
            public partial class RowFields { public StringField MachineName; }
            #endregion MachineName
                
            #region Creation Date
                [DisplayName("Creation Date"), NotNull, DateTimeEditor]
            public DateTime? CreationDate { get { return Fields.CreationDate[this]; } set { Fields.CreationDate[this] = value; } }
            public partial class RowFields { public DateTimeField CreationDate; }
            #endregion CreationDate
                
            #region Type
                [DisplayName("Type"), Size(100), NotNull]
            public String Type { get { return Fields.Type[this]; } set { Fields.Type[this] = value; } }
            public partial class RowFields { public StringField Type; }
            #endregion Type
                
            #region Is Protected
                [DisplayName("Is Protected"), NotNull]
            public Boolean? IsProtected { get { return Fields.IsProtected[this]; } set { Fields.IsProtected[this] = value; } }
            public partial class RowFields { public BooleanField IsProtected; }
            #endregion IsProtected
                
            #region Host
                [DisplayName("Host"), Size(100)]
            public String Host { get { return Fields.Host[this]; } set { Fields.Host[this] = value; } }
            public partial class RowFields { public StringField Host; }
            #endregion Host
                
            #region Url
                [DisplayName("Url"), Size(500), TextAreaEditor(Rows = 4)]
            public String Url { get { return Fields.Url[this]; } set { Fields.Url[this] = value; } }
            public partial class RowFields { public StringField Url; }
            #endregion Url
                
            #region Http Method
                [DisplayName("Http Method"), Column("HTTPMethod"), Size(10)]
            public String HttpMethod { get { return Fields.HttpMethod[this]; } set { Fields.HttpMethod[this] = value; } }
            public partial class RowFields { public StringField HttpMethod; }
            #endregion HttpMethod
                
            #region Ip Address
                [DisplayName("Ip Address"), Column("IPAddress"), Size(40)]
            public String IpAddress { get { return Fields.IpAddress[this]; } set { Fields.IpAddress[this] = value; } }
            public partial class RowFields { public StringField IpAddress; }
            #endregion IpAddress
                
            #region Source
                [DisplayName("Source"), Size(100)]
            public String Source { get { return Fields.Source[this]; } set { Fields.Source[this] = value; } }
            public partial class RowFields { public StringField Source; }
            #endregion Source
                
            #region Message
                [DisplayName("Message"), Size(1000), TextAreaEditor(Rows = 4)]
            public String Message { get { return Fields.Message[this]; } set { Fields.Message[this] = value; } }
            public partial class RowFields { public StringField Message; }
            #endregion Message
                
            #region Detail
                [DisplayName("Detail"), Size(-1)]
            public String Detail { get { return Fields.Detail[this]; } set { Fields.Detail[this] = value; } }
            public partial class RowFields { public StringField Detail; }
            #endregion Detail
                
            #region Status Code
                [DisplayName("Status Code")]
            public Int32? StatusCode { get { return Fields.StatusCode[this]; } set { Fields.StatusCode[this] = value; } }
            public partial class RowFields { public Int32Field StatusCode; }
            #endregion StatusCode
                
            #region Sql
                [DisplayName("Sql"), Column("SQL"), Size(-1)]
            public String Sql { get { return Fields.Sql[this]; } set { Fields.Sql[this] = value; } }
            public partial class RowFields { public StringField Sql; }
            #endregion Sql
                
            #region Deletion Date
                [DisplayName("Deletion Date"), DateTimeEditor]
            public DateTime? DeletionDate { get { return Fields.DeletionDate[this]; } set { Fields.DeletionDate[this] = value; } }
            public partial class RowFields { public DateTimeField DeletionDate; }
            #endregion DeletionDate
                
            #region Full Json
                [DisplayName("Full Json"), Size(-1)]
            public String FullJson { get { return Fields.FullJson[this]; } set { Fields.FullJson[this] = value; } }
            public partial class RowFields { public StringField FullJson; }
            #endregion FullJson
                
            #region Error Hash
                [DisplayName("Error Hash")]
            public Int32? ErrorHash { get { return Fields.ErrorHash[this]; } set { Fields.ErrorHash[this] = value; } }
            public partial class RowFields { public Int32Field ErrorHash; }
            #endregion ErrorHash
                
            #region Duplicate Count
                [DisplayName("Duplicate Count"), NotNull]
            public Int32? DuplicateCount { get { return Fields.DuplicateCount[this]; } set { Fields.DuplicateCount[this] = value; } }
            public partial class RowFields { public Int32Field DuplicateCount; }
            #endregion DuplicateCount
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.Id; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.ApplicationName; }
            }
            #endregion Id and Name fields

    #region Constructor
    public ExceptionsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public const string TableName = "[dbo].[Exceptions]";

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Exceptions]")
    {
    LocalTextPrefix = "Clinica.Exceptions";
    }
    }
    #endregion RowFields
    }
    }
