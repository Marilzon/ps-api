- A pasta "entities" geralmente contém as classes ou interfaces que representam os objetos de negócio do sistema, ou seja, as entidades do domínio. Essas entidades geralmente possuem atributos e comportamentos que refletem as regras de negócio da aplicação.

- A pasta "factories" contém as classes responsáveis por criar instâncias de objetos complexos, como por exemplo, aquelas que requerem a inicialização de diversos outros objetos.

- A pasta "repositories" contém as classes responsáveis por realizar a persistência dos dados das entidades em alguma fonte de dados, como um banco de dados relacional. Elas fornecem métodos para salvar, buscar, excluir e atualizar essas informações.

- A pasta "services" contém as classes que implementam a lógica de negócio específica da aplicação. Por exemplo, elas podem ser responsáveis pela validação de dados, cálculos, e outras operações que afetam o estado do sistema.
