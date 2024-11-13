// Função otimizada que gera 6 números aleatórios sem repetições e conta quantas iterações foram necessárias
function AleatoriosOtimizado() {
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1);
    let tentativas = 0;

    // Algoritmo de embaralhamento Fisher-Yates
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
        tentativas++;
    }

    const vetor = numeros.slice(0, 6);  

    // Ordena o vetor apenas para a exibição final
    const vetorOrdenado = [...vetor].sort((a, b) => a - b);
    // console.log("Números gerados em ordem crescente:", vetorOrdenado);

    return vetor;
}

const resultadoOtimizado = AleatoriosOtimizado();

console.time("Otimizado");
for (let i = 0; i < 100000; i++) {
    AleatoriosOtimizado();
}
console.timeEnd("Otimizado");