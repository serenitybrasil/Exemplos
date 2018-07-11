
namespace Exemplos.Clinica.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ConnectionKey("Exemplos"), TableName(TableName)]
    [DisplayName("Fornecedores"), InstanceName("Fornecedores"), TwoLevelCached]
    [ReadPermission("Clinica:Fornecedores:Read")]
    [InsertPermission("Clinica:Fornecedores:Insert")]
    [UpdatePermission("Clinica:Fornecedores:Update")]
    [DeletePermission("Clinica:Fornecedores:Delete")]
    [LookupScript("Clinica.Fornecedores")]
    public sealed class FornecedoresRow : Row, IIdRow, INameRow
    {
        #region Fornecedor Id
        [DisplayName("Fornecedor Id"), Column("FornecedorID"), Identity, Placeholder("ID do Fornecedor")]
        public Int32? FornecedorId { get { return Fields.FornecedorId[this]; } set { Fields.FornecedorId[this] = value; } }
        public partial class RowFields { public Int32Field FornecedorId; }
        #endregion FornecedorId

        #region Status
        [DisplayName("Status"), Placeholder("Se é um fornecedor ativo ou nao")]
        public Boolean? Status { get { return Fields.Status[this]; } set { Fields.Status[this] = value; } }
        public partial class RowFields { public BooleanField Status; }
        #endregion Status

        #region Pessoa Juridica
        [DisplayName("Pessoa Juridica"), Placeholder("Se for PJ, logo é Verdadeiro, Se for PF logo é falso")]
        public Boolean? PessoaJuridica { get { return Fields.PessoaJuridica[this]; } set { Fields.PessoaJuridica[this] = value; } }
        public partial class RowFields { public BooleanField PessoaJuridica; }
        #endregion PessoaJuridica

        #region Razão Social
        [DisplayName("Razão Social"), Size(255), NotNull, QuickSearch, Placeholder("Digitaçao do nome do cliente em caso PF ou Razão Social em caso de PJ"), TextAreaEditor(Rows = 4)]
        public String RazaoSocial { get { return Fields.RazaoSocial[this]; } set { Fields.RazaoSocial[this] = value; } }
        public partial class RowFields { public StringField RazaoSocial; }
        #endregion RazaoSocial

        #region Nome Fantasia
        [DisplayName("Nome Fantasia"), Size(255), Placeholder("Digitação do Nome Fantasia do cliente em caso de PJ"), TextAreaEditor(Rows = 4)]
        public String NomeFantasia { get { return Fields.NomeFantasia[this]; } set { Fields.NomeFantasia[this] = value; } }
        public partial class RowFields { public StringField NomeFantasia; }
        #endregion NomeFantasia

        #region Nome Abreviado
        [DisplayName("Nome Abreviado"), Size(100), Placeholder("Nome abreviado para esse fornecedor")]
        public String NomeAbreviado { get { return Fields.NomeAbreviado[this]; } set { Fields.NomeAbreviado[this] = value; } }
        public partial class RowFields { public StringField NomeAbreviado; }
        #endregion NomeAbreviado

        #region CPF
        [DisplayName("CPF"), Column("CPF"), Size(14), MaskedEditor(Mask = "999.999.999-99"), Placeholder("Se o cliente for PF, necessário o campo")]
        public String Cpf { get { return Fields.Cpf[this]; } set { Fields.Cpf[this] = value; } }
        public partial class RowFields { public StringField Cpf; }
        #endregion Cpf

        #region Rg
        [DisplayName("Rg"), Column("RG"), Size(20), Placeholder("Se o cliente for PF, necessário o campo")]
        public String Rg { get { return Fields.Rg[this]; } set { Fields.Rg[this] = value; } }
        public partial class RowFields { public StringField Rg; }
        #endregion Rg

        #region CNPJ
        [DisplayName("CNPJ"), Column("CNPJ"), Size(18), MaskedEditor(Mask = "99.999.999/9999-99"), Placeholder("digitação do CNPJ em caso de cliente PJ")]
        public String Cnpj { get { return Fields.Cnpj[this]; } set { Fields.Cnpj[this] = value; } }
        public partial class RowFields { public StringField Cnpj; }
        #endregion Cnpj

        #region Inscrição Estadual
        [DisplayName("Inscrição Estadual"), Size(200), Placeholder("Campo para digitação em caso de PJ e também poderá ter a frase isento"), TextAreaEditor(Rows = 4)]
        public String InscricaoEstadual { get { return Fields.InscricaoEstadual[this]; } set { Fields.InscricaoEstadual[this] = value; } }
        public partial class RowFields { public StringField InscricaoEstadual; }
        #endregion InscricaoEstadual

        #region Inscrição Municipal
        [DisplayName("Inscrição Municipal"), Size(200), Placeholder("Campo para digitação em caso de PJ e também poderá ter a frase isento"), TextAreaEditor(Rows = 4)]
        public String InscricaoMunicipal { get { return Fields.InscricaoMunicipal[this]; } set { Fields.InscricaoMunicipal[this] = value; } }
        public partial class RowFields { public StringField InscricaoMunicipal; }
        #endregion InscricaoMunicipal

        #region Site
        [DisplayName("Site"), Size(200), Placeholder("Campo para digitação do site"), TextAreaEditor(Rows = 4)]
        public String Site { get { return Fields.Site[this]; } set { Fields.Site[this] = value; } }
        public partial class RowFields { public StringField Site; }
        #endregion Site

        #region Tel.
        [DisplayName("Tel."), Size(200), Placeholder("campo para digitação do telefone"), TextAreaEditor(Rows = 4)]
        public String Telefone { get { return Fields.Telefone[this]; } set { Fields.Telefone[this] = value; } }
        public partial class RowFields { public StringField Telefone; }
        #endregion Telefone

        #region Fax
        [DisplayName("Fax"), Size(200), Placeholder("campo para digitação do fax"), TextAreaEditor(Rows = 4)]
        public String Fax { get { return Fields.Fax[this]; } set { Fields.Fax[this] = value; } }
        public partial class RowFields { public StringField Fax; }
        #endregion Fax

        #region Tel. Alternativo
        [DisplayName("Tel. Alternativo"), Size(200), Placeholder("campo para digitação do telefone alternativo"), TextAreaEditor(Rows = 4)]
        public String TelefoneAlternativo { get { return Fields.TelefoneAlternativo[this]; } set { Fields.TelefoneAlternativo[this] = value; } }
        public partial class RowFields { public StringField TelefoneAlternativo; }
        #endregion TelefoneAlternativo

        #region E-mail Corporativo
        [DisplayName("E-mail Corporativo"), Size(200), Placeholder("campo para digitação do email corporativo"), TextAreaEditor(Rows = 4)]
        public String EmailCorporativo { get { return Fields.EmailCorporativo[this]; } set { Fields.EmailCorporativo[this] = value; } }
        public partial class RowFields { public StringField EmailCorporativo; }
        #endregion EmailCorporativo

        #region Aceita Receber E-mail
        [DisplayName("Aceita Receber E-mail"), Placeholder("Se o fornecedor aceita receber e-mails da Pacific Web ou não (pode ser propaganda, aviso, etc)")]
        public Boolean? AceitaReceberEmail { get { return Fields.AceitaReceberEmail[this]; } set { Fields.AceitaReceberEmail[this] = value; } }
        public partial class RowFields { public BooleanField AceitaReceberEmail; }
        #endregion AceitaReceberEmail

        #region Motivo Status
        [DisplayName("Motivo Status"), Size(500), Placeholder("motivo do fornecedor estar inativo"), TextAreaEditor(Rows = 4)]
        public String MotivoStatus { get { return Fields.MotivoStatus[this]; } set { Fields.MotivoStatus[this] = value; } }
        public partial class RowFields { public StringField MotivoStatus; }
        #endregion MotivoStatus

        #region Quantidade Empregados
        [DisplayName("Quantidade Empregados"), Placeholder("Quantidade de Funcionarios")]
        public Int32? QuantidadeEmpregados { get { return Fields.QuantidadeEmpregados[this]; } set { Fields.QuantidadeEmpregados[this] = value; } }
        public partial class RowFields { public Int32Field QuantidadeEmpregados; }
        #endregion QuantidadeEmpregados

        #region Atividade Empresa Id
        [DisplayName("Atividade Empresa Id"), Column("AtividadeEmpresaID"), Placeholder("Ramo de atividade do fornecedor")]
        public Int32? AtividadeEmpresaId { get { return Fields.AtividadeEmpresaId[this]; } set { Fields.AtividadeEmpresaId[this] = value; } }
        public partial class RowFields { public Int32Field AtividadeEmpresaId; }
        #endregion AtividadeEmpresaId

        #region Receita Anual
        [DisplayName("Receita Anual"), Size(18), Scale(2), Placeholder("Faturamento anual do fornecedor")]
        public Decimal? ReceitaAnual { get { return Fields.ReceitaAnual[this]; } set { Fields.ReceitaAnual[this] = value; } }
        public partial class RowFields { public DecimalField ReceitaAnual; }
        #endregion ReceitaAnual

        #region Marcas Trabalhadas
        [DisplayName("Marcas Trabalhadas"), Size(200), Placeholder("Quais marcas o fornecedor trabalha"), TextAreaEditor(Rows = 4)]
        public String MarcasTrabalhadas { get { return Fields.MarcasTrabalhadas[this]; } set { Fields.MarcasTrabalhadas[this] = value; } }
        public partial class RowFields { public StringField MarcasTrabalhadas; }
        #endregion MarcasTrabalhadas

        #region Observações Gerais
        [DisplayName("Observações Gerais"), Size(500), Placeholder("Observações relevantes do fornecedor"), TextAreaEditor(Rows = 4)]
        public String ObservacoesGerais { get { return Fields.ObservacoesGerais[this]; } set { Fields.ObservacoesGerais[this] = value; } }
        public partial class RowFields { public StringField ObservacoesGerais; }
        #endregion ObservacoesGerais

        #region Data Criação
        [DisplayName("Data Criação"), Placeholder("Data da Criação do fornecedor no sistema"), DateTimeEditor]
        public DateTime? DataCriacao { get { return Fields.DataCriacao[this]; } set { Fields.DataCriacao[this] = value; } }
        public partial class RowFields { public DateTimeField DataCriacao; }
        #endregion DataCriacao

        #region Data Alteração
        [DisplayName("Data Alteração"), Placeholder("Data de alteração do fornecedor no sistema"), DateTimeEditor]
        public DateTime? DataAlteracao { get { return Fields.DataAlteracao[this]; } set { Fields.DataAlteracao[this] = value; } }
        public partial class RowFields { public DateTimeField DataAlteracao; }
        #endregion DataAlteracao

        #region Inativo
        [DisplayName("Inativo"), Placeholder("Se está inativo ou não")]
        public Boolean? Inativo { get { return Fields.Inativo[this]; } set { Fields.Inativo[this] = value; } }
        public partial class RowFields { public BooleanField Inativo; }
        #endregion Inativo

        #region Data Inativo
        [DisplayName("Data Inativo"), Placeholder("Data da Inativação desse dado no sistema"), DateTimeEditor]
        public DateTime? DataInativo { get { return Fields.DataInativo[this]; } set { Fields.DataInativo[this] = value; } }
        public partial class RowFields { public DateTimeField DataInativo; }
        #endregion DataInativo

        #region MasterDetail

        #region MasterDetail - ContatosList
        [MasterDetailRelation(foreignKey: "FornecedorID", IncludeColumns = "TipoContato, TipoMeioContato")]
        [DisplayName("Contatos"), NotMapped]
        public List<ContatosRow> ContatosList
        {
            get { return Fields.ContatosList[this]; }
            set { Fields.ContatosList[this] = value; }
        }
        public partial class RowFields { public readonly RowListField<ContatosRow> ContatosList; }
        #endregion

        #region MasterDetail - EnderecosList
        [MasterDetailRelation(foreignKey: "FornecedorID", IncludeColumns = "TipoEndereco")]
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

        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.FornecedorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RazaoSocial; }
        }
        #endregion Id and Name fields

        #region Constructor
        public FornecedoresRow()
        : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public const string TableName = "[dbo].[Fornecedores]";

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
            : base("[dbo].[Fornecedores]")
            {
                LocalTextPrefix = "Clinica.Fornecedores";
            }
        }
        #endregion RowFields
    }
}
