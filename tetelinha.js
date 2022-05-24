var cepi= document.querySelector('#cep')

function buscar(){
    axios.get("https://viacep.com.br/ws/"+cep.value+"/json/")
    .then(response=>{
document.getElementById('rua').value= response.data.logradouro
document.getElementById('bairro').value= response.data.bairro
document.getElementById('cidade').value=response.data.localidade
document.getElementById('estado').value=response.data.Uf
    })
    .catch(()=>{
alert(" O cep " +cep.value+ "não existe");
    })
};



