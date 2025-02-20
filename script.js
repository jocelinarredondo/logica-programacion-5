function adivinarNumeroSecreto() {
    // Generar un número aleatorio entre 1 y 100
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let numerosIngresados = [];
    let numeroUsuario;
  
    do {
      // Solicitar un número al usuario
      let entrada = prompt("Adivina el número secreto (entre 1 y 100):");
      numeroUsuario = Number(entrada);
  
      // Verificar si el número es válido
      if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        alert("Por favor, ingresa un número válido entre 1 y 100.");
        continue;
      }
  
      // Agregar el número válido a la lista de números ingresados
      numerosIngresados.push(numeroUsuario);
  
      // Verificar si el número es correcto
      if (numeroUsuario !== numeroSecreto) {
        alert("Ups, el número secreto es incorrecto. Vuelve a intentarlo.");
      }
    } while (numeroUsuario !== numeroSecreto);
  
    // Mensaje de éxito
    document.getElementById("mensaje").innerText = "¡Felicidades, adivinaste el número secreto!";
    document.getElementById("numeros-introducidos").innerText = `Números introducidos: ${numerosIngresados.join(", ")}`;
  }
  
  // Ejecutar la función al cargar el script
  adivinarNumeroSecreto();
  