function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  

  //mudando a imagem do dark para o light mode

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/light-mode.png")
  } else {
    //se tiver se light mode, deixar imagem normal
    img.setAttribute("src", "./assets/dark-mode.png")
  }


  //mesma lógica para mudar o alt
  const alt = document.querySelector("#profile img")

  if(html.classList.contains("light")){
    alt.setAttribute(
      "alt",
      "imagem de de Aliton em frente ao espelho, de óculos e com o celular na mão"
    )
  }else {
    alt.setAttribute(
      "alt",
      "imagem de de Aliton em frente ao espelho com o celular na mão"
    )
  }
}