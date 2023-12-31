
# Projeto de Interface

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="especification.md"> Documentação de Especificação</a>.

## User Flow

### Prestador dos Serviços

<img align = "left" width="100%" src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/40511076/401d2cba-e074-444f-b98f-cae86e4ab1ac" />


### Consumidor dos Serviços


<img align = "left" width="100%" src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/40511076/0dd91f46-311a-4fef-902a-2234dc640eb8" />


# Wireframes

Abaixo estão os <a href="especification.md"> requisitos do projeto</a>, com o descritivo das telas que atendem aos requisitos funcionais e não funcionais.

### Requisitos Funcionais

|ID     | Descrição do Requisito  | Tela |
|-------|-----------------------------------------|----|
| RF&#x2011;001 | O sistema deve permitir que o prestador de serviços gerencie um perfil informando Nome,Telefone de contato,CNPJ , Horário de Atendimento (incluindo dia da semana)| 01a / 01b / 04 / 05b / | 
| RF-002 | O sistema deve gerar um token único para cada prestador no momento do cadastro | 05a / 05e  |
| RF-003 | O sistema deve permitir que o prestador de serviço faça login na plataforma  | 02 / 03 |
| RF-004 | O sistema deve permitir que o prestador de serviços gerencie os serviços que oferece | 05a / 05c / 05d /07| 
| RF-005 | O sistema deve permitir que o prestador de serviços indique a região que atenda | 05b | 
| RF-006 | O sistema deve permitir que os contratantes avaliem e descrevam os prestadores de serviço, para que isso seja possível o prestador deve informar o seu token ao cliente no momento da contratação. | 05f |
| RF-007 | O sistema deve possiblitar filtragem por meio de avaliações na pesquisa de prestador de serviços. | 01a / 01b / 04|
| RF-008 | O sistema deve permitir que o usuário faça alterações em seu perfil | 05b / 08|
| RF-009 | O sistema deverá conter uma página com orientações sobre como utilizar o token e avaliar os serviços prestados | 06 |
| RF-010 | O sistema deverá conter uma página explicando como contratar os serviços | 06 |
| RF-011 | O sistema deverá conter uma página contendo informações sobre boas práticas na prestação de serviços | 06 |
| RF-012 | O sistema deverá conter uma página com dúvidas frequentes na utilização do aplicativo | 06 |
| RF-013 | O sistema deverá conter uma página com instruções de segurança na contratação do serviço | 06 |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Tela|
|-------|-------------------------|----|
|RNF&#x2011;001| Tornar a aplicação acessível a todas as pessoas, incluindo aquelas com deficiências, seguindo as diretrizes de acessibilidade universal, como WCAG 2.0 | all pages  |
|RNF-002| A aplicação deve ser integrada com uma API de localização | 05a / 05e |
|RNF-003| O sistema deve ser compatível com os navegadores mais utilizados | all pages |
|RNF-004| A aplicação deve ser regida pela LGPD | all pages |
|RNF-005| Utilizar tokens JWT para gerenciar sessões de usuários | 02 / 03 / 04  | 
|RNF-006| O sistema deve ser responsivo para rodar em um dispositivos móvel | all pages | 
|RNF-007| Deve processar requisições do usuário em no máximo 3s | all pages | 


### Tela 01a - Home Page

> **Requisitos atendidos**:

> - RF‑001	O sistema deve permitir que o prestador de serviços gerencie um perfil informando Nome,Telefone de contato,CNPJ , Horário de Atendimento (incluindo dia da semana)

> - RF-007	O sistema deve possiblitar filtragem por meio de avaliações na pesquisa de prestador de serviços.

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/98ca44b1-8d93-4eb0-9fbb-7f6566dad356)


### Tela 01b - Home Page

> **Requisitos atendidos**:

> - RF‑001	O sistema deve permitir que o prestador de serviços gerencie um perfil informando Nome,Telefone de contato,CNPJ , Horário de Atendimento (incluindo dia da semana)

> - RF-007	O sistema deve possiblitar filtragem por meio de avaliações na pesquisa de prestador de serviços.

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/2075ea4a-d54d-49c4-becb-553cb7b7080b)

### Tela 02 - Login 

> **Requisitos atendidos**:

> - RF-003	O sistema deve permitir que o prestador de serviço faça login na plataforma

> - RNF-005 Utilizar tokens JWT para gerenciar sessões de usuários

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/6ac593bf-985b-4aa4-b84c-2f916eb6b03c)

### Tela 03 - Esqueci minha senha 

> **Requisitos atendidos**:

> - RF-003	O sistema deve permitir que o prestador de serviço faça login na plataforma

> - RNF-005 Utilizar tokens JWT para gerenciar sessões de usuários

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/dc8451d9-0b09-4f2e-bc7e-d25b53d54c41)

### Tela 04 - Registro

> **Requisitos atendidos**:

> - RF‑001	O sistema deve permitir que o prestador de serviços gerencie um perfil informando Nome,Telefone de contato,CNPJ , Horário de Atendimento (incluindo dia da semana)

> - RF-007	O sistema deve possiblitar filtragem por meio de avaliações na pesquisa de prestador de serviços.

> - RNF-005 Utilizar tokens JWT para gerenciar sessões de usuários

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/99e555d6-fbae-401c-94ee-e11a51c4763a)

### Tela 05a - Perfil do Prestador de Serviços Logado

> **Requisitos atendidos**:

> - RF‑001	O sistema deve permitir que o prestador de serviços gerencie um perfil informando Nome,Telefone de contato,CNPJ , Horário de Atendimento (incluindo dia da semana)

> - RF-002	O sistema deve gerar um token único para cada prestador no momento do cadastro

> - RF-004	O sistema deve permitir que o prestador de serviços gerencie os serviços que oferece

> - RNF-002 A aplicação deve ser integrada com uma API de localização

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/f674ae96-035a-4995-9269-d253e26f8b4d)

### Tela 05b -Perfil do Prestador Logado, Janela de Edição 

> **Requisitos atendidos**:

> - RF‑001	O sistema deve permitir que o prestador de serviços gerencie um perfil informando Nome,Telefone de contato,CNPJ , Horário de Atendimento (incluindo dia da semana)

> - RF-005	O sistema deve permitir que o prestador de serviços indique a região que atenda

> - RF-008	O sistema deve permitir que o usuário faça alterações em seu perfil

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/ca06197d-051b-4b86-8442-ffb9d13e84f0)

### Tela 05c -Perfil do Prestador / Janela de Serviços

> **Requisitos atendidos**:

> - RF-004	O sistema deve permitir que o prestador de serviços gerencie os serviços que oferece

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/65df5e84-5156-4aaa-82c2-30994bb623f2)

### Tela 05d -Perfil do Prestador Logado/ Adicionar Atividades

> **Requisitos atendidos**:

> - RF-004	O sistema deve permitir que o prestador de serviços gerencie os serviços que oferece

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/e035df97-82d8-46d5-a826-352cc22a912e)

### Tela 05e -Perfil Público do Prestador

> **Requisitos atendidos**:

> - RF-002	O sistema deve gerar um token único para cada prestador no momento do cadastro

> - RNF-002 A aplicação deve ser integrada com uma API de localização

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/cc1a7ee6-a4b2-45bd-8836-3a5dee67a509)

### Tela 05f - Avaliação do Prestador

> **Requisitos atendidos**:

> - RF-006	O sistema deve permitir que os contratantes avaliem e descrevam os prestadores de serviço, para que isso seja possível o prestador deve informar o seu token ao cliente no momento da contratação.

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/cb0ed6c9-465b-47aa-ac90-04468ebf1175)

### Tela 06 - Ajuda

> **Requisitos atendidos**:

> - RF-009	O sistema deverá conter uma página com orientações sobre como utilizar o token e avaliar os serviços prestados

> - RF-010	O sistema deverá conter uma página explicando como contratar os serviços

> - RF-011	O sistema deverá conter uma página contendo informações sobre boas práticas na prestação de serviços

> - RF-012	O sistema deverá conter uma página com dúvidas frequentes na utilização do aplicativo

> - RF-013	O sistema deverá conter uma página com instruções de segurança na contratação do serviço

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/0ff313d1-3b4d-4bc9-8e7d-80688a15caa0)

### Tela 07 - Perfil Público do prestador / Janela de Serviços

> **Requisitos atendidos**:

> - RF-004	O sistema deve permitir que o prestador de serviços gerencie os serviços que oferece

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/1a2f0b33-37b8-420f-a144-b9779e3b9b37)

### Tela 08 - Perfil Público do Usuário

> **Requisitos atendidos**:

> - RF-008	O sistema deve permitir que o usuário faça alterações em seu perfil

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-house-hero/assets/127502021/b31bfa64-7596-4d5c-b09b-c03a0a1cd33e)


















