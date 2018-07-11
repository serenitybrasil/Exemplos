
namespace Exemplos.Clinica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Clinica.Fornecedores")]
    [BasedOnRow(typeof(Entities.FornecedoresRow))]
    public class FornecedoresForm
    {        
        public Boolean Status { get; set; }        
        public Boolean PessoaJuridica { get; set; }        
        public String RazaoSocial { get; set; }        
        public String NomeFantasia { get; set; }        
        public String NomeAbreviado { get; set; }        
        [MaskedEditor(Mask = "999.999.999-99")]
        public String Cpf { get; set; }        
        public String Rg { get; set; }        
        [MaskedEditor(Mask = "99.999.999/9999-99")]
        public String Cnpj { get; set; }        
        public String InscricaoEstadual { get; set; }        
        public String InscricaoMunicipal { get; set; }        
        public String Site { get; set; }        
        [MaskedEditor(Mask = "(99)9999-9999")]
        public String Telefone { get; set; }        
        public String Fax { get; set; }        
        [MaskedEditor(Mask = "(99)9999-9999")]
        public String TelefoneAlternativo { get; set; }        
        [EmailEditor]
        public String EmailCorporativo { get; set; }        
        public Boolean AceitaReceberEmail { get; set; }        
        public String MotivoStatus { get; set; }        
        public Int32 QuantidadeEmpregados { get; set; }        
        public Int32 AtividadeEmpresaId { get; set; }        
        public Decimal ReceitaAnual { get; set; }        
        public String MarcasTrabalhadas { get; set; }        
        public String ObservacoesGerais { get; set; }        
        public DateTime DataCriacao { get; set; }        
        public DateTime DataAlteracao { get; set; }        
        public Boolean Inativo { get; set; }        
        public DateTime DataInativo { get; set; }

        [Category("Contatos")]
        //[ContatosEditor]
        public List<Entities.ContatosRow> ContatosList { get; set; }

        [Category("Endereços")]
        //[EnderecosEditor]
        public List<Entities.EnderecosRow> EnderecosList { get; set; }
    }
}