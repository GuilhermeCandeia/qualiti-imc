function calcularIMC() {
    var pesoInput = document.querySelector("#peso");
    var alturaInput = document.querySelector("#altura"); 
    var resultado = document.querySelector("#resposta");
    var classificacaoOutput = document.querySelector("#classificacao");
    var valor_peso = pesoInput.valueAsNumber;
    var altura = alturaInput.valueAsNumber;
    var imc = valor_peso/(altura*altura);
    var classificacao =  "";

    if (valor_peso <= 0)
    {
        alert("Valor Incorreto do Peso.");
    }

    else if (altura <= 0)
    {
        alert("Valor Incorreto da Altura.");
    }    

    else
    {
        if ( imc < 14.5)
        {
            classificacao = "Desnutrição";
        }

        else if ( imc >= 14.5 && imc < 20)
        {
            classificacao = "Peso Abaixo do Normal";
        }

        else if ( imc >= 20 && imc < 24.9)
        {
            classificacao = "Peso Normal";
        }

        else if ( imc >= 24.9 && imc < 29.9)
        {
            classificacao = "Sbrepeso";
        }

        else if ( imc >= 30 && imc < 39.9)
        {
            classificacao = "Obesidade";
        }

        else
        {
            classificacao = "Obesidade Mórbida";
        }


        resultado.textContent = imc.toFixed(2);
        classificacaoOutput.textContent = classificacao;
    }

    

}