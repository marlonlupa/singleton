# Singleton Pattern
O tema foi escolhido foi Singleton Pattern, e a idéia é mostrar a funcionalidade  que contem apenas uma classe e apenas uma instância.
Com isso ao invés de criar mais de um objeto, é utilizado apenas um.

##Prós
Certeza que uma classe terá apenas uma instância.
Ganha um ponto de acesso global para aquela instância.

##Contras
O padrão requer tratamento especial em um ambiente multithreaded para que múltiplas threads não possam criar um objeto singleton várias vezes.
O padrão Singleton pode mascarar um design ruim, por exemplo, quando os componentes do programa sabem muito sobre cada um.