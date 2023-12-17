import { InMemoryRepositoryServiceProvider } from './InMemoryRepositoryServiceProvider.js';
import { ServiceProvider } from '../entities/ServiceProvider.js';
import { ProviderEndereco } from '../entities/ProviderEndereco.js';
import { ProviderContatos } from '../entities/ProviderContatos.js';
import { encrypt, decrypt } from '../utils/Encrypter.js';


const repository = new InMemoryRepositoryServiceProvider();
const serviceProvider = new ServiceProvider();

document.addEventListener("DOMContentLoaded", () => {

    const prestadorLogadoId = ServiceProvider.id;
    const storedServiceProviders = JSON.parse(window.localStorage.getItem('serviceProviders')) || [];
    const prestadorLogado = storedServiceProviders.find(provider => provider.id === prestadorLogadoId);


    if (prestadorLogado) {
        nomePrestador.innerText = storedServiceProviders.name
        idPrestador.innerText = storedServiceProviders.id
        pDescricaoPerfil.innerText = prestadorLogado.descricao || '';
        pEstadoPerfil.innerText = prestadorLogado.endereco.estado || '';
        pCidadePerfil.innerText = prestadorLogado.endereco.cidade || '';
        pBairroPerfil.innerText = prestadorLogado.endereco.bairro || '';
        pRuaPerfil.innerText = prestadorLogado.endereco.rua || '';
        pNumeroPerfil.innerText = prestadorLogado.endereco.numero || '';
        pHorarioPerfil.innerText = prestadorLogado.horario || '';
        pContatoEmail.innerText = prestadorLogado.contato.email || '';
        pContatoTel.innerText = prestadorLogado.contato.telefone || '';
    }
});

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
const boxEdicaoPerfil = document.querySelector("#pop-up-editar-perfil textarea");
const boxEdicaoPerfilTel = document.querySelector("#pop-up-editar-perfil #txt-contato-telefone");
const boxEdicaoPerfilEmail = document.querySelector("#pop-up-editar-perfil #txt-contato-email");
const boxEdicaoPerfilHora = document.querySelector("#pop-up-editar-perfil #horario-txt");
const boxEdicaoPerfilEstado = document.querySelector("#pop-up-editar-perfil #txt-endereco-estado");
const boxEdicaoPerfilCidade = document.querySelector("#pop-up-editar-perfil #txt-endereco-cidade");
const boxEdicaoPerfilBairro = document.querySelector("#pop-up-editar-perfil #txt-endereco-bairro");
const boxEdicaoPerfilRua = document.querySelector("#pop-up-editar-perfil #txt-endereco-rua");
const boxEdicaoPerfilNumero = document.querySelector("#pop-up-editar-perfil #txt-endereco-numero");
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

    serviceProvider.descricao = boxEdicaoPerfil.value;
    serviceProvider.hora = boxEdicaoPerfilHora.value;


    serviceProvider.endereco = new ProviderEndereco(
        boxEdicaoPerfilEstado.value,
        boxEdicaoPerfilCidade.value,
        boxEdicaoPerfilBairro.value,
        boxEdicaoPerfilRua.value,
        boxEdicaoPerfilNumero.value
    );


    serviceProvider.contato = new ProviderContatos(
        boxEdicaoPerfilEmail.value.trim(),
        boxEdicaoPerfilTel.value.trim()
    );


    repository.update(serviceProvider.id, serviceProvider);

    nomePrestador.innerText = serviceProvider.name
    idPrestador.innerText = serviceProvider.id
    pDescricaoPerfil.innerText = serviceProvider.descricao;
    pHorarioPerfil.innerText = serviceProvider.hora;
    pEstadoPerfil.innerText = serviceProvider.endereco.estado;
    pCidadePerfil.innerText = serviceProvider.endereco.cidade;
    pBairroPerfil.innerText = serviceProvider.endereco.bairro;
    pRuaPerfil.innerText = serviceProvider.endereco.rua;
    pNumeroPerfil.innerText = serviceProvider.endereco.numero;
    pContatoEmail.innerText = serviceProvider.contato.email;
    pContatoTel.innerText = serviceProvider.contato.telefone;



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

const botaoLogo = document.getElementById("botao-logo");
botaoLogo.addEventListener("click", (event) => {
    window.location.href = "../pages/index.html";
});

const botaoMiniPerfil = document.getElementById("mini-menu-perfil");
botaoMiniPerfil.addEventListener("click", (event) => {
    window.location.href = "../pages/Perfil-Prestador.html";
});

const botaoMiniAjuda = document.getElementById("mini-menu-ajuda");
botaoMiniAjuda.addEventListener("click", (event) => {
    window.location.href = "../pages/Ajuda.html";
});

const botaoMiniLogout = document.getElementById("mini-menu-sair");
botaoMiniLogout.addEventListener("click", (event) => {
    window.location.href = "../pages/login.html";
});
