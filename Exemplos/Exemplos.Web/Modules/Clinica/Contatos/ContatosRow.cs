
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
    [DisplayName("Contatos"), InstanceName("Contato"), TwoLevelCached]
    //[ConnectionKey("Exemplos"), DisplayName("Contatos"), InstanceName("Contatos"), TwoLevelCached]
    [ReadPermission("Clinica:Contatos:Read")]
    [InsertPermission("Clinica:Contatos:Insert")]
    [UpdatePermission("Clinica:Contatos:Update")]
    [DeletePermission("Clinica:Contatos:Delete")]
    //[LookupScript("Clinica.Contatos")]
    public sealed class ContatosRow : Row, IIdRow, INameRow
    {
        #region Contato Id
        [DisplayName("Contato Id"), Column("ContatoID"), Identity]
        public Int32? ContatoId { get { return Fields.ContatoId[this]; } set { Fields.ContatoId[this] = value; } }
        public partial class RowFields { public Int32Field ContatoId; }
        #endregion ContatoId

        #region Paciente
        [DisplayName("Paciente"), Column("PacienteID"), ForeignKey("[dbo].[Pacientes]", "PacienteID"), LeftJoin("jPaciente"), TextualField("PacientePaciente")]
        //[LookupEditor(typeof(Clinica.Entities.PacientesRow), InplaceAdd = true)]
        public Int32? PacienteId { get { return Fields.PacienteId[this]; } set { Fields.PacienteId[this] = value; } }
        public partial class RowFields { public Int32Field PacienteId; }
        #endregion PacienteId

        #region Convenio
        [DisplayName("Convenio"), Column("ConvenioID"), ForeignKey("[dbo].[Convenios]", "ConvenioID"), LeftJoin("jConvenio"), TextualField("ConvenioNomeFantasia")]
        //[LookupEditor(typeof(Clinica.Entities.ConveniosRow), InplaceAdd = true)]
        public Int32? ConvenioId { get { return Fields.ConvenioId[this]; } set { Fields.ConvenioId[this] = value; } }
        public partial class RowFields { public Int32Field ConvenioId; }
        #endregion ConvenioId

        #region Profissional
        [DisplayName("Profissional"), Column("ProfissionalID"), ForeignKey("[dbo].[Profissionais]", "ProfissionalID"), LeftJoin("jProfissional"), TextualField("ProfissionalProfissional")]
        //[LookupEditor(typeof(Clinica.Entities.ProfissionaisRow), InplaceAdd = true)]
        public Int32? ProfissionalId { get { return Fields.ProfissionalId[this]; } set { Fields.ProfissionalId[this] = value; } }
        public partial class RowFields { public Int32Field ProfissionalId; }
        #endregion ProfissionalId

        #region Fornecedor
        [DisplayName("Fornecedor"), Column("FornecedorID"), ForeignKey("[dbo].[Fornecedores]", "FornecedorID"), LeftJoin("jFornecedor"), TextualField("FornecedorRazaoSocial"), Placeholder("Código do Fornecedor")]
        [LookupEditor(typeof(Clinica.Entities.FornecedoresRow), InplaceAdd = true)]
        public Int32? FornecedorId { get { return Fields.FornecedorId[this]; } set { Fields.FornecedorId[this] = value; } }
        public partial class RowFields { public Int32Field FornecedorId; }
        #endregion FornecedorId

        #region Tratamento
        [DisplayName("Tratamento"), Size(100), QuickSearch, Placeholder("Sr, Sra, Srta, Dr...")]
        public String Tratamento { get { return Fields.Tratamento[this]; } set { Fields.Tratamento[this] = value; } }
        public partial class RowFields { public StringField Tratamento; }
        #endregion Tratamento

        #region Nome
        [DisplayName("Nome"), Size(100), Placeholder("Nome do Contato"), Hint("Nome do contato que se responsabilizará pelo contrato\nFavor preencher o nome completo.")]
        public String Nome { get { return Fields.Nome[this]; } set { Fields.Nome[this] = value; } }
        public partial class RowFields { public StringField Nome; }
        #endregion Nome

        #region Departamento
        [DisplayName("Departamento"), Size(20), Placeholder("Departamento")]
        public String Departamento { get { return Fields.Departamento[this]; } set { Fields.Departamento[this] = value; } }
        public partial class RowFields { public StringField Departamento; }
        #endregion Departamento

        #region Tipo Contato
        [DisplayName("Tipo Contato"), Column("TipoContatoID"), NotNull, ForeignKey("[dbo].[TiposContatos]", "TipoContatoID"), LeftJoin("jTipoContato"), TextualField("TipoContato"), Placeholder("Se é pessoal, profissional, etc..")]
        [LookupEditor(typeof(Clinica.Entities.TiposContatosRow), InplaceAdd = true)]
        public Int32? TipoContatoId { get { return Fields.TipoContatoId[this]; } set { Fields.TipoContatoId[this] = value; } }
        public partial class RowFields { public Int32Field TipoContatoId; }
        #endregion TipoContatoId

        #region Tipo Meio Contato
        [DisplayName("Tipo Meio Contato"), Column("TipoMeioContatoID"), NotNull, ForeignKey("[dbo].[TiposMeiosContatos]", "TipoMeioContatoID"), LeftJoin("jTipoMeioContato"), TextualField("TipoMeioContato"), Placeholder("Se é celular, telefone, etc..")]
        [LookupEditor(typeof(Clinica.Entities.TiposMeiosContatosRow), InplaceAdd = true)]
        public Int32? TipoMeioContatoId { get { return Fields.TipoMeioContatoId[this]; } set { Fields.TipoMeioContatoId[this] = value; } }
        public partial class RowFields { public Int32Field TipoMeioContatoId; }
        #endregion TipoMeioContatoId

        #region Conteudo Meio Contato
        //[DisplayName("Conteúdo Meio Contato"), Size(50), NotNull, Placeholder("O número do contato. Se for e-mail: o endereço do e-mail")]
        [DisplayName("Conteúdo Meio Contato"), Size(50), NotNull, Placeholder("O número do contato.")]
        public String ConteudoMeioContato { get { return Fields.ConteudoMeioContato[this]; } set { Fields.ConteudoMeioContato[this] = value; } }
        public partial class RowFields { public StringField ConteudoMeioContato; }
        #endregion ConteudoMeioContato

        #region Conteudo Meio Contato - Email
        [DisplayName("E-mail"), Size(50), Placeholder("E-mail"), Visible(false), NotMapped]
        public String Email { get { return Fields.Email[this]; } set { Fields.Email[this] = value; } }
        public partial class RowFields { public StringField Email; }
        #endregion ConteudoMeioContato - Email

        #region Observacoes Contato
        [DisplayName("Observações do Contato"), Size(500), Placeholder("Observações importantes a respeito desse contato"), TextAreaEditor(Rows = 4)]
        public String ObservacoesContato { get { return Fields.ObservacoesContato[this]; } set { Fields.ObservacoesContato[this] = value; } }
        public partial class RowFields { public StringField ObservacoesContato; }
        #endregion ObservacoesContato

        #region Foreign Fields

        [DisplayName("Tipo Contato"), Expression("jTipoContato.[TipoContato]")]
        public String TipoContato { get { return Fields.TipoContato[this]; } set { Fields.TipoContato[this] = value; } }
        public partial class RowFields { public StringField TipoContato; }


        [DisplayName("Tipo Contato Pessoa Fisica"), Expression("jTipoContato.[PessoaFisica]")]
        public Boolean? TipoContatoPessoaFisica { get { return Fields.TipoContatoPessoaFisica[this]; } set { Fields.TipoContatoPessoaFisica[this] = value; } }
        public partial class RowFields { public BooleanField TipoContatoPessoaFisica; }


        [DisplayName("Tipo Contato Ordem"), Expression("jTipoContato.[Ordem]")]
        public Int32? TipoContatoOrdem { get { return Fields.TipoContatoOrdem[this]; } set { Fields.TipoContatoOrdem[this] = value; } }
        public partial class RowFields { public Int32Field TipoContatoOrdem; }


        [DisplayName("Tipo Meio Contato"), Expression("jTipoMeioContato.[TipoMeioContato]")]
        public String TipoMeioContato { get { return Fields.TipoMeioContato[this]; } set { Fields.TipoMeioContato[this] = value; } }
        public partial class RowFields { public StringField TipoMeioContato; }


        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.ContatoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }
        #endregion Id and Name fields

        #region Constructor
        public ContatosRow()
        : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public const string TableName = "[dbo].[Contatos]";

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
            : base("[dbo].[Contatos]")
            {
                LocalTextPrefix = "Clinica.Contatos";
            }
        }
        #endregion RowFields
    }
}
