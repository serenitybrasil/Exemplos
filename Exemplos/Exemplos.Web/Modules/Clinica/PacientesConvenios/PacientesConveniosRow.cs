
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
    [DisplayName("Pacientes - Convênios"), InstanceName("Paciente - Convênio"), TwoLevelCached]
    [ReadPermission("Clinica:PacientesConvenios:Read")]
    [InsertPermission("Clinica:PacientesConvenios:Insert")]
    [UpdatePermission("Clinica:PacientesConvenios:Update")]
    [DeletePermission("Clinica:PacientesConvenios:Delete")]
    [LookupScript("Clinica.PacientesConvenios")]
    public sealed class PacientesConveniosRow : Row, IIdRow, INameRow
    {
        #region Paciente Convênio Id
        [DisplayName("Paciente Convênio Id"), Column("PacienteConvenioID"), Identity, Placeholder("Código do Paciente Convênio")]
        public Int32? PacienteConvenioId { get { return Fields.PacienteConvenioId[this]; } set { Fields.PacienteConvenioId[this] = value; } }
        public partial class RowFields { public Int32Field PacienteConvenioId; }
        #endregion PacienteConvenioId

        #region Paciente
        [DisplayName("Paciente"), Column("PacienteID"), NotNull, ForeignKey("[dbo].[Pacientes]", "PacienteID"), LeftJoin("jPaciente"), TextualField("PacienteMatricula"), Placeholder("Código do Paciente")]
        [LookupEditor(typeof(Clinica.Entities.PacientesRow), InplaceAdd = true)]
        public Int32? PacienteId { get { return Fields.PacienteId[this]; } set { Fields.PacienteId[this] = value; } }
        public partial class RowFields { public Int32Field PacienteId; }
        #endregion PacienteId

        #region Convênio
        [DisplayName("Convênio"), Column("ConvenioID"), NotNull, ForeignKey("[dbo].[Convenios]", "ConvenioID"), LeftJoin("jConvenio"), TextualField("ConvenioCNPJ"), Placeholder("Código do Convênio")]
        [LookupEditor(typeof(Clinica.Entities.ConveniosRow))] //, CascadeField = "Inativo", CascadeValue = "False")]//, InplaceAdd = true)]
        public Int32? ConvenioId { get { return Fields.ConvenioId[this]; } set { Fields.ConvenioId[this] = value; } }
        public partial class RowFields { public Int32Field ConvenioId; }
        #endregion ConvenioId

        #region Sub Convênio Id
        [DisplayName("Sub Convênio Id"), Column("SubConvenioID"), Placeholder("SubConvênio de um Convênio"), Visible(false)]
        public Int32? SubConvenioId { get { return Fields.SubConvenioId[this]; } set { Fields.SubConvenioId[this] = value; } }
        public partial class RowFields { public Int32Field SubConvenioId; }
        #endregion SubConvenioId

        #region Convênio Principal
        [DisplayName("Convênio Principal"), NotNull, Hint("Se é o convênio principal do usuário")]
        public Boolean? ConvenioPrincipal { get { return Fields.ConvenioPrincipal[this]; } set { Fields.ConvenioPrincipal[this] = value; } }
        public partial class RowFields { public BooleanField ConvenioPrincipal; }
        #endregion ConvenioPrincipal

        #region Descrição Plano
        [DisplayName("Descrição Plano"), Size(100), QuickSearch, Placeholder("Descricao do plano do convênio")]
        public String DescricaoPlano { get { return Fields.DescricaoPlano[this]; } set { Fields.DescricaoPlano[this] = value; } }
        public partial class RowFields { public StringField DescricaoPlano; }
        #endregion DescricaoPlano

        #region Carteirinha
        [DisplayName("Carteirinha"), Size(50), Placeholder("Número da carteirinha do paciente no convênio")]
        public String Carteirinha { get { return Fields.Carteirinha[this]; } set { Fields.Carteirinha[this] = value; } }
        public partial class RowFields { public StringField Carteirinha; }
        #endregion Carteirinha

        #region Data Validade Carteirinha
        [DisplayName("Data Validade Carteirinha"), Placeholder("Data da Validade da Carteirinha do Plano")]
        public DateTime? DataValidadeCarteirinha { get { return Fields.DataValidadeCarteirinha[this]; } set { Fields.DataValidadeCarteirinha[this] = value; } }
        public partial class RowFields { public DateTimeField DataValidadeCarteirinha; }
        #endregion DataValidadeCarteirinha

        #region Nome Paciente Convênio
        [DisplayName("Nome Paciente Convênio"), Size(100), Placeholder("Nome do paciente no Convênio (Muitas vezes o nome do paciente foi cadastrado de forma diferente no convênio)")]
        public String NomePacienteConvenio { get { return Fields.NomePacienteConvenio[this]; } set { Fields.NomePacienteConvenio[this] = value; } }
        public partial class RowFields { public StringField NomePacienteConvenio; }
        #endregion NomePacienteConvenio

        #region Inativo
        [DisplayName("Inativo"), Hint("Se a carteirinha está ativa no convênio ou não")]
        public Boolean? Inativo { get { return Fields.Inativo[this]; } set { Fields.Inativo[this] = value; } }
        public partial class RowFields { public BooleanField Inativo; }
        #endregion Inativo

        #region Data Inativo
        [DisplayName("Data Inativo"), Placeholder("Data da inativação da carteirinha no SISTEMA Exemplos"), ReadOnly(true), DateTimeEditor, Visible(false)]
        public DateTime? DataInativo { get { return Fields.DataInativo[this]; } set { Fields.DataInativo[this] = value; } }
        public partial class RowFields { public DateTimeField DataInativo; }
        #endregion DataInativo

        #region Imagem Carteirinha
        [MultipleFileUploadEditor(AllowNonImage = true, OriginalNameProperty = "Foto")]
        [DisplayName("Imagem da Carteirinha"), Size(-1), Hint("Imagem da carteirinha (se possível, frente e VERSO)")]
        public String ImagemCarteirinha { get { return Fields.ImagemCarteirinha[this]; } set { Fields.ImagemCarteirinha[this] = value; } }
        public partial class RowFields { public StringField ImagemCarteirinha; }
        #endregion ImagemCarteirinha

        #region Data Cadastro
        [DisplayName("Data Cadastro"), Placeholder("Data do Cadatro das informações de Convênio"), ReadOnly(true), DateTimeEditor, DefaultValue("now"), Updatable(false)]
        public DateTime? DataCadastro { get { return Fields.DataCadastro[this]; } set { Fields.DataCadastro[this] = value; } }
        public partial class RowFields { public DateTimeField DataCadastro; }
        #endregion DataCadastro

        #region Data Última Atualização
        [DisplayName("Data Última Atualização"), Placeholder("Data da Última Atualização desse Cadastro"), ReadOnly(true), DateTimeEditor, Insertable(false), Updatable(true)]
        public DateTime? DataUltimaAtualizacao { get { return Fields.DataUltimaAtualizacao[this]; } set { Fields.DataUltimaAtualizacao[this] = value; } }
        public partial class RowFields { public DateTimeField DataUltimaAtualizacao; }
        #endregion DataUltimaAtualizacao

        #region Observação
        [DisplayName("Observação"), Size(200), Placeholder("Observação acerca dessa carteirinha, plano e convênio."), TextAreaEditor(Rows = 4)]
        public String Observacao { get { return Fields.Observacao[this]; } set { Fields.Observacao[this] = value; } }
        public partial class RowFields { public StringField Observacao; }
        #endregion Observacao


        #region Foreign Fields

        [DisplayName("Convenio Razao Social"), Expression("jConvenio.[RazaoSocial]")]
        public String ConvenioRazaoSocial { get { return Fields.ConvenioRazaoSocial[this]; } set { Fields.ConvenioRazaoSocial[this] = value; } }
        public partial class RowFields { public StringField ConvenioRazaoSocial; }


        [DisplayName("Convenio Nome Fantasia"), Expression("jConvenio.[NomeFantasia]")]
        public String ConvenioNomeFantasia { get { return Fields.ConvenioNomeFantasia[this]; } set { Fields.ConvenioNomeFantasia[this] = value; } }
        public partial class RowFields { public StringField ConvenioNomeFantasia; }

        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.PacienteConvenioId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DescricaoPlano; }
        }
        #endregion Id and Name fields

        #region Constructor
        public PacientesConveniosRow()
        : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public const string TableName = "[dbo].[PacientesConvenios]";

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
            : base("[dbo].[PacientesConvenios]")
            {
                LocalTextPrefix = "Clinica.PacientesConvenios";
            }
        }
        #endregion RowFields
    }
}
