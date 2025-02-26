function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")



  //pegar a tag img
  const img = document.querySelector('#profile img')

  //susbstituir a imagem
  if (html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './media/assets/avatar-light.png')
    img.setAttribute(
      "alt",
      "Imagem do mayk brito, professor da rocketseat, com fundo degradê na esquerda roxo e na direita azul, vestido com camiseta preta, uma jaqueta jeans, cabelo curto, barba, sorriso e usando par de óculos escuro. Rosto com expressão de curtindo uma música."
    )
    
  } else {
    //se tiver sem light, manter a imagem normal
    img.setAttribute('src', './media/assets/avatar.png')
  }

 
 
}