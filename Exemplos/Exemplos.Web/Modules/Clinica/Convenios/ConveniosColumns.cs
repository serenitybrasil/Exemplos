
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.Convenios")]
    [BasedOnRow(typeof(Entities.ConveniosRow))]
    public class ConveniosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ConvenioId { get; set; }
        [EditLink]
        public String Cnpj { get; set; }
        public String RazaoSocial { get; set; }
        public String NomeFantasia { get; set; }
        public String CodigoAns { get; set; }
        public String CadastroConvenio { get; set; }
        public String Logo { get; set; }
        public String InscricaoMunicipal { get; set; }
        public String InscricaoEstadual { get; set; }
        public String Site { get; set; }
        public DateTime DataInicio { get; set; }
        public Boolean Inativo { get; set; }
        public DateTime DataFim { get; set; }
        public String MotivoCancelamento { get; set; }
        public String Observacao { get; set; }
        public String VersaoTiss { get; set; }
        public String WebService { get; set; }
        public String SadtSolContratadoId { get; set; }
        public String SadtExecutanteId { get; set; }
        public String SadtProfissionalexecutante { get; set; }
        public String SadtMembroEquipe { get; set; }
        public String IdOrigem { get; set; }
        public String IdDestino { get; set; }
        public String OrigemIdPrestador { get; set; }
        public String DestinoIdPrestador { get; set; }
        public Int32 IdLogo { get; set; }
        public Boolean GeraTiss { get; set; }
        public DateTime DataCadastro { get; set; }
        public DateTime DataUltimaAtualizacao { get; set; }
        public String Latitude { get; set; }
        public String Longitude { get; set; }
        public String EmailNotaFiscal { get; set; }
        public String EmailContato { get; set; }
        public String EmailFaturamento { get; set; }
        public String EmailGlosa { get; set; }
    }
}