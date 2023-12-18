
import { InMemoryRepositoryServiceProvider } from './InMemoryRepositoryServiceProvider.js';
const repository = new InMemoryRepositoryServiceProvider();
const id = window.location.search.replace('?id=', '');

const user = repository.getById(id);

if (user === undefined || user === null) {
    window.location.href = './login.html';
}


const profilePicture = document.querySelectorAll('.profile-picture');

const pDescricaoPerfil = document.getElementById("p-descricao-perfil");
const pContatoTel = document.getElementById("p-telefone-contatos");
const pContatoEmail = document.getElementById("p-email-contatos");
const pHorarioPerfil = document.getElementById("p-horario-perfil");
const pEstadoPerfil = document.getElementById("estado-result");
const pCidadePerfil = document.getElementById("cidade-result");
const pBairroPerfil = document.getElementById("bairro-result");
const pRuaPerfil = document.getElementById("rua-result");
const pNumeroPerfil = document.getElementById("numero-result");
const nomePrestador = document.getElementById("nome-prestador");
const idPrestador = document.getElementById("id-prestador");
const fundoperfil = document.getElementsByClassName("fundoperfil");

fundoperfil[0].src = user.profilePicture || '../assets/profile-default.png';

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


profilePicture[0].src =  '../assets/without-picture.png';
profilePicture[1].src =  '../assets/without-picture.png';

profilePicture[0].addEventListener('click', () => {
    const boxEdicao = document.querySelector('.box-edicao');
    boxEdicao.style.display === 'flex' ? boxEdicao.style.display = 'none' : boxEdicao.style.display = 'flex';
});

profilePicture[1].addEventListener('click', () => {
    const boxEdicao = document.querySelectorAll('.box-edicao');
    boxEdicao[1].style.display === 'flex' ? boxEdicao[1].style.display = 'none' : boxEdicao[1].style.display = 'flex';
});