 let audio = document.getElementById('miAudio');
  let imagen = document.getElementById('imagen');
  let titulo = document.getElementById('titulo');
  let currentIndex = 0;
  let intervalId;
  audio.currentTime = 16;

  // Imágenes para el arreglo (reemplaza con tus propias imágenes)
  let imagenes = [
    "img/mes_7_dia_30.jpg",
    "img/mes_8_dia_2.jpg",
    "img/mes_8_dia_19.jpg",
    "img/mes_8_dia_26.jpg",
    "img/mes_9_dia_22.jpg",
    "img/mes_9_dia_28.jpg",
    "img/mes_10_dia_13_(2).jpg",
    "img/mes_10_dia_13_(1).jpg",
    "img/mes_10_dia_23.jpg",
    "img/mes_10_dia_23_2.jpg",
    "img/mes_10_dia_27.jpg",
    "img/mes_11_dia_5.jpg",
    "img/mes_11_dia_9.jpg",
    "img/mes_11_dia_11.jpg",
    "img/mes_11_dia_17_(2).jpg",
    "img/mes_11_dia_17_(1).jpg",
    "img/mes_12_dia_1.jpg",
    "img/mes_12_dia_3.jpg",
    "img/mes_12_dia_20.jpg",
    "img/mes_13_dia_1.jpg",
    "img/mes_13_dia_5.jpg",
    "img/mes_13_dia_9.jpg",
    "img/mes_13_dia_15.jpg",
    "img/25_12.png"];


  // Función para cambiar la imagen cada 30 segundos
  function cambiarImagen() {
    imagen.src = imagenes[currentIndex];
    currentIndex = (currentIndex + 1) % imagenes.length;

    if (currentIndex === 0) 
    {
      clearInterval(intervalId);
    }
  }

  // Función para manejar el evento de la tecla espacio
  function manejarTeclaEspacio(event) 
  {
    if (event.code === 'Space') 
    {
        titulo.textContent = "Mira todo lo que hemos hecho en estos meses";

      if (audio.paused) 
      {
        audio.muted = false;
        audio.play();
        intervalId = setInterval(cambiarImagen, 6000);
      } 

      else 
      {
        audio.pause();
        clearInterval(intervalId);
      }
    }
  }

  // Agregar evento de tecla para manejar la barra espaciadora
  document.addEventListener('keydown', manejarTeclaEspacio);