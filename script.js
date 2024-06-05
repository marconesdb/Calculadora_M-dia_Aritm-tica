// Adiciona um evento de submit ao formulário
document.getElementById('mediaForm').addEventListener('submit', function(event) {
    // Previne o comportamento padrão de envio do formulário
    event.preventDefault();
    
    // Obtendo os valores dos campos de entrada e convertendo-os para números de ponto flutuante
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);

    // Calculando a média aritmética dos números
    const media = (num1 + num2 + num3 + num4 + num5) / 5;

    // Exibindo o resultado no parágrafo com o id 'resultado'
    document.getElementById('resultado').innerText = `A média aritmética é: ${media}`;
});
