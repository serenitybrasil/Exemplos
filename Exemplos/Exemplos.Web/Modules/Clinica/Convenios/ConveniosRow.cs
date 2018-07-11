
namespace Exemplos.Clinica.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Exemplos"), TableName(TableName)]
    [DisplayName("Convênios"), InstanceName("Convênios"), TwoLevelCached]
    [ReadPermission("Clinica:Convenios:Read")]
    [InsertPermission("Clinica:Convenios:Insert")]
    [UpdatePermission("Clinica:Convenios:Update")]
    [DeletePermission("Clinica:Convenios:Delete")]
    [LookupScript("Clinica.Convenios")]
    public sealed class ConveniosRow : Row, IIdRow, INameRow
    {
        #region Convênio Id
        [DisplayName("Convênio Id"), Column("ConvenioID"), Identity, Placeholder("Código do Convênio"), LookupInclude]
        public Int32? ConvenioId { get { return Fields.ConvenioId[this]; } set { Fields.ConvenioId[this] = value; } }
        public partial class RowFields { public Int32Field ConvenioId; }
        #endregion ConvenioId

        #region CNPJ
        [DisplayName("CNPJ"), Column("CNPJ"), Size(18), MaskedEditor(Mask = "99.999.999/9999-99"), QuickSearch, Placeholder("CNPJ")]
        public String Cnpj { get { return Fields.Cnpj[this]; } set { Fields.Cnpj[this] = value; } }
        public partial class RowFields { public StringField Cnpj; }
        #endregion Cnpj

        #region Razão Social
        [DisplayName("Razão Social"), Size(100), Placeholder("Razão Social"), LookupInclude]
        public String RazaoSocial { get { return Fields.RazaoSocial[this]; } set { Fields.RazaoSocial[this] = value; } }
        public partial class RowFields { public StringField RazaoSocial; }
        #endregion RazaoSocial

        #region Nome Fantasia
        [DisplayName("Nome Fantasia"), Size(100), Placeholder("Nome Fantasia")]
        public String NomeFantasia { get { return Fields.NomeFantasia[this]; } set { Fields.NomeFantasia[this] = value; } }
        public partial class RowFields { public StringField NomeFantasia; }
        #endregion NomeFantasia

        #region Código Ans
        [DisplayName("Código Ans"), Column("CodigoANS"), Size(100), Placeholder("Código ANS do Convênio")]
        public String CodigoAns { get { return Fields.CodigoAns[this]; } set { Fields.CodigoAns[this] = value; } }
        public partial class RowFields { public StringField CodigoAns; }
        #endregion CodigoAns

        #region Cadastro Convênio
        [DisplayName("Cadastro Convênio"), Size(50), Placeholder("Nº do Cadastro da Clínica no Convênio")]
        public String CadastroConvenio { get { return Fields.CadastroConvenio[this]; } set { Fields.CadastroConvenio[this] = value; } }
        public partial class RowFields { public StringField CadastroConvenio; }
        #endregion CadastroConvenio

        #region Logo
        [DisplayName("Logo"), Size(100), Placeholder("Logotipo do Convênio")]
        public String Logo { get { return Fields.Logo[this]; } set { Fields.Logo[this] = value; } }
        public partial class RowFields { public StringField Logo; }
        #endregion Logo

        #region Inscrição Municipal
        [DisplayName("Inscrição Municipal"), Size(50), Placeholder("Inscrição Municipal")]
        public String InscricaoMunicipal { get { return Fields.InscricaoMunicipal[this]; } set { Fields.InscricaoMunicipal[this] = value; } }
        public partial class RowFields { public StringField InscricaoMunicipal; }
        #endregion InscricaoMunicipal

        #region Inscrição Estadual
        [DisplayName("Inscrição Estadual"), Size(50), Placeholder("Inscrição Estadual")]
        public String InscricaoEstadual { get { return Fields.InscricaoEstadual[this]; } set { Fields.InscricaoEstadual[this] = value; } }
        public partial class RowFields { public StringField InscricaoEstadual; }
        #endregion InscricaoEstadual

        #region Site
        [DisplayName("Site"), Size(50), Placeholder("Site")]
        public String Site { get { return Fields.Site[this]; } set { Fields.Site[this] = value; } }
        public partial class RowFields { public StringField Site; }
        #endregion Site

        #region Data Início
        [DisplayName("Data Início"), Placeholder("Data Início do Convênio"), DateTimeEditor]
        public DateTime? DataInicio { get { return Fields.DataInicio[this]; } set { Fields.DataInicio[this] = value; } }
        public partial class RowFields { public DateTimeField DataInicio; }
        #endregion DataInicio

        #region Inativo
        [DisplayName("Inativo"), Placeholder("Se o convênio está ativo (0) ou inativo (1)"), LookupInclude]
        public Boolean? Inativo { get { return Fields.Inativo[this]; } set { Fields.Inativo[this] = value; } }
        public partial class RowFields { public BooleanField Inativo; }
        #endregion Inativo

        #region Data Fim
        [DisplayName("Data Fim"), Placeholder("Data Fim do Convênio"), DateTimeEditor]
        public DateTime? DataFim { get { return Fields.DataFim[this]; } set { Fields.DataFim[this] = value; } }
        public partial class RowFields { public DateTimeField DataFim; }
        #endregion DataFim

        #region Motivo Cancelamento
        [DisplayName("Motivo Cancelamento"), Size(2000), Placeholder("Motivo do Cancelamento"), TextAreaEditor(Rows = 4)]
        public String MotivoCancelamento { get { return Fields.MotivoCancelamento[this]; } set { Fields.MotivoCancelamento[this] = value; } }
        public partial class RowFields { public StringField MotivoCancelamento; }
        #endregion MotivoCancelamento

        #region Observação
        [DisplayName("Observação"), Size(2000), Placeholder("Observações Diversas"), TextAreaEditor(Rows = 4)]
        public String Observacao { get { return Fields.Observacao[this]; } set { Fields.Observacao[this] = value; } }
        public partial class RowFields { public StringField Observacao; }
        #endregion Observacao

        #region Versão TISS
        [DisplayName("Versão TISS"), Column("VersaoTISS"), Size(100), Placeholder("Versão da TISS atualmente utilizado")]
        public String VersaoTiss { get { return Fields.VersaoTiss[this]; } set { Fields.VersaoTiss[this] = value; } }
        public partial class RowFields { public StringField VersaoTiss; }
        #endregion VersaoTiss

        #region Web Service
        [DisplayName("Web Service"), Size(100), Placeholder("WebService de Autorização do Convênio")]
        public String WebService { get { return Fields.WebService[this]; } set { Fields.WebService[this] = value; } }
        public partial class RowFields { public StringField WebService; }
        #endregion WebService

        #region Sadt Sol Contratado Id
        [DisplayName("Sadt Sol Contratado Id"), Column("SADT_SOL_CONTRATADO_ID"), Size(30)]
        public String SadtSolContratadoId { get { return Fields.SadtSolContratadoId[this]; } set { Fields.SadtSolContratadoId[this] = value; } }
        public partial class RowFields { public StringField SadtSolContratadoId; }
        #endregion SadtSolContratadoId

        #region Sadt Executante Id
        [DisplayName("Sadt Executante Id"), Column("SADT_EXECUTANTE_ID"), Size(30)]
        public String SadtExecutanteId { get { return Fields.SadtExecutanteId[this]; } set { Fields.SadtExecutanteId[this] = value; } }
        public partial class RowFields { public StringField SadtExecutanteId; }
        #endregion SadtExecutanteId

        #region Sadt Profissionalexecutante
        [DisplayName("Sadt Profissionalexecutante"), Column("SADT_PROFISSIONALEXECUTANTE"), Size(30)]
        public String SadtProfissionalexecutante { get { return Fields.SadtProfissionalexecutante[this]; } set { Fields.SadtProfissionalexecutante[this] = value; } }
        public partial class RowFields { public StringField SadtProfissionalexecutante; }
        #endregion SadtProfissionalexecutante

        #region Sadt Membro Equipe
        [DisplayName("Sadt Membro Equipe"), Column("SADT_MEMBRO_EQUIPE"), Size(30)]
        public String SadtMembroEquipe { get { return Fields.SadtMembroEquipe[this]; } set { Fields.SadtMembroEquipe[this] = value; } }
        public partial class RowFields { public StringField SadtMembroEquipe; }
        #endregion SadtMembroEquipe

        #region Id Origem
        [DisplayName("Id Origem"), Column("ID_ORIGEM"), Size(30)]
        public String IdOrigem { get { return Fields.IdOrigem[this]; } set { Fields.IdOrigem[this] = value; } }
        public partial class RowFields { public StringField IdOrigem; }
        #endregion IdOrigem

        #region Id Destino
        [DisplayName("Id Destino"), Column("ID_DESTINO"), Size(30)]
        public String IdDestino { get { return Fields.IdDestino[this]; } set { Fields.IdDestino[this] = value; } }
        public partial class RowFields { public StringField IdDestino; }
        #endregion IdDestino

        #region Origem Id Prestador
        [DisplayName("Origem Id Prestador"), Column("ORIGEM_ID_PRESTADOR"), Size(30)]
        public String OrigemIdPrestador { get { return Fields.OrigemIdPrestador[this]; } set { Fields.OrigemIdPrestador[this] = value; } }
        public partial class RowFields { public StringField OrigemIdPrestador; }
        #endregion OrigemIdPrestador

        #region Destino Id Prestador
        [DisplayName("Destino Id Prestador"), Column("DESTINO_ID_PRESTADOR"), Size(30)]
        public String DestinoIdPrestador { get { return Fields.DestinoIdPrestador[this]; } set { Fields.DestinoIdPrestador[this] = value; } }
        public partial class RowFields { public StringField DestinoIdPrestador; }
        #endregion DestinoIdPrestador

        #region Id Logo
        [DisplayName("Id Logo"), Column("ID_LOGO")]
        public Int32? IdLogo { get { return Fields.IdLogo[this]; } set { Fields.IdLogo[this] = value; } }
        public partial class RowFields { public Int32Field IdLogo; }
        #endregion IdLogo

        #region Gera TISS
        [DisplayName("Gera TISS"), Column("GERA_TISS")]
        public Boolean? GeraTiss { get { return Fields.GeraTiss[this]; } set { Fields.GeraTiss[this] = value; } }
        public partial class RowFields { public BooleanField GeraTiss; }
        #endregion GeraTiss

        #region Data Cadastro
        [DisplayName("Data Cadastro"), Placeholder("Data do Cadatro das informações de Convênio"), ReadOnly(true), DefaultValue("now"), Updatable(false), DateTimeEditor]
        public DateTime? DataCadastro { get { return Fields.DataCadastro[this]; } set { Fields.DataCadastro[this] = value; } }
        public partial class RowFields { public DateTimeField DataCadastro; }
        #endregion DataCadastro

        #region Data Última Atualização
        [DisplayName("Data Última Atualização"), Placeholder("Data da Última Atualização desse Cadastro"), ReadOnly(true), DateTimeEditor]
        public DateTime? DataUltimaAtualizacao { get { return Fields.DataUltimaAtualizacao[this]; } set { Fields.DataUltimaAtualizacao[this] = value; } }
        public partial class RowFields { public DateTimeField DataUltimaAtualizacao; }
        #endregion DataUltimaAtualizacao

        #region Latitude
        [DisplayName("Latitude"), Size(200), Placeholder("Latitude do Convênio"), TextAreaEditor(Rows = 4)]
        public String Latitude { get { return Fields.Latitude[this]; } set { Fields.Latitude[this] = value; } }
        public partial class RowFields { public StringField Latitude; }
        #endregion Latitude

        #region Longitude
        [DisplayName("Longitude"), Size(200), Placeholder("Longitude do Convênio"), TextAreaEditor(Rows = 4)]
        public String Longitude { get { return Fields.Longitude[this]; } set { Fields.Longitude[this] = value; } }
        public partial class RowFields { public StringField Longitude; }
        #endregion Longitude

        #region E-mail Nota Fiscal
        [DisplayName("E-mail Nota Fiscal"), Size(100), Placeholder("Email para envio da Nota Fiscal")]
        public String EmailNotaFiscal { get { return Fields.EmailNotaFiscal[this]; } set { Fields.EmailNotaFiscal[this] = value; } }
        public partial class RowFields { public StringField EmailNotaFiscal; }
        #endregion EmailNotaFiscal

        #region E-mail Contato
        [DisplayName("E-mail Contato"), Size(100), Placeholder("Email para contato geral")]
        public String EmailContato { get { return Fields.EmailContato[this]; } set { Fields.EmailContato[this] = value; } }
        public partial class RowFields { public StringField EmailContato; }
        #endregion EmailContato

        #region E-mail Faturamento
        [DisplayName("E-mail Faturamento"), Size(100), Placeholder("Email para faturamento")]
        public String EmailFaturamento { get { return Fields.EmailFaturamento[this]; } set { Fields.EmailFaturamento[this] = value; } }
        public partial class RowFields { public StringField EmailFaturamento; }
        #endregion EmailFaturamento

        #region E-mail Glosa
        [DisplayName("E-mail Glosa"), Size(100), Placeholder("Email para envio do Recurso de Glosa")]
        public String EmailGlosa { get { return Fields.EmailGlosa[this]; } set { Fields.EmailGlosa[this] = value; } }
        public partial class RowFields { public StringField EmailGlosa; }
        #endregion EmailGlosa


        #region MasterDetail

        #region MasterDetail - ContatosList
        [MasterDetailRelation(foreignKey: "ConvenioId", IncludeColumns = "TipoContato, TipoMeioContato")]
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
        [MasterDetailRelation(foreignKey: "ConvenioId", IncludeColumns = "TipoEndereco")]
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
            get { return Fields.ConvenioId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NomeFantasia; }
        }
        #endregion Id and Name fields

        #region Constructor
        public ConveniosRow()
        : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public const string TableName = "[dbo].[Convenios]";

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
            : base("[dbo].[Convenios]")
            {
                LocalTextPrefix = "Clinica.Convenios";
            }
        }
        #endregion RowFields
    }
}
