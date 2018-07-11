
namespace Exemplos.Pacientes
{
    using Administration;
    using System;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Web;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using Exemplos.Clinica.Entities;
    using System.Web.Hosting;
    using System.IO;

    [Report("Pacientes.PacientesPrint")]
    [ReportDesign(MVC.Views.Clinica.Pacientes.Print.PacientesPrint)]
    [RequiredPermission(PermissionKeys.Clinica.Pacientes.Read)]
    public class PacientesPrint : IReport, ICustomizeHtmlToPdf
    {

        //Lista de ids de pacientes enviados para que possa ser impressos. Pode ser mais de um, caso faca print a partir do Grid
        public List<Int32> PacientesIdList { get; set; }

        /*Modelo Dados a serem enviados ao cshtml*/
        public class PacienteReportData
        {
            public List<PacienteData> PacientesList { get; set; }
        }

        public class PacienteData
        {
            public PacientesRow Paciente { get; set; }
            public List<PacientesConveniosRow> PacientesConveniosList { get; set; }
        }

        public object GetData()
        {
            var data = new PacienteReportData();
            
            using (var connection = SqlConnections.NewFor<PacientesRow>())
            {
                var fld = PacientesRow.Fields;
                var fldPacienteConvenios = PacientesConveniosRow.Fields;

                var pacienteRepository = new Clinica.Repositories.PacientesRepository();

                data.PacientesList = new List<PacienteData>();
                

                foreach (var id in this.PacientesIdList)
                {
                    var pacienteRetrieve = new Serenity.Services.RetrieveRequest {
                        EntityId = id
                    };
                    var paciente = pacienteRepository.Retrieve(connection, pacienteRetrieve);

                    if (paciente != null)
                    {

                        var pacienteConvenios = connection.List<PacientesConveniosRow>(q => q
                            .Select(fldPacienteConvenios.ConvenioNomeFantasia)
                            .Select(fldPacienteConvenios.ConvenioPrincipal)
                            .Select(fldPacienteConvenios.Carteirinha)
                            .Select(fldPacienteConvenios.DataValidadeCarteirinha)
                            .Select(fldPacienteConvenios.Inativo)
                            .Where(fldPacienteConvenios.PacienteId == id));

                        var pacienteData = new PacienteData
                        {
                            Paciente = paciente.Entity,
                            PacientesConveniosList = pacienteConvenios
                        };
                        data.PacientesList.Add(pacienteData);

                    }
                }
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
            //options.PageSize = "A4";
            options.MarginTop = "0.4cm";
            options.MarginLeft = "1.5cm";
            options.MarginRight = "1.5cm";
            options.MarginBottom = "0.2cm";
            options.UsePrintMediaType = true;

            options.SmartShrinking = true;
        }

        
    }
}