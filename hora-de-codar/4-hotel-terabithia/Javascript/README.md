# Hotel Terabithia - JavaScript

## Organização

- `Hotel.html`: autenticação, menu principal e reservas de quartos.
- `CadastroDeHospedes.html`: cadastro, pesquisa, atualização, remoção e listagem de hóspedes.
- `Eventos.html`, `Auditorio.html`, `Garcon.html` e `Buffet.html`: páginas independentes que salvam seus resultados no rascunho compartilhado do evento. `util.html` reúne esses resultados e pede a confirmação.
- `ArCondicionado.html`: coleta e comparação de orçamentos de manutenção.
- `Abastecimento.html`: recomendação de combustível por posto e ranking de custos.
- `Relatorios.html`: resumo operacional de reservas, ocupação, hóspedes e eventos confirmados.
- `shared.js`: persistência no navegador, validação numérica e formatação de moeda compartilhadas.

As páginas compartilham dados pelo `localStorage` do navegador. O evento em andamento fica salvo até a confirmação ou cancelamento. Reservas, hóspedes e eventos confirmados permanecem disponíveis ao navegar entre os módulos, no mesmo navegador e endereço local.

## Como executar

Na pasta `Javascript`, inicie um servidor HTTP local:

```sh
python3 -m http.server 8000
```

Abra `http://localhost:8000/Hotel.html` no navegador. Use a senha `2678` no primeiro acesso. Não abra os módulos como arquivos `file://`, pois o navegador pode isolar o armazenamento entre páginas.

## Verificação manual

1. Entre no sistema e abra o cadastro. Cadastre um hóspede, volte ao menu e confira a listagem; o registro deve permanecer após a navegação.
2. Faça uma reserva com diária `200`, três diárias e quarto executivo. O resumo deve apresentar subtotal `R$ 810,00`, taxa `R$ 81,00` e total `R$ 891,00`; confirme e confira a ocupação no relatório.
3. Execute `Eventos.html`, `Auditorio.html`, `Garcon.html` e `Buffet.html` separadamente pelos links comuns. Use 192 convidados, Laranja (42 cadeiras adicionais), segunda-feira às 13h e duração de 8 horas.
4. Abra `util.html`, informe a empresa e confirme o relatório do evento. Ele reúne os resultados guardados pelas páginas e pergunta a confirmação.
5. Para esse evento, confira 20 garçons, 38,4 L de café, 96 L de água, 1.344 salgados e custo de garçons de `R$ 1.680,00`. Confirme e veja o contador/receita no relatório operacional.
6. No abastecimento, use os preços do exemplo do README. O ranking deve indicar gasolina nos dois postos e Wayne Oil como o menor custo para 42 L.
7. Em ar-condicionado, teste dois orçamentos e confira o menor valor.

Para limpar os dados de teste no console do navegador, execute:

```js
localStorage.removeItem("hotelTerabithiaState");
sessionStorage.removeItem("hotelUsuario");
location.reload();
```

## Observação sobre o exemplo do buffet

Aplicando os preços unitários listados no README a 192 convidados, o custo calculado é R$ 526,08: café R$ 30,72, água R$ 38,40 e salgados R$ 456,96. O exemplo do README informa R$ 540,96, que não corresponde à soma desses valores; o módulo JavaScript segue as quantidades e os preços unitários descritos.