# Áureo — Protótipo navegável

**Áureo** é uma fintech voltada ao controle da vida financeira pessoal — organizando recebimentos, despesas, metas e relatórios em uma única interface intuitiva, com identidade visual em preto e dourado.

Este repositório contém o **protótipo web navegável** da plataforma, materializando a ideia definida nas fases de descoberta e validação do projeto (Startup One / FIAP).

## 🔗 Link navegável

Após a publicação, o protótipo fica disponível em:

**https://lucasarthur-dev.github.io/aureo-fintech/**

## 🔑 Acesso de demonstração

| E-mail | Senha |
|---|---|
| `demo@aureo.com` | `aureo123` |

Na tela de login, o botão **Preencher** coloca esses dados automaticamente. Contas criadas em **Cadastro** também funcionam no login (ficam salvas só no navegador, com a senha guardada como hash SHA-256). A autenticação é simulada: não há backend.

## 📁 Telas incluídas

| Tela | Arquivo | Descrição |
|---|---|---|
| Login | `index.html` | Autenticação do usuário com e-mail e senha. |
| Cadastro | `cadastro.html` | Criação de conta (nome, e-mail, CPF, senha). |
| Dashboard | `dashboard.html` | Visão geral: saldo, receitas, despesas, gráfico de fluxo de caixa e últimas movimentações. |
| Recebimentos | `recebimentos.html` | Controle das fontes de renda (salário, freela, investimentos). |
| Despesas | `despesas.html` | Gestão de gastos com filtros por categoria e período. |
| Metas | `metas.html` | Metas de economia com progresso, aportes ("Guardar dinheiro"), criação de novas metas e limites de gastos por categoria. |
| Relatórios | `relatorios.html` | Análise por período (3/6/12 meses): receitas x despesas, gastos por categoria, evolução do patrimônio, insights automáticos e exportação CSV. |

## 🎨 Stack

- HTML5 + CSS3 (variáveis customizadas)
- Bootstrap 5.3 + Bootstrap Icons
- Chart.js 4 (gráfico de fluxo de caixa)
- Fonte Poppins (Google Fonts)

## 🚀 Executar localmente

Basta abrir `index.html` em um navegador moderno — todo o protótipo é estático.

## 👤 Autor

Lucas Arthur — Fase 04 (Prototipação) · Startup One
