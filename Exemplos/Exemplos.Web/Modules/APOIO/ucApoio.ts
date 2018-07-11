namespace Exemplos {
    export function JSvalidarCPF(CPF: string) {
        CPF = CPF.replace(/[^\d]+/g, '');
        //if (CPF == '') return false;
        // Elimina CPFs invalidos conhecidos    
        if (CPF.length != 11 ||
            CPF == "00000000000" ||
            CPF == "11111111111" ||
            CPF == "22222222222" ||
            CPF == "33333333333" ||
            CPF == "44444444444" ||
            CPF == "55555555555" ||
            CPF == "66666666666" ||
            CPF == "77777777777" ||
            CPF == "88888888888" ||
            CPF == "99999999999")
            return false;
        // Valida 1o digito 
        var add = 0;
        for (i = 0; i < 9; i++)
            add += parseInt(CPF.charAt(i)) * (10 - i);
        var rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(CPF.charAt(9)))
            return false;
        // Valida 2o digito 
        add = 0;
        for (var i = 0; i < 10; i++)
            add += parseInt(CPF.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(CPF.charAt(10)))
            return false;
        return true;
    }

    export function JSvalidarCNPJ(CNPJ) {

        CNPJ = CNPJ.replace(/[^\d]+/g, '');

        if (CNPJ == '') return false;

        if (CNPJ.length != 14)
            return false;

        // Elimina CNPJs invalidos conhecidos
        if (CNPJ == "00000000000000" ||
            CNPJ == "11111111111111" ||
            CNPJ == "22222222222222" ||
            CNPJ == "33333333333333" ||
            CNPJ == "44444444444444" ||
            CNPJ == "55555555555555" ||
            CNPJ == "66666666666666" ||
            CNPJ == "77777777777777" ||
            CNPJ == "88888888888888" ||
            CNPJ == "99999999999999")
            return false;

        // Valida DVs
        var tamanho = CNPJ.length - 2
        var numeros = CNPJ.substring(0, tamanho);
        var digitos = CNPJ.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = CNPJ.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;

        return true;

    }

    /**
     * Validar CPF no form do Serenity
     * @param widget: passar o nome do campo para validação
     * @param uniqueName: Passar o uniqueName do Dialog
     * @param alert: texto que vai aparecer no HINT do erro
     * @param text: texto que vai aparecer no ALERT WARNING do erro
     * @param setfocus: se vai acionar ou não o focus no campo.
     */
    export function addValidationRule_CPF(widget: Serenity.Widget<any>, VOptions?: addValidationRuleOptions): void {

        /*
        será que só trazendo o widget e tirando o "_Form" consigo o uniqueName?
widget.element[0].form.id => Exemplos_Clinica_PacientesDialog52_Form
               uniqueName => Exemplos_Clinica_PacientesDialog52

        */
        //As any para evitar os erros de typescript em relacao ao acesso do uniquename. Mais simples do que fazer toda uma extensao e mudanças para colocar um getUniqueName publico no Widget
        var uniqueName: string = (widget as any).uniqueName; // widget.element[0].id.toString().replace("_" + widget.element[0].name, "");
        var alert: string = "CPF Inválido !";
        var text: string = "O CPF está inválido !!!";
        var setfocus: boolean = false;

        if ((VOptions != null) || (VOptions != undefined)) {
            if ((VOptions.uniqueName != null) || (VOptions.uniqueName != undefined))
                uniqueName = VOptions.uniqueName;

            if ((VOptions.alert != null) || (VOptions.alert != undefined))
                alert = VOptions.alert;

            if ((VOptions.text != null) || (VOptions.text != undefined))
                text = VOptions.text;

            if ((VOptions.setfocus != null) || (VOptions.setfocus != undefined))
                setfocus = VOptions.setfocus;
        }

        //adiciona a validação no formulário!
        widget.addValidationRule(uniqueName, e => {
            //var valor = Serenity.EditorUtils.getValue(widget);
            //if (!(valor == '0' || valor == '' || valor == 'undefined' || valor == null))
            //    if (!JSvalidarCPF(valor)) {
            if (!JSvalidarCPF(Serenity.EditorUtils.getValue(widget))) {
                Q.warning(text,
                    {
                        onClose: () => { if (setfocus) widget.element.focus(); }
                    });
                return alert;
            }
        });
    };

    /**
     * Validar CNPJ no form do Serenity
     * @param widget: passar o nome do campo para validação
     * @param uniqueName: Passar o uniqueName do Dialog
     * @param alert: texto que vai aparecer no HINT do erro
     * @param text: texto que vai aparecer no ALERT WARNING do erro
     * @param setfocus: se vai acionar ou não o focus no campo.
     */
    export function addValidationRule_CNPJ(widget: Serenity.Widget<any>, VOptions?: addValidationRuleOptions): void {

        /*
        será que só trazendo o widget e tirando o "_Form" consigo o uniqueName?
widget.element[0].form.id => Exemplos_Clinica_PacientesDialog52_Form
               uniqueName => Exemplos_Clinica_PacientesDialog52

        */

        //As any para evitar os erros de typescript em relacao ao acesso do uniquename. Mais simples do que fazer toda uma extensao e mudanças para colocar um getUniqueName publico no Widget
        var uniqueName: string = (widget as any).uniqueName;// widget.element[0].id.toString().replace("_" + widget.element[0].name, "");
        var alert: string = "CNPJ Inválido !";
        var text: string = "O CNPJ está inválido !!!";
        var setfocus: boolean = false;

        if ((VOptions != null) || (VOptions != undefined)) {
            if ((VOptions.uniqueName != null) || (VOptions.uniqueName != undefined))
                uniqueName = VOptions.uniqueName;

            if ((VOptions.alert != null) || (VOptions.alert != undefined))
                alert = VOptions.alert;

            if ((VOptions.text != null) || (VOptions.text != undefined))
                text = VOptions.text;

            if ((VOptions.setfocus != null) || (VOptions.setfocus != undefined))
                setfocus = VOptions.setfocus;
        }

        //adiciona a validação no formulário!
        widget.addValidationRule(uniqueName, e => {
            //var valor = Serenity.EditorUtils.getValue(widget);
            //if (!(valor == '0' || valor == '' || valor == 'undefined' || valor == null))
            //    if (!JSvalidarCNPJ(valor)) {
            if (!JSvalidarCNPJ(Serenity.EditorUtils.getValue(widget))) {
                Q.warning(text,
                    {
                        onClose: () => { if (setfocus) widget.element.focus(); }
                    });
                return alert;
            }
        });
    };

    export interface addValidationRuleOptions {
        uniqueName?: string;
        alert?: string;
        text?: string;
        setfocus?: boolean;
    }

    export interface ViaCepData {
        /**
         * Para o typescript sem warnings e erros nos dados retornados de https://viacep.com.br/ws/29075590/json
         */
        cep: string;
        logradouro: string;
        complemento: string;
        bairro: string;
        localidade: string;
        uf: string;
        unidade: string;
        ibge: string;
        gia: string;
    }

    /**
     * O Formulario deve ser passado para que a funcao chamada saiba qual formulario ira preencher.
     * Esta funcao poderia usar promise e retornar para tratamento diretamente, mas para evitar alguma incompatibilidade em navegadores antigos,
     * a redundância é feita e passada à função de callback para preenchimento dos campos do formulário.
     *
     * @param CEP - string do CEP a ser buscado
     * @param formulario - Deve ser passado para nao perder a referencia
     * @param fnRetornoPreenchimento - Funcao para preencher o formulario
     */
    export function BuscaCEP(CEP, formulario, fnRetornoPreenchimento) {
        var dadosCEP: ViaCepData;
        /*RETRONO DA VARIAVEL DO JSON DO VIA CEP
                EXEMPLO: https://viacep.com.br/ws/29075590/json
        */
        $.getJSON("//viacep.com.br/ws/" + CEP + "/json/?callback=?", function (dados) {

            if (!("erro" in dados)) {
                fnRetornoPreenchimento(formulario, dados);
            } //end if.
            else {
                //CEP pesquisado não foi encontrado.
                //limpa_formulário_cep();
                alert("CEP não encontrado.");
            }
        });
        //return dadosCEP;


    }
}