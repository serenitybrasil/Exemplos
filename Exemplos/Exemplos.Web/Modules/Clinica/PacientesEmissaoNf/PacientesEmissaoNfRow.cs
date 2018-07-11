
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
    [DisplayName("Pacientes Emissão NF"), InstanceName("Pacientes Emissão NF"), TwoLevelCached]
    [ReadPermission("Clinica:PacientesEmissaoNF:Read")]
    [InsertPermission("Clinica:PacientesEmissaoNF:Insert")]
    [UpdatePermission("Clinica:PacientesEmissaoNF:Update")]
    [DeletePermission("Clinica:PacientesEmissaoNF:Delete")]
    [LookupScript("Clinica.PacientesEmissaoNf")]
    public sealed class PacientesEmissaoNfRow : Row, IIdRow, INameRow
    {
        #region Paciente Emissão NF
        [DisplayName("Paciente Emissão NF"), Column("PacienteEmissaoNF"), Identity, Placeholder("Código do responsável da NF do Paciente")]
        public Int32? PacienteEmissaoNf { get { return Fields.PacienteEmissaoNf[this]; } set { Fields.PacienteEmissaoNf[this] = value; } }
        public partial class RowFields { public Int32Field PacienteEmissaoNf; }
        #endregion PacienteEmissaoNf

        #region Paciente
        [DisplayName("Paciente"), Column("PacienteID"), NotNull, ForeignKey("[dbo].[Pacientes]", "PacienteID"), LeftJoin("jPaciente"), TextualField("PacienteMatricula"), Placeholder("Código do Paciente")]
        [LookupEditor(typeof(Clinica.Entities.PacientesRow), InplaceAdd = true)]
        public Int32? PacienteId { get { return Fields.PacienteId[this]; } set { Fields.PacienteId[this] = value; } }
        public partial class RowFields { public Int32Field PacienteId; }
        #endregion PacienteId

        #region Nome Responsável
        [DisplayName("Nome Responsável"), Size(100), QuickSearch, Placeholder("Responsável para quem a NF será emitida")]
        public String NomeResponsavel { get { return Fields.NomeResponsavel[this]; } set { Fields.NomeResponsavel[this] = value; } }
        public partial class RowFields { public StringField NomeResponsavel; }
        #endregion NomeResponsavel

        #region Pessoa Juridica
        [DisplayName("Pessoa Jurídica"), Hint("Se a NF é para pessoa Física (0) ou Jurídica (1)"), DefaultValue(false)]
        public Boolean? PessoaJuridica { get { return Fields.PessoaJuridica[this]; } set { Fields.PessoaJuridica[this] = value; } }
        public partial class RowFields { public BooleanField PessoaJuridica; }
        #endregion PessoaJuridica

        #region CPF Responsável
        [DisplayName("CPF Responsável"), Column("CPFResponsavel"), Size(14), Placeholder("Nº CPF do Responsável"), MaskedEditor(Mask = "999.999.999-99")]
        public String CpfResponsavel { get { return Fields.CpfResponsavel[this]; } set { Fields.CpfResponsavel[this] = value; } }
        public partial class RowFields { public StringField CpfResponsavel; }
        #endregion CpfResponsavel

        #region CNPJ Responsável
        [DisplayName("CNPJ Responsável"), Column("CNPJResponsavel"), Size(18), Placeholder("Nº CNPJ para recebimento da Nfe"), MaskedEditor(Mask = "99.999.999/9999-99"), Visible(false)]
        public String CnpjResponsavel { get { return Fields.CnpjResponsavel[this]; } set { Fields.CnpjResponsavel[this] = value; } }
        public partial class RowFields { public StringField CnpjResponsavel; }
        #endregion CnpjResponsavel

        #region E-mail NF
        [DisplayName("E-mail NF"), Column("EmailNF"), Size(100), Placeholder("Email para envio da Nota Fiscal")]
        public String EmailNf { get { return Fields.EmailNf[this]; } set { Fields.EmailNf[this] = value; } }
        public partial class RowFields { public StringField EmailNf; }
        #endregion EmailNf

        #region Padrao
        [DisplayName("Padrão"), Hint("Se é o responsável padrão para emissão da NF")]
        public Boolean? Padrao { get { return Fields.Padrao[this]; } set { Fields.Padrao[this] = value; } }
        public partial class RowFields { public BooleanField Padrao; }
        #endregion Padrao

        #region Tipo Endereço
        [DisplayName("Tipo Endereço"), Column("TipoEnderecoID"), ForeignKey("[dbo].[TiposEnderecos]", "TipoEnderecoID"), LeftJoin("jTipoEndereco"), TextualField("TipoEndereco"), Placeholder("Tipo do Endereço (Rua, Avenida, etc..)")]
        [LookupEditor(typeof(Clinica.Entities.TiposEnderecosRow), InplaceAdd = true)]
        public Int32? TipoEnderecoId { get { return Fields.TipoEnderecoId[this]; } set { Fields.TipoEnderecoId[this] = value; } }
        public partial class RowFields { public Int32Field TipoEnderecoId; }
        #endregion TipoEnderecoId

        #region Rua
        [DisplayName("Rua"), Size(200), Placeholder("Digitação do campo rua")]
        public String Rua { get { return Fields.Rua[this]; } set { Fields.Rua[this] = value; } }
        public partial class RowFields { public StringField Rua; }
        #endregion Rua

        #region Número
        [DisplayName("Número"), Size(10), Placeholder("Digitação do campo numero")]
        public String Numero { get { return Fields.Numero[this]; } set { Fields.Numero[this] = value; } }
        public partial class RowFields { public StringField Numero; }
        #endregion Numero

        #region Complemento
        [DisplayName("Complemento"), Size(50), Placeholder("Digitação do campo complemento")]
        public String Complemento { get { return Fields.Complemento[this]; } set { Fields.Complemento[this] = value; } }
        public partial class RowFields { public StringField Complemento; }
        #endregion Complemento

        #region Bairro
        [DisplayName("Bairro"), Size(100), Placeholder("Digitação do campo bairro")]
        public String Bairro { get { return Fields.Bairro[this]; } set { Fields.Bairro[this] = value; } }
        public partial class RowFields { public StringField Bairro; }
        #endregion Bairro

        #region Cidade
        [DisplayName("Cidade"), Size(100), Placeholder("Digitação do campo cidade")]
        public String Cidade { get { return Fields.Cidade[this]; } set { Fields.Cidade[this] = value; } }
        public partial class RowFields { public StringField Cidade; }
        #endregion Cidade

        #region Código Ibge Cidade
        [DisplayName("Código Ibge Cidade"), Column("CodigoIBGECidade"), Size(10), Placeholder("Código do IBGE referente à Cidade (município)")]
        public String CodigoIbgeCidade { get { return Fields.CodigoIbgeCidade[this]; } set { Fields.CodigoIbgeCidade[this] = value; } }
        public partial class RowFields { public StringField CodigoIbgeCidade; }
        #endregion CodigoIbgeCidade

        #region Estado
        [DisplayName("UF"), Size(2), Placeholder("Digitação do campo estado (UF)")]
        public String Estado { get { return Fields.Estado[this]; } set { Fields.Estado[this] = value; } }
        public partial class RowFields { public StringField Estado; }
        #endregion Estado

        #region Código Ibge Estado
        [DisplayName("Código Ibge Estado"), Column("CodigoIBGEEstado"), Size(10), Placeholder("Código do IBGE referente ao Estado (UF)")]
        public String CodigoIbgeEstado { get { return Fields.CodigoIbgeEstado[this]; } set { Fields.CodigoIbgeEstado[this] = value; } }
        public partial class RowFields { public StringField CodigoIbgeEstado; }
        #endregion CodigoIbgeEstado

        #region Pais
        [DisplayName("País"), Size(100), Placeholder("Digitação do campo Pais")]
        public String Pais { get { return Fields.Pais[this]; } set { Fields.Pais[this] = value; } }
        public partial class RowFields { public StringField Pais; }
        #endregion Pais

        #region CEP
        [DisplayName("CEP"), Column("CEP"), MaskedEditor(Mask = "99999-999"), Size(9), Placeholder("Digitação do campo CEP")]
        public String Cep { get { return Fields.Cep[this]; } set { Fields.Cep[this] = value; } }
        public partial class RowFields { public StringField Cep; }
        #endregion Cep

        #region Referência
        [DisplayName("Referência"), Size(300), Placeholder("Referência do endereço"), TextAreaEditor(Rows = 4)]
        public String Referencia { get { return Fields.Referencia[this]; } set { Fields.Referencia[this] = value; } }
        public partial class RowFields { public StringField Referencia; }
        #endregion Referencia


        #region Foreign Fields

        [DisplayName("Paciente Matricula"), Expression("jPaciente.[Matricula]")]
        public String PacienteMatricula { get { return Fields.PacienteMatricula[this]; } set { Fields.PacienteMatricula[this] = value; } }
        public partial class RowFields { public StringField PacienteMatricula; }

        [DisplayName("Paciente"), Expression("jPaciente.[Paciente]")]
        public String Paciente { get { return Fields.Paciente[this]; } set { Fields.Paciente[this] = value; } }
        public partial class RowFields { public StringField Paciente; }

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
            get { return Fields.PacienteEmissaoNf; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NomeResponsavel; }
        }
        #endregion Id and Name fields

        #region Constructor
        public PacientesEmissaoNfRow()
        : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public const string TableName = "[dbo].[PacientesEmissaoNF]";

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
            : base("[dbo].[PacientesEmissaoNF]")
            {
                LocalTextPrefix = "Clinica.PacientesEmissaoNf";
            }
        }
        #endregion RowFields
    }
}
