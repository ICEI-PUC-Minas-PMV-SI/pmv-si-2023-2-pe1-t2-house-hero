import { ProviderContatos } from '../entities/ProviderContatos.js';
import { ProviderEndereco } from '../entities/ProviderEndereco.js';
import { InMemoryRepositoryServiceProvider } from './InMemoryRepositoryServiceProvider.js';

const user = JSON.parse(window.localStorage.getItem('user'));

if (user === undefined || user === null) {
    window.location.href = './login.html';
}

const repository = new InMemoryRepositoryServiceProvider();
const profilePicture = document.querySelectorAll('.profile-picture');

let generatedBase64 = null

document.querySelector("#image-input").addEventListener("input", ({ target }) => {
    const file = target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
        generatedBase64 = reader.result;
    };
})

const botaoEditarPerfil = document.getElementById("Editar-botao");
const popUpPerfil = document.getElementById("pop-up-editar-perfil");
const boxEdicaoPerfilTel = document.querySelector("#pop-up-editar-perfil #txt-contato-telefone");
const boxEdicaoPerfilEmail = document.querySelector("#pop-up-editar-perfil #txt-contato-email");
const boxEdicaoPerfilHora = document.querySelector("#horario-input");
const boxEdicaoPerfilEstado = document.querySelector("#pop-up-editar-perfil #txt-endereco-estado");
const boxEdicaoPerfilCidade = document.querySelector("#pop-up-editar-perfil #txt-endereco-cidade");
const boxEdicaoPerfilBairro = document.querySelector("#pop-up-editar-perfil #txt-endereco-bairro");
const boxEdicaoPerfilRua = document.querySelector("#pop-up-editar-perfil #txt-endereco-rua");
const boxEdicaoPerfilNumero = document.querySelector("#pop-up-editar-perfil #txt-endereco-numero");
const boxEdicaoPerfilDescricao = document.querySelector("#descricao-input");
const pDescricaoPerfil = document.getElementById("p-descricao-perfil");
const pContatoTel = document.getElementById("p-telefone-contatos");
const pContatoEmail = document.getElementById("p-email-contatos");
const pHorarioPerfil = document.getElementById("p-horario-perfil");
const pEstadoPerfil = document.getElementById("estado-result");
const pCidadePerfil = document.getElementById("cidade-result");
const pBairroPerfil = document.getElementById("bairro-result");
const pRuaPerfil = document.getElementById("rua-result");
const pNumeroPerfil = document.getElementById("numero-result");
const botaoConfirmaEdicao = document.getElementById("confirma-botao");
const nomePrestador = document.getElementById("nome-prestador");
const idPrestador = document.getElementById("id-prestador");
const fundoperfil = document.getElementsByClassName("fundoperfil");

fundoperfil[0].src = user.profilePicture || '../assets/profile-default.png';
boxEdicaoPerfilTel.value = user.contato ? user.contato.telefone : '';
boxEdicaoPerfilEmail.value = user.contato ? user.contato.email : '';
boxEdicaoPerfilHora.value = user.horario || '';
boxEdicaoPerfilEstado.value = user.endereco ? user.endereco.estado : '';
boxEdicaoPerfilCidade.value = user.endereco ? user.endereco.cidade : '';
boxEdicaoPerfilBairro.value = user.endereco ? user.endereco.bairro : '';
boxEdicaoPerfilRua.value = user.endereco ? user.endereco.rua : '';
boxEdicaoPerfilNumero.value = user.endereco ? user.endereco.numero : '';
boxEdicaoPerfilDescricao.value = user.descricao || '';

nomePrestador.innerText = user.name
idPrestador.innerText = user.id
pDescricaoPerfil.innerText = user.descricao || '';
pEstadoPerfil.innerText = user.endereco ? user.endereco.estado : '';
pCidadePerfil.innerText = user.endereco ? user.endereco.cidade : '';
pBairroPerfil.innerText = user.endereco ? user.endereco.bairro : '';
pRuaPerfil.innerText = user.endereco ? user.endereco.rua : '';
pNumeroPerfil.innerText = user.endereco ? user.endereco.numero : '';
pHorarioPerfil.innerText = user.horario || '';
pContatoEmail.innerText = user.contato ? user.contato.email : '';
pContatoTel.innerText = user.contato ? user.contato.telefone : '';

botaoEditarPerfil.addEventListener("click", () => {
    popUpPerfil.style.display = "flex";
});

popUpPerfil.addEventListener("click", (event) => {
    if (event.target === popUpPerfil) {
        popUpPerfil.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

botaoConfirmaEdicao.addEventListener("click", () => {

    user.descricao = boxEdicaoPerfilDescricao.value;
    user.horario = boxEdicaoPerfilHora.value;

    user.endereco = new ProviderEndereco(
        boxEdicaoPerfilEstado.value,
        boxEdicaoPerfilCidade.value,
        boxEdicaoPerfilBairro.value,
        boxEdicaoPerfilRua.value,
        boxEdicaoPerfilNumero.value
    );

    user.profilePicture = generatedBase64 ? generatedBase64 : user.profilePicture;
    fundoperfil[0].src = user.profilePicture || '../assets/profile-default.png';
    user.contato = new ProviderContatos(
        boxEdicaoPerfilEmail.value.trim(),
        boxEdicaoPerfilTel.value.trim()
    );

    
    repository.update(user.id, user);
    window.localStorage.setItem('user', JSON.stringify(user));

    pDescricaoPerfil.innerText = user.descricao;
    pHorarioPerfil.innerText = user.hora;
    pEstadoPerfil.innerText = user.endereco.estado;
    pCidadePerfil.innerText = user.endereco.cidade;
    pBairroPerfil.innerText = user.endereco.bairro;
    pRuaPerfil.innerText = user.endereco.rua;
    pNumeroPerfil.innerText = user.endereco.numero;
    pContatoEmail.innerText = user.contato.email;
    pContatoTel.innerText = user.contato.telefone;

    popUpPerfil.style.display = "none";
    document.body.style.overflow = "auto";
    repository.update()
});

const botaoPaginaServicos = document.getElementById("pagina-servicos");
botaoPaginaServicos.addEventListener("click", (event) => {
    window.location.href = "../pages/Perfil-Prestador-Servicos.html";
});

const botaoPaginaDescricao = document.getElementById("pagina-descricao");
botaoPaginaDescricao.addEventListener("click", (event) => {
    window.location.href = "../pages/Perfil-Prestador.html";
});

profilePicture[0].src = '../assets/without-picture.png';
profilePicture[1].src = '../assets/without-picture.png';

profilePicture[0].addEventListener('click', () => {
    const boxEdicao = document.querySelector('.box-edicao');
    boxEdicao.style.display === 'flex' ? boxEdicao.style.display = 'none' : boxEdicao.style.display = 'flex';
});

profilePicture[1].addEventListener('click', () => {
    const boxEdicao = document.querySelectorAll('.box-edicao');
    boxEdicao[1].style.display === 'flex' ? boxEdicao[1].style.display = 'none' : boxEdicao[1].style.display = 'flex';
});