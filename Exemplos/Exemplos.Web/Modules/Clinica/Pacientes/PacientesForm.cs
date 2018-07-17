
namespace Exemplos.Clinica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Clinica.Pacientes")]
    [BasedOnRow(typeof(Entities.PacientesRow))]
    public class PacientesForm
    {
        [Category("Controle Interno")]
        public Int32 PacienteIdControlMedic { get; set; }
        public Int32 PacienteIdGestorMedico { get; set; }
        public DateTime DataCadastro { get; set; }
        public DateTime DataUltimaAtualizacao { get; set; }

        [Category("Dados do Paciente")]
        public String Matricula { get; set; }
        public Int32 StatusId { get; set; }
        public String Paciente { get; set; }
        public Int32 SexoId { get; set; }
        public DateTime DataNascimento { get; set; }
        public Boolean Especial { get; set; }
        public String Pai { get; set; }
        public String Mae { get; set; }
        public String Responsavel { get; set; }
        public String CNS { get; set; }
        public String CarteiraIdentidade { get; set; }
        [MaskedEditor(Mask = "999.999.999-99")]
        public String CPF { get; set; }

        [Category("Diversos")]
        public String Observacao { get; set; }
        public String DisturbiosAssociados { get; set; }

        [Category("Foto")]
        public String Foto { get; set; }
        public DateTime DataFoto { get; set; }

        [Category("Contatos")]
        [ContatosEditor]
        public List<Entities.ContatosRow> ContatosList { get; set; }

        [Category("Endereços")]
        [EnderecosEditor]
        public List<Entities.EnderecosRow> EnderecosList { get; set; }
    }
}