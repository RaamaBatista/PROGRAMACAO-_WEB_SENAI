
var giti = document.querySelector('#git')
var imagem = document.querySelector('#img')

function buscarg(){
    axios.get(`https://api.github.com/users/${giti.value}`)
.then(response =>{

    imagem.setAttribute('src', response.data.avatar_url)
    
    document.getElementById('nome').value = response.data.name
    document.getElementById('biografia').value = response.data.bio
})
.catch(() => {
    alert(`O GitHub ${giti.value} não existe!`);
})
}
