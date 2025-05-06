function registrarUsuario() {
    const nome = document.getElementById("nomeUsuario").value.trim();
    if (nome === "") {
      alert("Por favor, insira seu nome.");
      return;
    }

    document.getElementById("registro").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("titulo-boasvindas").innerText = `Olá, ${nome}! Hora de se Hidratar!`;
  }

  function marcarHidratado() {
    const statusText = document.getElementById("status-text");
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, '0');
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    statusText.innerText = `✅ Última hidratação registrada às ${hora}:${minuto}`;
  }

  let totalAgua = 0;

        function adicionarAgua() {
            const input = document.getElementById("quantidade");
            const valor = parseInt(input.value);

            if (!isNaN(valor) && valor > 0) {
                totalAgua += valor;
                document.getElementById("total").textContent = `Total consumido hoje: ${totalAgua} ml`;
                input.value = "";
            } else {
                alert("Por favor, insira um valor válido em ml.");
            }
        }