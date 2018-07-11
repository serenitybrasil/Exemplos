

namespace Exemplos.Clinica.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.PacientesRow;

    public class PacientesRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }

        // baseado no mesmo processo do UserRepository
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                if (IsCreate)
                {
                    var _row = new MyRow();

                    //retorna o número da matrícula formatado
                    Row.Matricula = this.Connection.Query<string>(new SqlQuery().From(_row)
                                          .Select("RIGHT(YEAR(GETDATE()),2) + RIGHT(('000' + CAST((COUNT(PacienteID) + 1 )AS VARCHAR(4))), 4) as NovaMatricula")
                                          .Where("YEAR(ISNULL(DataCadastro, GETDATE())) = YEAR(GETDATE())")
                                          ).FirstOrDefault();

                }

                //if (IsUpdate) 
                //{
                //}


                // validações padrões do programa
                //ValidateCPF(Row.CPF);

                //if (Row.NotaFiscalTerceiro.Value)
                //{
                //    if (!Row.NotaFiscalCPF.IsNullOrEmpty())
                //        ValidateCPF(Row.NotaFiscalCPF);

                //    if (!Row.NotaFiscalCNPJ.IsNullOrEmpty())
                //        ValidateCNPJ(Row.NotaFiscalCNPJ);
                //}
            }
        }

        public static string ValidateCPF(string CPF)
        {
            CPF = CPF.TrimToNull();

            if (!new UCGlobal().ValidaCPF(CPF))
                throw new ValidationError("CPFInvalido", "CPF Inválido",
                    Texts.Validation.CPFInvalido);

            return CPF;
        }

        public static string ValidateCNPJ(string CNPJ)
        {
            CNPJ = CNPJ.TrimToNull();

            if (!new UCGlobal().ValidaCNPJ(CNPJ))
                throw new ValidationError("CNPJInvalido", "CNPJ Inválido",
                    Texts.Validation.CNPJInvalido);

            return CNPJ;
        }

    }
}