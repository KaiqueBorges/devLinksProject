function toggleMode () {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver em light-mode, adicionar Avatar-light
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    // se tiver dark-mode, manter Avatar padrão
    img.setAttribute("src", "./assets/Avatar.png")
  }
}