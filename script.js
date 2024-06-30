function toggleMode() {
  //controla o fundo
  const html = document.documentElement
  html.classList.toggle("Light")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("Light")) {
    //se estiver em Light mode, adicionar a imagem azul
    img.setAttribute("src", "./assets/assets/Lucas-light.jpeg")
    img.setAttribute("alt", "Foto guitarra")
  } else {
    //se estiver sem o Light mode mander a imagem amarela
    img.setAttribute("src", "./assets/assets/Lucas.jpeg")
    img.setAttribute("alt", "Foto do Lucas ")
  }
}
