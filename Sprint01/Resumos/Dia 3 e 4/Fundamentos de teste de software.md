# Fundamentos de teste de software
O teste de software é um processo crítico para garantir a qualidade e confiabilidade dos sistemas de software. Envolve avaliar um software para identificar erros, lacunas ou quaisquer outros problemas que possam afetar seu desempenho ou comportamento esperado.

## Os 7 fundamentos do teste (ISTQB)
* **Testes mostram a presença de erros, mas nunca a sua ausência**

Testes de software ajudam a encontrar erros, mas não podem garantir que um software esteja 100% livre de defeitos. É importante testar cedo e com frequência, mas mesmo assim podem existir erros não detectados.

* **Testes Exaustivos são impossíveis**

É impossível testar todas as combinações possíveis de entradas, cenários e pré-condições em uma aplicação, especialmente quando ela contém vários campos com várias opções de valores. Em vez de tentar criar um número enorme de cenários de teste, é mais eficiente priorizar aqueles que têm maior probabilidade de detectar erros significativos.

* **Teste Cedo/Antes**

Testar cedo e frequentemente é crucial porque o custo de corrigir erros aumenta exponencialmente à medida que o desenvolvimento avança. Testar cedo permite que os defeitos sejam identificados e corrigidos antes que se tornem problemas maiores e mais caros de resolver.

* **Aglutinação de Defeitos**

O princípio da aglutinação de defeitos sugere que a maioria dos erros (cerca de 80%) tende a se concentrar em uma pequena porcentagem (cerca de 20%) dos módulos de um sistema. Portanto, quando um defeito é encontrado em um módulo específico, é provável que existam outros defeitos naquele módulo. Isso destaca a importância de testar exaustivamente essas áreas para identificar e corrigir defeitos adicionais.

* **Paradoxo Pesticida**

O paradoxo do pesticida afirma que executar os mesmos testes repetidamente não resultará na descoberta de novos defeitos. Isso ocorre porque, à medida que os defeitos são corrigidos, os cenários de teste correspondentes se tornam obsoletos. Portanto, para continuar encontrando defeitos, é essencial revisar e atualizar os testes regularmente para refletir as alterações feitas no sistema.

* **Teste depende do contexto**

A estratégia de teste deve ser adaptada ao contexto específico da aplicação. Diferentes tipos de aplicações, como produtos financeiros e sites corporativos, têm prioridades de teste distintas. Por exemplo, a segurança é crucial para produtos financeiros, enquanto usabilidade e velocidade são mais importantes para sites corporativos. Portanto, os testes devem ser personalizados para atender às necessidades e objetivos específicos de cada aplicação.

* **Falácia da Ausência de erros**

Embora a ausência de defeitos seja importante, não garante o sucesso de um produto. Ele também deve ser útil e atender às expectativas do usuário.

Além dos princípios de teste essenciais, outros aspectos importantes incluem:

* Independência e imparcialidade dos profissionais de teste
* Teste de valores inválidos e inesperados
* Foco em partes estáveis do software durante o teste
* Documentação abrangente para definir resultados esperados

## ISO 25010
**Adequação Funcional**

Essa característica envolve a capacidade do software de realizar o que ele se propõe a fazer. As subcaracterísticas são:

* `Integridade funcional`: cobertura de todas as tarefas e objetivos;
* `Correção funcional`: quão bem provê os resultados corretos quando preciso;
* `Adequação funcional`: quão bem é capaz de realizar tarefas e objetivos específicos.

**Eficiência de performance**

Esse atributo está relacionado à performance do software relacionada à quantidade de recursos utilizados e possui as seguintes subdivisões:

* `Comportamento do tempo`: tempo de resposta e processamento;
Uso de recursos: quantidade e tipos de recursos utilizados por um produto ou sistema;
* `Capacidade`: limite máximo de um produto.

**Compatibilidade**

É a capacidade de um produto, sistema ou componente de trocar informações, assim como de realizar funções enquanto compartilha um hardware. São subcaracterísticas:

* `Coexistência`: capacidade de realizar funções eficientemente enquanto compartilha um ambiente ou recursos com outros produtos;
* `Interoperabilidade`: capacidade de dois ou mais sistemas, produtos ou componentes de trocar informações e as utilizarem.

**Usabilidade**

Trata-se da capacidade de um produto ou sistema de realizar objetivos eficientemente, efetivamente e de maneira satisfatória. As subcaracterísticas são as seguintes:

* `Adequação reconhecível`: capacidade de reconhecer se um produto ou sistema é apropriado para suas necessidades;
Capacidade de aprendizado: facilidade de aprender como utilizar o produto ou sistema;
* `Operabilidade`: se um produto ou sistema possui atributos que facilitam seu uso e controle;
* `Proteção de erro do usuário`: capacidade do produto proteger o usuário de erros;
* `Estética da interface de usuário`: agradabilidade da interface;
* `Acessibilidade`: capacidade de um produto ou sistema ser utilizado por pessoas com características e capacidades diversas.

**Confiabilidade**

Diz respeito a quão bem um produto realiza funções específicas sob condições específicas. Estas são as subcaracterísticas deste atributo da ISO/IEC 25010:

* `Maturidade`: capacidade do produto atingir as necessidades de confiabilidade;
* `Disponibilidade`: se um sistema, produto ou componente está acessível e operante;
* `Tolerância a falhas`: capacidade de um sistema, produto ou componente operar apesar de falhas de hardware e/ou software;
* `Recuperabilidade`: capacidade de recuperar dados em uma possível falha ou interrupção.

**Segurança**

A capacidade de um produto ou sistema proteger informação e dados de vulnerabilidades é chamada de segurança, dentre as características da ISO/IEC 25010. As subdivisões são:

* `Confidencialidade`: produto ou sistema é capaz de garantir que dados são acessados apenas por aqueles que têm acesso autorizado. 
* `Integridade`: capacidade de prevenir acesso não-autorizado e modificação de dados ou programas de computador.
* `Ausência de repúdio`: capacidade de provar que ações ou eventos aconteceram.
* `Rastreabilidade de uso`: ações de usuários não autorizados devem ser ligados a eles.
* `Autenticidade`: a identidade de um sujeito ou recurso pode ser provada.

**Manutenibilidade**

A manutenibilidade é a característica que engloba a capacidade de um produto ou sistema ser modificado, atualizado e adaptado às mudanças de ambiente e requerimentos. Abaixo, vamos ver as subcaracterísticas deste atributo.

* `Modularidade`: programas ou sistemas podem sofrer mudanças sem impactar em outros componentes;
* `Reusabilidade`: capacidade de um recurso poder ser utilizado em mais de um sistema;
* `Analisabilidade`: capacidade de diagnosticar problemas ou causas de falhas, assim como partes a serem modificadas;
* `Modificabilidade`: capacidade de um produto ou sistema ser modificado sem introduzir defeitos ou diminuir a qualidade atual;
* `Testabilidade`: efetividade de testes para o sistema, produto ou componente.

**Portabilidade**

Esta característica é a capacidade de um sistema, produto ou componente de ser transferido de um ambiente para outro. As suas subcaracterísticas são:

* `Adaptabilidade`: capacidade de um produto ou sistema de ser adaptado a um novo hardware, software ou outros ambientes;
* `Facilidade de instalação`: capacidade de um produto ou sistema ser instalado ou desinstalado facilmente;
* `Capacidade de substituição`: capacidade de ser trocado por outro produto similar. 