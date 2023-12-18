const botaoPerfil = document.getElementById("perfil-botao");
const popUp = document.getElementById("1");
const boxEdicao = document.querySelector(".box-edicao");

botaoPerfil.addEventListener("click", () => {
    popUp.style.display = "flex";
    document.body.style.overflow = "hidden"; // Adiciona a classe para esconder a barra de rolagem
});

// Adiciona um evento para fechar o pop-up quando clicar fora dele
popUp.addEventListener("click", (event) => {
    if (event.target === popUp) {
        popUp.style.display = "none";
        document.body.style.overflow = "auto"; // Remove a classe para mostrar a barra de rolagem
    }
});

// Adiciona um evento para ajustar a posição da box-edicao quando a página for rolada
window.addEventListener("scroll", () => {
    const offsetTop = botaoPerfil.offsetTop + botaoPerfil.offsetHeight;
    boxEdicao.style.top = `${offsetTop}px`;
});

const botaoEditarPerfil = document.getElementById("Editar-botao");
const popUpPerfil = document.getElementById("pop-up-editar-perfil");
const boxEdicaoPerfil = document.querySelector(".box-edicao-editar-perfil");

botaoEditarPerfil.addEventListener("click", () => {
    popUpPerfil.style.display = "flex";

    // Recupera os elementos <textarea>
    const descricaoTextarea = document.querySelector('.box-edicao-editar-perfil textarea[name="desc-text"][data-type="descricao"]');
    const enderecoTextarea = document.querySelector('.box-edicao-editar-perfil textarea[name="desc-text"][data-type="endereco"]');
    // Adapte conforme necessário para os outros elementos

    // Recupera os elementos <p>
    const descricaoParagrafo = document.querySelector('.descricao-perfil .descricao');
    const enderecoParagrafo = document.querySelector('.contato-perfil .contato');
    // Adapte conforme necessário para os outros elementos

    // Define o valor dos <textarea> com base no conteúdo atual dos <p>
    descricaoTextarea.value = descricaoParagrafo.innerText;
    enderecoTextarea.value = enderecoParagrafo.innerText;
});

const confirmaBotao = document.getElementById("confirma-botao");

confirmaBotao.addEventListener("click", () => {
    // Recupera os elementos <textarea>
    const descricaoTextarea = document.querySelector('.box-edicao-editar-perfil textarea[name="desc-text"][data-type="descricao"]');
    const enderecoTextarea = document.querySelector('.box-edicao-editar-perfil textarea[name="desc-text"][data-type="endereco"]');
    // Adapte conforme necessário para os outros elementos

    // Recupera os elementos <p>
    const descricaoParagrafo = document.querySelector('.descricao-perfil .descricao');
    const enderecoParagrafo = document.querySelector('.contato-perfil .contato');
    // Adapte conforme necessário para os outros elementos

    // Atualiza o conteúdo dos <p> com base no valor dos <textarea>
    descricaoParagrafo.innerText = descricaoTextarea.value;
    enderecoParagrafo.innerText = enderecoTextarea.value;

    // Fecha o pop-up de edição
    popUpPerfil.style.display = "none";
    document.body.style.overflow = "auto"; // Remove a classe para mostrar a barra de rolagem
});

popUpPerfil.addEventListener("click", (event) => {
    if (event.target === popUpPerfil) {
        popUpPerfil.style.display = "none";
        document.body.style.overflow = "auto"; // Remove a classe para mostrar a barra de rolagem
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


function convertAndSave() {
    // Get the input element for selecting an image file
    var inputElement = document.getElementById('imageInput');

    // Ensure a file is selected
    if (inputElement.files.length > 0) {
      var file = inputElement.files[0];
      
      // Use FileReader to read the image file as Data URL
      var reader = new FileReader();

      reader.onload = function (e) {
        // Get the Base64-encoded image data
        var base64ImageData = e.target.result;

        // Save the Base64-encoded image data to localStorage
        localStorage.setItem('imageData', base64ImageData);

        // Display the image on the page
        displayImage(base64ImageData);
      };

      // Read the image file as Data URL
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file.');
    }
  }

  function displayImage(base64ImageData) {
    // Get the image container element
    var imageContainer = document.getElementById('imageContainer');

    // Create an image element
    var imgElement = document.createElement('img');

    // Set the source of the image to the Base64-encoded data
    imgElement.src = base64ImageData;

    // Append the image element to the container
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);
  }
