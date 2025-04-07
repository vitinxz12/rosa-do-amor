function atualizarTempo() {
    const dataInput = document.getElementById("dataInicio").value;
    if (!dataInput) return;
  
    const inicio = new Date(dataInput);
    const agora = new Date();
  
    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    let horas = agora.getHours() - inicio.getHours();
  
    if (horas < 0) {
      horas += 24;
      dias--;
    }
  
    if (dias < 0) {
      meses--;
      const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
      dias += ultimoDiaMesAnterior;
    }
  
    if (meses < 0) {
      anos--;
      meses += 12;
    }
  
    // Atualiza a frase
    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
  
    // Crescimento da rosa
    const escala = 1 + anos * 0.3 + meses * 0.15 + dias * 0.03 + horas * 0.01;
    document.getElementById("rosa").style.transform = `scale(${escala})`;
  
    // Frase especial
    const frase = `💖 Vocês estão juntos há ${anos} ano(s), ${meses} mês(es), ${dias} dia(s) e ${horas} hora(s)! 💖`;
    document.getElementById("fraseEspecial").textContent = frase;
  }
  