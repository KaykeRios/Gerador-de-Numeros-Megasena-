Em comparação entre as duas abordagens de geração de números aleatórios sem repetições, a versão otimizada (utilizando o algoritmo de Fisher-Yates) e a versão original (com verificações repetidas usando includes), há algumas diferenças claras em termos de velocidade, uso de memória e eficiência geral. Vou abordar esses aspectos de forma mais detalhada:

1. Velocidade de Execução
Fisher-Yates (Otimizado):

O algoritmo Fisher-Yates embaralha todos os números de uma vez e, em seguida, seleciona os primeiros 6 números. A complexidade desse processo é linear: O(n), onde n é o número total de números (60 no seu caso).
O processo de embaralhamento é feito em uma única passagem e é muito mais eficiente do que verificar se um número já foi adicionado ao vetor, como ocorre na versão original.
Como o embaralhamento é feito de forma direta e sem repetição de operações, o desempenho é consideravelmente mais rápido, especialmente para um grande número de iterações.
Original (Método includes):

A versão original tem uma complexidade de O(m * n), onde m é o número de números a serem escolhidos (6 no caso) e n é o tamanho do espaço de números possíveis (60). Em cada iteração, o código verifica se o número aleatório gerado já está presente no vetor, o que exige uma busca linear no vetor com a função includes.
Isso faz com que a versão original seja menos eficiente para um número maior de números aleatórios. À medida que o vetor de números já selecionados cresce, a busca se torna mais lenta. Por exemplo, no caso de 6 números, a função includes precisa percorrer até 6 elementos a cada nova verificação, o que leva mais tempo conforme o vetor cresce.

2. Uso de Memória
Fisher-Yates (Otimizado):

O algoritmo só precisa de memória adicional para o vetor embaralhado de 60 números e uma variável de controle de tentativas.
A memória utilizada é eficiente, pois o vetor de números de 60 elementos é apenas reorganizado e os 6 primeiros números são selecionados diretamente, sem a necessidade de manipulações adicionais durante a execução.
Original (Método includes):

A versão original armazena os números selecionados no vetor vetor, e em cada iteração verifica se o número gerado já está presente, o que implica em mais operações de memória para cada busca e adição.
Embora o uso de memória não seja exorbitante (considerando apenas 6 números), as verificações repetidas do método includes geram overhead adicional em termos de tempo de execução, mesmo que o uso de memória não seja grande.

3. Eficiência Geral
Fisher-Yates (Otimizado):

Mais eficiente. O uso de uma única passagem para embaralhar os números reduz a complexidade e o tempo de execução. A estratégia de embaralhar todos os números e então escolher os primeiros 6 números é mais direta e eficiente.
O código é escalável: mesmo que você aumente o número de elementos ou a quantidade de números a serem selecionados, o algoritmo continuará eficiente com tempo de execução linear.
Original (Método includes):

Menos eficiente. O código tem a desvantagem de precisar verificar constantemente se um número foi escolhido, o que não só aumenta o tempo de execução, mas também pode tornar o processo mais lento conforme o número de tentativas aumenta.
O método includes realiza verificações repetidas no vetor, tornando-o mais ineficiente à medida que o vetor cresce.

Conclusão:
Otimizado (Fisher-Yates) é, sem dúvida, a melhor opção em termos de velocidade e uso de memória. A abordagem de embaralhar a lista uma vez e depois selecionar os números aleatórios é muito mais eficiente, especialmente para um grande número de tentativas.
A versão Original, embora funcional, se torna cada vez mais lenta à medida que a quantidade de números gerados e as verificações aumentam, tornando-se menos escalável.
