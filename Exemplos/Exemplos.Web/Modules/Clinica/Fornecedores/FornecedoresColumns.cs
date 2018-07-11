
namespace Exemplos.Clinica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Clinica.Fornecedores")]
    [BasedOnRow(typeof(Entities.FornecedoresRow))]
    public class FornecedoresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 FornecedorId { get; set; }
        public Boolean Status { get; set; }
        public Boolean PessoaJuridica { get; set; }
        [EditLink]
        public String RazaoSocial { get; set; }
        public String NomeFantasia { get; set; }
        public String NomeAbreviado { get; set; }
        public String Cpf { get; set; }
        public String Rg { get; set; }
        public String Cnpj { get; set; }
        public String InscricaoEstadual { get; set; }
        public String InscricaoMunicipal { get; set; }
        public String Site { get; set; }
        public String Telefone { get; set; }
        public String Fax { get; set; }
        public String TelefoneAlternativo { get; set; }
        public String EmailCorporativo { get; set; }
        public Boolean AceitaReceberEmail { get; set; }
        public String MotivoStatus { get; set; }
        public Int32 QuantidadeEmpregados { get; set; }
        public Int32 AtividadeEmpresaId { get; set; }
        [DisplayFormat("#,##0.00"), AlignRight]
        public Decimal ReceitaAnual { get; set; }
        public String MarcasTrabalhadas { get; set; }
        public String ObservacoesGerais { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataAlteracao { get; set; }
        public Boolean Inativo { get; set; }
        public DateTime DataInativo { get; set; }
    }
}