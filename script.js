// Solicita o valor do carro
let valorCarro = parseFloat(prompt("Digite o valor do veículo: R$"));

if (isNaN(valorCarro) || valorCarro <= 0) {
    alert("Valor inválido!");
} else {

    // Menu de opções
    let opcao = prompt(
        "Escolha a forma de pagamento:\n" +
        "1 - À vista no PIX (15% de desconto)\n" +
        "2 - Cartão de Crédito (até 24x - 5% de juros)\n" +
        "3 - Financiamento (até 48x - 20% de juros)"
    );

    let valorFinal = 0;
    let parcelas = 1;

    switch (opcao) {
        case '1':
            // PIX com desconto
            valorFinal = valorCarro * 0.85;
            alert("=== PAGAMENTO PIX ===\n" +
                    `Valor final: R$ ${valorFinal.toFixed(2)}`);
            break;

        case '2':
            // Cartão com juros
            parcelas = parseInt(prompt("Digite o número de parcelas (máx. 24):"));

            if (parcelas > 0 && parcelas <= 24) {
                valorFinal = valorCarro * 1.05;
                let valorParcela = valorFinal / parcelas;

                alert("=== CARTÃO DE CRÉDITO ===\n" +
                        `Valor final: R$ ${valorFinal.toFixed(2)}\n` +
                        `Parcelado em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`);
            } else {
                alert("Número de parcelas inválido!");
            }
            break;

        case '3':
            // Financiamento com juros
            parcelas = parseInt(prompt("Digite o número de parcelas (máx. 48):"));

            if (parcelas > 0 && parcelas <= 48) {
                valorFinal = valorCarro * 1.20;
                let valorParcela = valorFinal / parcelas;

                alert("=== FINANCIAMENTO ===\n" +
                        `Valor final: R$ ${valorFinal.toFixed(2)}\n` +
                        `Parcelado em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`);
            } else {
                alert("Número de parcelas inválido!");
            }
            break;

        default:
            alert("Opção inválida!");
            break;
    }
}