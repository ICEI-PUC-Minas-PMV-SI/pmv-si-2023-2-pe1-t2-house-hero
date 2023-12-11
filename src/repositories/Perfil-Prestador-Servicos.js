const botaoPerfil = document.getElementById("perfil-botao");
const popUp = document.getElementById("1");
const boxEdicao = document.querySelector(".box-edicao");

botaoPerfil.addEventListener("click", () => {
    popUp.style.display = "flex";
    document.body.style.overflow = "hidden"; 
});


popUp.addEventListener("click", (event) => {
    if (event.target === popUp) {
        popUp.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
});


window.addEventListener("scroll", () => {
    const offsetTop = botaoPerfil.offsetTop + botaoPerfil.offsetHeight;
    boxEdicao.style.top = `${offsetTop}px`;
});

const botaoEditarPerfil = document.getElementById("Editar-botao");
const popUpPerfil = document.getElementById("pop-up-editar-perfil");
const boxEdicaoPerfil = document.querySelector(".box-edicao-editar-perfil");

botaoEditarPerfil.addEventListener("click", () => {
    popUpPerfil.style.display = "flex";

    
    const descricaoTextarea = document.querySelector('.box-edicao-editar-perfil textarea[name="desc-text"][data-type="descricao"]');
    const enderecoTextarea = document.querySelector('.box-edicao-editar-perfil textarea[name="desc-text"][data-type="endereco"]');
    

    
    const descricaoParagrafo = document.querySelector('.descricao-perfil .descricao');
    const enderecoParagrafo = document.querySelector('.contato-perfil .contato');
    
    descricaoTextarea.value = descricaoParagrafo.innerText;
    enderecoTextarea.value = enderecoParagrafo.innerText;
});

const confirmaBotao = document.getElementById("confirma-botao");

confirmaBotao.addEventListener("click", () => {
    
    const descricaoTextarea = document.querySelector('.box-edicao-editar-perfil textarea[name="desc-text"][data-type="descricao"]');
    const enderecoTextarea = document.querySelector('.box-edicao-editar-perfil textarea[name="desc-text"][data-type="endereco"]');
    
    const descricaoParagrafo = document.querySelector('.descricao-perfil .descricao');
    const enderecoParagrafo = document.querySelector('.contato-perfil .contato');
   
    descricaoParagrafo.innerText = descricaoTextarea.value;
    enderecoParagrafo.innerText = enderecoTextarea.value;

    
    popUpPerfil.style.display = "none";
    document.body.style.overflow = "auto"; 
});

popUpPerfil.addEventListener("click", (event) => {
    if (event.target === popUpPerfil) {
        popUpPerfil.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
});

const botaoPaginaServicos = document.getElementById("pagina-servicos");
botaoPaginaServicos.addEventListener("click", (event) => {
    window.location.href ="./pagina-servicos.html";
});

const botaoPaginaDescricao = document.getElementById("pagina-descricao");
botaoPaginaDescricao.addEventListener("click", (event) => {
    window.location.href ="./pagina-descricao.html";
});

const botaoLogo = document.getElementById("botao-logo");
botaoLogo.addEventListener("click", (event) => {
    window.location.href ="./src/pages/index.html";
});

const botaoMiniPerfil = document.getElementById("mini-menu-perfil");
botaoMiniPerfil.addEventListener("click", (event) => {
    window.location.href ="./src/pages/Perfil-Prestador.html";
});

const botaoMiniAjuda = document.getElementById("mini-menu-ajuda");
botaoMiniAjuda.addEventListener("click", (event) => {
    window.location.href ="./src/pages/Ajuda.html";
});

const botaoMiniLogout = document.getElementById("mini-menu-sair");
botaoMiniLogout.addEventListener("click", (event) => {
    window.location.href ="./src/pages/login.html";
});

const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});




