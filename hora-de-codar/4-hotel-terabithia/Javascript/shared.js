(function () {
    const storageKey = "hotelTerabithiaState";
    const emptyState = {
        quartos: Array(20).fill("L"),
        eventoAtual: null,
        reservas: [],
        hospedes: [],
        eventos: [],
        orcamentos: [],
        abastecimentos: []
    };

    function lerEstado() {
        try {
            const salvo = localStorage.getItem(storageKey);
            const estado = salvo ? { ...emptyState, ...JSON.parse(salvo) } : { ...emptyState };
            Object.keys(emptyState).forEach((chave) => {
                if (Array.isArray(emptyState[chave]) && !Array.isArray(estado[chave])) {
                    estado[chave] = [...emptyState[chave]];
                }
            });
            estado.hospedes = estado.hospedes.map((hospede) => ({
                ...hospede,
                dataHora: hospede.dataHora ? new Date(hospede.dataHora) : null
            }));
            return estado;
        } catch (error) {
            return {
                ...emptyState,
                quartos: [...emptyState.quartos],
                reservas: [],
                hospedes: [],
                eventos: [],
                orcamentos: [],
                abastecimentos: []
            };
        }
    }

    function salvarEstado(estado) {
        localStorage.setItem(storageKey, JSON.stringify(estado));
    }

    function adicionarRegistro(colecao, registro) {
        const estado = lerEstado();
        if (!Array.isArray(estado[colecao])) {
            throw new Error(`Coleção desconhecida: ${colecao}`);
        }
        estado[colecao].push(registro);
        salvarEstado(estado);
        return registro;
    }

    function atualizarEvento(dados) {
        const estado = lerEstado();
        estado.eventoAtual = { ...(estado.eventoAtual || {}), ...dados };
        salvarEstado(estado);
        return estado.eventoAtual;
    }

    function lerEvento() {
        return lerEstado().eventoAtual;
    }

    function limparEvento() {
        const estado = lerEstado();
        estado.eventoAtual = null;
        salvarEstado(estado);
    }

    function formatarMoeda(valor) {
        return Number(valor).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    function voltarAoMenu() {
        window.location.href = "Hotel.html";
    }

    function perguntarNumero(mensagem, minimo, maximo, inteiro) {
        while (true) {
            const resposta = prompt(mensagem);
            if (resposta === null) {
                return null;
            }

            if (!resposta.trim()) {
                alert("O valor não pode ficar vazio.");
                continue;
            }

            const numero = Number(resposta.replace(",", "."));
            const valido = Number.isFinite(numero)
                && numero >= minimo
                && numero <= maximo
                && (!inteiro || Number.isInteger(numero));

            if (valido) {
                return numero;
            }

            alert(`Informe um número${inteiro ? " inteiro" : ""} entre ${minimo} e ${maximo}.`);
        }
    }

    function instalarNavegacao() {
        window.addEventListener("DOMContentLoaded", () => {
            const pagina = window.location.pathname.split("/").pop();
            if (pagina === "Hotel.html" || document.querySelector("[data-hotel-navigation]")) {
                return;
            }

            const paginas = [
                ["Menu", "Hotel.html"],
                ["Reservas", "Hotel.html"],
                ["Hóspedes", "CadastroDeHospedes.html"],
                ["Eventos", "Eventos.html"],
                ["Agenda", "Auditorio.html"],
                ["Garçons", "Garcon.html"],
                ["Buffet", "Buffet.html"],
                ["Relatório do evento", "util.html"],
                ["Ar-condicionado", "ArCondicionado.html"],
                ["Abastecimento", "Abastecimento.html"],
                ["Relatórios", "Relatorios.html"]
            ];
            const navegacao = document.createElement("nav");
            navegacao.dataset.hotelNavigation = "true";
            navegacao.style.cssText = "display:flex; flex-wrap:wrap; gap:12px; padding:12px; border-bottom:1px solid #bbb; font:16px sans-serif";
            paginas.forEach(([rotulo, destino]) => {
                const link = document.createElement("a");
                link.href = destino;
                link.textContent = rotulo;
                navegacao.append(link);
            });
            document.body.prepend(navegacao);
        });
    }

    instalarNavegacao();

    window.HotelTerabithia = {
        lerEstado,
        salvarEstado,
        adicionarRegistro,
        atualizarEvento,
        lerEvento,
        limparEvento,
        perguntarNumero,
        formatarMoeda,
        voltarAoMenu
    };
})();