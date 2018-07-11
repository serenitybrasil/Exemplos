
namespace Exemplos.Clinica.Entities
{
    using Exemplos.Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Exemplos"), TableName(TableName)]
    [DisplayName("Pacientes"), InstanceName("Paciente"), TwoLevelCached]
    //[ConnectionKey("Exemplos"), DisplayName("Pacientes"), InstanceName("Pacientes"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Clinica.Pacientes.Read)]
    [InsertPermission(PermissionKeys.Clinica.Pacientes.Insert)]
    [UpdatePermission(PermissionKeys.Clinica.Pacientes.Update)]
    [DeletePermission(PermissionKeys.Clinica.Pacientes.Delete)]
    [LookupScript("Clinica.Pacientes")]
    public sealed class PacientesRow : Row, IIdRow, INameRow
    {
        #region Paciente Id
        [DisplayName("Paciente Id"), Column("PacienteID"), Identity]
        public Int32? PacienteId { get { return Fields.PacienteId[this]; } set { Fields.PacienteId[this] = value; } }
        public partial class RowFields { public Int32Field PacienteId; }
        #endregion PacienteId

        #region Data Cadastro
        [DisplayName("Data Cadastro"), ReadOnly(true), DefaultValue("now"), Updatable(false), NotNull, DateTimeEditor]
        public DateTime? DataCadastro { get { return Fields.DataCadastro[this]; } set { Fields.DataCadastro[this] = value; } }
        public partial class RowFields { public DateTimeField DataCadastro; }
        #endregion DataCadastro

        #region Data Ultima Atualizacao
        [DisplayName("Data Última Atualização"), ReadOnly(true), DateTimeEditor]
        public DateTime? DataUltimaAtualizacao { get { return Fields.DataUltimaAtualizacao[this]; } set { Fields.DataUltimaAtualizacao[this] = value; } }
        public partial class RowFields { public DateTimeField DataUltimaAtualizacao; }
        #endregion DataUltimaAtualizacao

        #region Matricula
        [DisplayName("Matrícula"), Size(6), QuickSearch, Updatable(false), ReadOnly(true)]
        //[Expression("( SELECT RIGHT(YEAR(GETDATE()), 2) + RIGHT(('000' + CAST((COUNT(Matricula) + 1)AS VARCHAR(6))), 4) " +
        //            "FROM    PACIENTES " +
        //            "WHERE   YEAR(ISNULL(DataCadastro, GETDATE())) = YEAR(GETDATE()))")]
        public String Matricula { get { return Fields.Matricula[this]; } set { Fields.Matricula[this] = value; } }
        public partial class RowFields { public StringField Matricula; }
        #endregion Matricula

        #region Status Id
        [DisplayName("Status"), Column("StatusID"), ForeignKey("[dbo].[Status]", "StatusID"), LeftJoin("jStatus"), TextualField("Status")]
        [LookupEditor(typeof(Clinica.Entities.StatusRow), InplaceAdd = true)]
        //[LookupCodeDescrAttribute(typeof(Clinica.Entities.StatusRow), "StatusId", "Status")]
        public Int32? StatusId { get { return Fields.StatusId[this]; } set { Fields.StatusId[this] = value; } }
        public partial class RowFields { public Int32Field StatusId; }
        #endregion StatusId

        #region Paciente
        [DisplayName("Paciente"), Size(100), NotNull]
        public String Paciente { get { return Fields.Paciente[this]; } set { Fields.Paciente[this] = value; } }
        public partial class RowFields { public StringField Paciente; }
        #endregion Paciente

        #region Especial
        [DisplayName("É Paciente Especial ?")]
        public Boolean? Especial { get { return Fields.Especial[this]; } set { Fields.Especial[this] = value; } }
        public partial class RowFields { public BooleanField Especial; }
        #endregion Especial

        #region Pai
        [DisplayName("Pai"), Size(100)]
        public String Pai { get { return Fields.Pai[this]; } set { Fields.Pai[this] = value; } }
        public partial class RowFields { public StringField Pai; }
        #endregion Pai

        #region Mae
        [DisplayName("Mãe"), Size(100)]
        public String Mae { get { return Fields.Mae[this]; } set { Fields.Mae[this] = value; } }
        public partial class RowFields { public StringField Mae; }
        #endregion Mae

        #region Sexo
        [DisplayName("Sexo"), Column("SexoID"), ForeignKey("[dbo].[Sexo]", "SexoID"), LeftJoin("jSexo"), TextualField("Sexo")]
        [LookupEditor(typeof(Clinica.Entities.SexoRow), InplaceAdd = true)]
        public Int32? SexoId { get { return Fields.SexoId[this]; } set { Fields.SexoId[this] = value; } }
        public partial class RowFields { public Int32Field SexoId; }
        #endregion SexoId

        #region Data Nascimento
        [DisplayName("Data Nascimento")]
        public DateTime? DataNascimento { get { return Fields.DataNascimento[this]; } set { Fields.DataNascimento[this] = value; } }
        public partial class RowFields { public DateTimeField DataNascimento; }
        #endregion DataNascimento

        #region CNS
        [DisplayName("CNS (Cartão SUS)"), Column("CNS"), Size(15)]
        public String CNS { get { return Fields.CNS[this]; } set { Fields.CNS[this] = value; } }
        public partial class RowFields { public StringField CNS; }
        #endregion CNS

        #region Carteira Identidade
        [DisplayName("Carteira Identidade"), Size(50)]
        public String CarteiraIdentidade { get { return Fields.CarteiraIdentidade[this]; } set { Fields.CarteiraIdentidade[this] = value; } }
        public partial class RowFields { public StringField CarteiraIdentidade; }
        #endregion CarteiraIdentidade

        #region CPF
        [DisplayName("CPF"), Column("CPF"), Size(14), MaskedEditor(Mask = "999.999.999-99")]//, Updatable(false)]
        public String CPF { get { return Fields.CPF[this]; } set { Fields.CPF[this] = value; } }
        public partial class RowFields { public StringField CPF; }
        #endregion CPF

        #region Observacao
        [DisplayName("Observação"), Size(2000), TextAreaEditor(Rows = 4)]
        public String Observacao { get { return Fields.Observacao[this]; } set { Fields.Observacao[this] = value; } }
        public partial class RowFields { public StringField Observacao; }
        #endregion Observacao

        #region Disturbios Associados
        [DisplayName("Distúrbios Associados"), Size(2000), TextAreaEditor(Rows = 4)]
        public String DisturbiosAssociados { get { return Fields.DisturbiosAssociados[this]; } set { Fields.DisturbiosAssociados[this] = value; } }
        public partial class RowFields { public StringField DisturbiosAssociados; }
        #endregion DisturbiosAssociados

        #region Responsavel
        [DisplayName("Responsável"), Size(100)]
        public String Responsavel { get { return Fields.Responsavel[this]; } set { Fields.Responsavel[this] = value; } }
        public partial class RowFields { public StringField Responsavel; }
        #endregion Responsavel

        #region Nota Fiscal Pessoa Fisica (Campo Calculado)
        //[DisplayName("Nota Fiscal - Pessoa Física"), Visible(false), DefaultValue(true)]
        //[Expression("case when rtrim(NotaFiscal_CPF) = '' then 0 else 1 end")]
        //public Boolean? NotaFiscalPessoaFisica { get { return Fields.NotaFiscalPessoaFisica[this]; } set { Fields.NotaFiscalPessoaFisica[this] = value; } }
        //public partial class RowFields { public BooleanField NotaFiscalPessoaFisica; }
        #endregion NotaFiscalPessoaFisica

       /*
        * TODO: 
        * CRIAR UM JEITO DE OBTER A FOTO VIA WEB CAM
        * 
        */
        #region Foto
        //[FileUploadEditor(AllowNonImage = true, OriginalNameProperty = "Foto")]
        [ImageUploadEditor(AllowNonImage = true, FilenameFormat = "Pacientes/Fotos/~", ScaleMode = Serenity.Web.ImageScaleMode.CropSourceImage)]
        [DisplayName("Foto"), Size(100)]
        public String Foto { get { return Fields.Foto[this]; } set { Fields.Foto[this] = value; } }
        public partial class RowFields { public StringField Foto; }
        #endregion Foto

        #region Data Foto
        [DisplayName("Data Foto")]
        public DateTime? DataFoto { get { return Fields.DataFoto[this]; } set { Fields.DataFoto[this] = value; } }
        public partial class RowFields { public DateTimeField DataFoto; }
        #endregion DataFoto

        #region Paciente Id Control Medic
        [DisplayName("Paciente Id Control Medic"), Column("PacienteID_ControlMedic"), ReadOnly(true)]
        public Int32? PacienteIdControlMedic { get { return Fields.PacienteIdControlMedic[this]; } set { Fields.PacienteIdControlMedic[this] = value; } }
        public partial class RowFields { public Int32Field PacienteIdControlMedic; }
        #endregion PacienteIdControlMedic

        #region Paciente Id Gestor Medico
        [DisplayName("Paciente Id Gestor Medico"), Column("PacienteID_GestorMedico"), ReadOnly(true)]
        public Int32? PacienteIdGestorMedico { get { return Fields.PacienteIdGestorMedico[this]; } set { Fields.PacienteIdGestorMedico[this] = value; } }
        public partial class RowFields { public Int32Field PacienteIdGestorMedico; }
        #endregion PacienteIdGestorMedico

        #region MasterDetail

        #region MasterDetail - ContatosList
        [MasterDetailRelation(foreignKey: "PacienteId", IncludeColumns = "TipoContato, TipoMeioContato")]
        //[DisplayName("Contatos"), SetFieldFlags(FieldFlags.ClientSide)]
        [DisplayName("Contatos"), NotMapped]
        public List<ContatosRow> ContatosList
        {
            get { return Fields.ContatosList[this]; }
            set { Fields.ContatosList[this] = value; }
        }
        public partial class RowFields { public readonly RowListField<ContatosRow> ContatosList; }
        #endregion

        #region MasterDetail - EnderecosList
        [MasterDetailRelation(foreignKey: "PacienteId", IncludeColumns = "TipoEndereco")]
        [DisplayName("Endereços"), NotMapped]
        public List<EnderecosRow> EnderecosList
        {
            get { return Fields.EnderecosList[this]; }
            set { Fields.EnderecosList[this] = value; }
        }
        public partial class RowFields { public readonly RowListField<EnderecosRow> EnderecosList; }
        #endregion

        #endregion

        #region Foreign Fields

        [DisplayName("Sexo"), Expression("jSexo.[Sexo]")]
        public String Sexo { get { return Fields.Sexo[this]; } set { Fields.Sexo[this] = value; } }
        public partial class RowFields { public StringField Sexo; }


        [DisplayName("Sexo Abreviatura"), Expression("jSexo.[Abreviatura]")]
        public String SexoAbreviatura { get { return Fields.SexoAbreviatura[this]; } set { Fields.SexoAbreviatura[this] = value; } }
        public partial class RowFields { public StringField SexoAbreviatura; }

        [DisplayName("Status"), Expression("jStatus.[Status]")]
        public String Status { get { return Fields.Status[this]; } set { Fields.Status[this] = value; } }
        public partial class RowFields { public StringField Status; }


        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.PacienteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Paciente; }
        }
        #endregion Id and Name fields

        #region Constructor
        public PacientesRow()
        : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public const string TableName = "[dbo].[Pacientes]";

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
            : base("[dbo].[Pacientes]")
            {
                LocalTextPrefix = "Clinica.Pacientes";
            }
            
        }
        #endregion RowFields
    }
}
