# Praticando-JS_10
Exemplos de varias funções para saber se o numero é divisivel por 3

Dentro do código está descrito como anotação, o exercicio que foi pedido. Logo em baixo,
os códigos que usei para resolve-lo!
Fique a vontade para entrar em contato comigo para dar sugestões e dicas!
Este e todos os outros exercícios foram tirados do curso
"Web Moderno Completo com JavaScript 2022 + Projetos" na Udemy.

Este código é uma coleção de funções em JavaScript que verificam se um número inteiro é divisível por 3. Eu começo explicando a lógica matemática por trás da divisibilidade por 3, que é baseada na soma dos algarismos do número. Em seguida, apresento várias abordagens diferentes apenas para explorar outras maneiras de resolver o problema.

A primeira função chamada "inteiro" é uma função simples que usa o operador de módulo (%) para verificar se o número passado como parâmetro é divisível por 3. Se o resto da divisão for zero, significa que o número é divisível por 3, e a função retorna true. Caso contrário, retorna false.

A segunda função chamada "numInteiro" é uma versão um pouco mais elaborada. Ela usa a mesma lógica da primeira função, mas retorna uma string informando se o número é divisível por 3 ou não.

A terceira função é uma versão utilizando a sintaxe de função de seta (arrow function). Essa função recebe um parâmetro "numero" e usa o operador de módulo para verificar se o número é divisível por 3. Retorna true se for divisível e false caso contrário.

A quarta função, "funcaoArrow2", também utiliza a sintaxe de função de seta. Ela calcula o resto da divisão e armazena em uma variável chamada "valor". Em seguida, verifica se o valor é igual a zero e retorna uma mensagem indicando se o número é divisível por 3 ou não.

A quinta função, "funcaoArrow3", é semelhante à quarta função, mas adiciona uma variável chamada "verificar" que recebe o valor booleano da comparação "valor === 0". Em seguida, a função verifica se a variável "verificar" é igual a true. Por fim, a função retorna uma mensagem indicando o resto da divisão e o valor da variável "verificar".

No final do código, são feitas chamadas às diferentes funções, passando os números 18 e 134 como parâmetros, para verificar se são divisíveis por 3. E os resultados são exibidos no console.
