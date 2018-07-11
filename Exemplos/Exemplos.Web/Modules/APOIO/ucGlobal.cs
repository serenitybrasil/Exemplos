#region Imports
using System;
using System.Collections;
using System.Collections.Generic;
#endregion

namespace Exemplos
{
    /// <summary>
    /// Funções auxiliares
    /// CREATE by Rolemberg Filho
    /// </summary>
    public class UCGlobal
    {
        /*
         o DFARUQUE fez uma série de scripts. Analisar o link abaixo:
         
https://github.com/dfaruque/Serenity.Extra#to-access-parentmaster-dialog-from-childdetail-dialog
         
             */
        /*
         TODO:
         ESSAS CLASSES ME ACOMPANHAM DESDE 2004....
         GOSTARIA DE USAR ELAS TAMBÉM NO TYPESCRIPT
         PORÉM ESTOU COM DIFICULDADES DE SABER COMO CONFIGURAR A INTERFACE DELAS
         SERIA O CASO DE COLOCAR A TAG SCRIPTINCLUDE?

         OBS.: o Clinica UTILS original está na pasta ..\GESTAO\Exemplos\Documentacao\UTILS
         
         
             */

        #region *** VALIDATE DATA AND FIELDS ***

        #region ValidaCPF
        /// <summary>
        /// Verifica se o CPF OU CNPJ sao validos
        /// OBS.: Esta funcao ja retira os caracteres
        /// </summary>
        /// <param name="strCPF">Informe aqui o CPF a ser validado</param>
        /// <returns></returns>
        public bool ValidaCPF(string strCPF)
        {
            // se o campo for vazio, retorna verdadeiro.
            if (string.IsNullOrEmpty(strCPF))
                return true;

            string nb_CPF = onlyDig(strCPF);
            bool Sucesso = true;

            //if (nb_CPF == "") return false;

            // Elimina CPFs invalidos conhecidos    
            if (nb_CPF.Length != 11 ||
                nb_CPF == "00000000000" ||
                nb_CPF == "11111111111" ||
                nb_CPF == "22222222222" ||
                nb_CPF == "33333333333" ||
                nb_CPF == "44444444444" ||
                nb_CPF == "55555555555" ||
                nb_CPF == "66666666666" ||
                nb_CPF == "77777777777" ||
                nb_CPF == "88888888888" ||
                nb_CPF == "99999999999")
                return false;


            try
            {
                int x = 0;
                int soma = 0;
                int dig1 = 0;
                int dig2 = 0;
                string CPF1 = "";

                x = nb_CPF.Length - 1;

                for (int i = 0; i <= nb_CPF.Length - 3; i++)
                {
                    int y = Convert.ToInt32(nb_CPF.Substring(i, 1));
                    soma += (y * x);
                    x = x - 1;
                }

                dig1 = 11 - (soma % 11);

                if (dig1 == 10)
                    dig1 = 0;
                if (dig1 == 11)
                    dig1 = 0;

                CPF1 = nb_CPF.Substring(0, nb_CPF.Length - 2) + dig1;
                x = 11;
                soma = 0;

                for (int i = 0; i <= nb_CPF.Length - 2; i++)
                {
                    soma += Convert.ToInt32(CPF1.Substring(i, 1)) * x;
                    x = x - 1;
                }

                dig2 = 11 - (soma % 11);

                if (dig2 == 10)
                    dig2 = 0;
                if (dig2 == 11)
                    dig2 = 0;

                string str1 = dig1.ToString() + dig2.ToString();
                string str2 = nb_CPF.Substring(nb_CPF.Length - 2);

                int v1 = Convert.ToInt32(str1);
                int v2 = Convert.ToInt32(str2);


                Sucesso = (v1 == v2);
            }
            catch
            {
                Sucesso = false;
            }

            return Sucesso;
        }
        #endregion

        #region ValidaCNPJ
        /// <summary>
        /// Verifica se o CNPJ e valido
        /// OBS.: Esta funcao ja retira os caracteres
        /// </summary>
        /// <param name="strCNPJ">CNPJ para ser validado</param>
        /// <returns></returns>
        public bool ValidaCNPJ(string strCNPJ)
        {
            // se o campo for vazio, retorna verdadeiro.
            if (string.IsNullOrEmpty(strCNPJ))
                return true;

            string nb_CNPJ = onlyDig(strCNPJ);
            bool Sucesso = true;

            //if (nb_CNPJ == "") return false;

            if (nb_CNPJ.Length != 14)
                return false;

            // Elimina nb_CNPJs invalidos conhecidos
            if (nb_CNPJ == "00000000000000" ||
                nb_CNPJ == "11111111111111" ||
                nb_CNPJ == "22222222222222" ||
                nb_CNPJ == "33333333333333" ||
                nb_CNPJ == "44444444444444" ||
                nb_CNPJ == "55555555555555" ||
                nb_CNPJ == "66666666666666" ||
                nb_CNPJ == "77777777777777" ||
                nb_CNPJ == "88888888888888" ||
                nb_CNPJ == "99999999999999")
                return false;

            try
            {

                int intDigito = 0;
                string strDV = null;
                string strMult = "543298765432";
                string CNPJ1 = nb_CNPJ.Substring(0, 12);
                string CNPJ2 = nb_CNPJ.Substring(12, 2);

                for (int j = 0; j < 2; j++)
                {
                    int intSoma = 0;
                    for (int i = 0; i < 12; i++)
                        intSoma += Convert.ToInt16(CNPJ1.Substring(i, 1)) * Convert.ToInt16(strMult.Substring(i, 1));
                    if (j == 1)
                        intSoma += (2 * intDigito);
                    intDigito = (intSoma * 10) % 11;
                    if (intDigito == 10)
                        intDigito = 0;
                    strDV += intDigito.ToString().Trim();
                    strMult = "654329876543";
                }

                Sucesso = (strDV == CNPJ2);
            }
            catch
            {
                Sucesso = false;
            }

            return Sucesso;
        }
        #endregion

        #region IsInterger
        /// <summary>
        /// 
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public bool IsInterger(object obj)
        {
            bool isInt;
            double retNum;
            isInt = Double.TryParse(Convert.ToString(obj), System.Globalization.NumberStyles.Integer, System.Globalization.NumberFormatInfo.InvariantInfo, out retNum);
            return isInt;
        }
        #endregion

        #region IsNum
        /// <summary>
        /// 
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public bool IsNum(object obj)
        {
            try
            {
                Convert.ToInt32(obj);
                return true;
            }
            catch
            {
                return false;
            }
        }
        #endregion

        #region IsLong
        /// <summary>
        /// Retorna true se for possivel converter uma string para long, caso contrario, false
        /// </summary>
        /// <param name="obj"> string</param>
        /// <returns>bool</returns>
        public bool IsLong(string valor)
        {
            try
            {
                Convert.ToInt64(valor);
                return true;
            }
            catch
            {
                return false;
            }
        }
        #endregion

        #region onlyDig
        /// <summary>
        /// 
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public string onlyDig(string str)
        {
            string clean = "";
            for (int i = 0; i <= str.Length - 1; i++)
                if (IsInterger(str.Substring(i, 1)))
                    clean += str.Substring(i, 1);
            return clean;
        }
        #endregion

        #region onlyLetter
        /// <summary>
        /// 
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public string onlyLetter(string str)
        {
            string clean = "";
            for (int i = 0; i <= str.Length - 1; i++)
                if (char.IsLetter(str, i))
                    clean += str.Substring(i, 1);
            return clean;
        }
        #endregion

        #region onlyLetterAndDig
        /// <summary>
        /// 
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public string onlyLetterAndDig(string str)
        {
            string clean = "";
            for (int i = 0; i <= str.Length - 1; i++)
                if (char.IsLetterOrDigit(str, i))
                    clean += str.Substring(i, 1);
            return clean;
        }
        #endregion

        #endregion

    }

}