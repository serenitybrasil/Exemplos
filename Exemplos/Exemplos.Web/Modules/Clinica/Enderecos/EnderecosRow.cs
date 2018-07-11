
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
    [DisplayName("Enderecos"), InstanceName("Enderecos"), TwoLevelCached]
    //[ConnectionKey("Exemplos"), DisplayName("Enderecos"), InstanceName("Enderecos"), TwoLevelCached]
    [ReadPermission("Clinica:Enderecos:Read")]
    [InsertPermission("Clinica:Enderecos:Insert")]
    [UpdatePermission("Clinica:Enderecos:Update")]
    [DeletePermission("Clinica:Enderecos:Delete")]
    [LookupScript("Clinica.Enderecos")]
    public sealed class EnderecosRow : Row, IIdRow, INameRow
    {
        #region Endereco Id
        [DisplayName("Endereco Id"), Column("EnderecoID"), Identity]
        public Int32? EnderecoId { get { return Fields.EnderecoId[this]; } set { Fields.EnderecoId[this] = value; } }
        public partial class RowFields { public Int32Field EnderecoId; }
        #endregion EnderecoId

        #region Paciente
        [DisplayName("Paciente"), Column("PacienteID"), NotNull, ForeignKey("[dbo].[Pacientes]", "PacienteID"), LeftJoin("jPaciente"), TextualField("PacienteMatricula")]
        //[LookupEditor(typeof(Clinica.Entities.PacientesRow), InplaceAdd = true)]
        public Int32? PacienteId { get { return Fields.PacienteId[this]; } set { Fields.PacienteId[this] = value; } }
        public partial class RowFields { public Int32Field PacienteId; }
        #endregion PacienteId

        #region Convenio
        [DisplayName("Convenio"), Column("ConvenioID"), ForeignKey("[dbo].[Convenios]", "ConvenioID"), LeftJoin("jConvenio"), TextualField("ConvenioCNPJ")]
        //[LookupEditor(typeof(Clinica.Entities.ConveniosRow), InplaceAdd = true)]
        public Int32? ConvenioId { get { return Fields.ConvenioId[this]; } set { Fields.ConvenioId[this] = value; } }
        public partial class RowFields { public Int32Field ConvenioId; }
        #endregion ConvenioId

        #region Profissional
        [DisplayName("Profissional"), Column("ProfissionalID"), NotNull, ForeignKey("[dbo].[Profissionais]", "ProfissionalID"), LeftJoin("jProfissional"), TextualField("ProfissionalMotivoEncerramento")]
        //[LookupEditor(typeof(Clinica.Entities.ProfissionaisRow), InplaceAdd = true)]
        public Int32? ProfissionalId { get { return Fields.ProfissionalId[this]; } set { Fields.ProfissionalId[this] = value; } }
        public partial class RowFields { public Int32Field ProfissionalId; }
        #endregion ProfissionalId

        #region Fornecedor
        [DisplayName("Fornecedor"), Column("FornecedorID"), NotNull, ForeignKey("[dbo].[Profissionais]", "FornecedorID"), LeftJoin("jFornecedor"), TextualField("FornecedorMotivoEncerramento")]
        //[LookupEditor(typeof(Clinica.Entities.ProfissionaisRow), InplaceAdd = true)]
        public Int32? FornecedorId { get { return Fields.FornecedorId[this]; } set { Fields.FornecedorId[this] = value; } }
        public partial class RowFields { public Int32Field FornecedorId; }
        #endregion FornecedorId

        #region Tipo Endereco
        [DisplayName("Tipo Endereco"), Column("TipoEnderecoID"), ForeignKey("[dbo].[TiposEnderecos]", "TipoEnderecoID"), LeftJoin("jTipoEndereco"), TextualField("TipoEndereco")]
        [LookupEditor(typeof(Clinica.Entities.TiposEnderecosRow))]//, InplaceAdd = true)]
        public Int32? TipoEnderecoId { get { return Fields.TipoEnderecoId[this]; } set { Fields.TipoEnderecoId[this] = value; } }
        public partial class RowFields { public Int32Field TipoEnderecoId; }
        #endregion TipoEnderecoId

        #region Rua
        [DisplayName("Rua"), Size(200), QuickSearch]
        public String Rua { get { return Fields.Rua[this]; } set { Fields.Rua[this] = value; } }
        public partial class RowFields { public StringField Rua; }
        #endregion Rua

        #region Numero
        [DisplayName("Número"), Size(10)]
        public String Numero { get { return Fields.Numero[this]; } set { Fields.Numero[this] = value; } }
        public partial class RowFields { public StringField Numero; }
        #endregion Numero

        #region Complemento
        [DisplayName("Complemento"), Size(50)]
        public String Complemento { get { return Fields.Complemento[this]; } set { Fields.Complemento[this] = value; } }
        public partial class RowFields { public StringField Complemento; }
        #endregion Complemento

        #region Bairro
        [DisplayName("Bairro"), Size(100)]
        public String Bairro { get { return Fields.Bairro[this]; } set { Fields.Bairro[this] = value; } }
        public partial class RowFields { public StringField Bairro; }
        #endregion Bairro

        #region Cidade
        [DisplayName("Cidade"), Size(100)]
        public String Cidade { get { return Fields.Cidade[this]; } set { Fields.Cidade[this] = value; } }
        public partial class RowFields { public StringField Cidade; }
        #endregion Cidade

        #region Codigo Ibge Cidade
        [DisplayName("Código Ibge Cidade"), Column("CodigoIBGECidade"), Size(10), ReadOnly(true)]
        public String CodigoIbgeCidade { get { return Fields.CodigoIbgeCidade[this]; } set { Fields.CodigoIbgeCidade[this] = value; } }
        public partial class RowFields { public StringField CodigoIbgeCidade; }
        #endregion CodigoIbgeCidade

        #region Estado
        [DisplayName("Estado (UF)"), Size(2)]
        public String Estado { get { return Fields.Estado[this]; } set { Fields.Estado[this] = value; } }
        public partial class RowFields { public StringField Estado; }
        #endregion Estado

        #region Codigo Ibge Estado
        [DisplayName("Código Ibge Estado"), Column("CodigoIBGEEstado"), Size(10), ReadOnly(true)]
        public String CodigoIbgeEstado { get { return Fields.CodigoIbgeEstado[this]; } set { Fields.CodigoIbgeEstado[this] = value; } }
        public partial class RowFields { public StringField CodigoIbgeEstado; }
        #endregion CodigoIbgeEstado

        #region Pais
        [DisplayName("País"), Size(100)]
        public String Pais { get { return Fields.Pais[this]; } set { Fields.Pais[this] = value; } }
        public partial class RowFields { public StringField Pais; }
        #endregion Pais

        #region Cep
        [DisplayName("CEP"), Column("CEP"), Size(9), MaskedEditor(Mask = "99999-999"), Placeholder("CEP")]
        public String Cep { get { return Fields.Cep[this]; } set { Fields.Cep[this] = value; } }
        public partial class RowFields { public StringField Cep; }
        #endregion Cep

        #region Referencia
        [DisplayName("Referência"), Size(300), Placeholder("Referência")]
        public String Referencia { get { return Fields.Referencia[this]; } set { Fields.Referencia[this] = value; } }
        public partial class RowFields { public StringField Referencia; }
        #endregion Referencia

        #region Observacao
        [DisplayName("Observação"), Size(200), TextAreaEditor(Rows = 4), Placeholder("Observação")]
        public String Observacao { get { return Fields.Observacao[this]; } set { Fields.Observacao[this] = value; } }
        public partial class RowFields { public StringField Observacao; }
        #endregion Observacao

        #region Latitude
        [DisplayName("Latitude"), Size(200), ReadOnly(true)]
        public String Latitude { get { return Fields.Latitude[this]; } set { Fields.Latitude[this] = value; } }
        public partial class RowFields { public StringField Latitude; }
        #endregion Latitude

        #region Longitude
        [DisplayName("Longitude"), Size(200), ReadOnly(true)]
        public String Longitude { get { return Fields.Longitude[this]; } set { Fields.Longitude[this] = value; } }
        public partial class RowFields { public StringField Longitude; }
        #endregion Longitude


        #region Foreign Fields


        [DisplayName("Tipo Endereco"), Expression("jTipoEndereco.[TipoEndereco]")]
        public String TipoEndereco { get { return Fields.TipoEndereco[this]; } set { Fields.TipoEndereco[this] = value; } }
        public partial class RowFields { public StringField TipoEndereco; }


        [DisplayName("Tipo Endereco Pessoa Fisica"), Expression("jTipoEndereco.[PessoaFisica]")]
        public Boolean? TipoEnderecoPessoaFisica { get { return Fields.TipoEnderecoPessoaFisica[this]; } set { Fields.TipoEnderecoPessoaFisica[this] = value; } }
        public partial class RowFields { public BooleanField TipoEnderecoPessoaFisica; }


        [DisplayName("Tipo Endereco Ordem"), Expression("jTipoEndereco.[Ordem]")]
        public Int32? TipoEnderecoOrdem { get { return Fields.TipoEnderecoOrdem[this]; } set { Fields.TipoEnderecoOrdem[this] = value; } }
        public partial class RowFields { public Int32Field TipoEnderecoOrdem; }


        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.EnderecoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Rua; }
        }
        #endregion Id and Name fields

        #region Constructor
        public EnderecosRow()
        : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public const string TableName = "[dbo].[Enderecos]";

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
            : base("[dbo].[Enderecos]")
            {
                LocalTextPrefix = "Clinica.Enderecos";
            }
        }
        #endregion RowFields
    }
}
