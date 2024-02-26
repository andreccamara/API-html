//var test
let numero = 150
let nome = 'ninetales'
let url = `https://pokeapi.co/api/v2/pokemon/${numero}`


//decl variaveis
let nomepk = document.querySelector('#nome123')
let numeropk = document.querySelector('#numero123')
let spritepk = document.querySelector('#imgpokemon')


let nompk = document.querySelector('#nomep')
let numpk = document.querySelector('#numerop')


//get pokemon
async function getpokemon() {


    try{ resposta = await fetch(url);
        console.log(resposta);


        let dadopokemon = await resposta.json();
        console.log(dadopokemon);
        
        let nomepokemon = dadopokemon.name
        nompk.innerHTML = nomepokemon
        numpk.innerHTML = dadopokemon.id
        spritepk.src = dadopokemon.sprites.other["official-artwork"].front_default
        
        
        //escrevento os status
        estatost= 
        (
            dadopokemon.stats[0].base_stat +
            dadopokemon.stats[1].base_stat +
            dadopokemon.stats[2].base_stat +
            dadopokemon.stats[3].base_stat +
            dadopokemon.stats[4].base_stat +
            dadopokemon.stats[5].base_stat 
            ) 


        estatos=(
            dadopokemon.stats[0].stat['name'] + ": " + dadopokemon.stats[0].base_stat
            + '<br>'
            +dadopokemon.stats[1].stat['name'] + ": " + dadopokemon.stats[1].base_stat
            +'<br>'
            +dadopokemon.stats[2].stat['name'] + ": " + dadopokemon.stats[2].base_stat
            +'<br>'
            +dadopokemon.stats[3].stat['name'] + ": " + dadopokemon.stats[3].base_stat
            +'<br>'
            +dadopokemon.stats[4].stat['name'] + ": " + dadopokemon.stats[4].base_stat
            +'<br>'
            +dadopokemon.stats[5].stat['name'] + ": " + dadopokemon.stats[5].base_stat
            +'<br>'
            + 'total: '+estatost
        )


        habilidade=dadopokemon
     
        let status=document.querySelector('#stats')
        status.innerHTML=estatos
        console.log(dadopokemon.stats)     
        console.log(dadopokemon.stats[0].stat['name'])     
        console.log(dadopokemon.stats[0].base_stat)     
        console.log(dadopokemon.stats[1].base_stat)   
        console.log(dadopokemon.stats[2].base_stat)   
        console.log(dadopokemon.stats[3].base_stat)   
        console.log(dadopokemon.stats[4].base_stat)   
        console.log(dadopokemon.stats[5].base_stat)  
        console.log(estatost)
        console.log(nomepokemon)
        console.log(dadopokemon.id)
        let x=''
        for(let i=0; i< dadopokemon.abilities.length;i++)
        {
        x= x+ '' +dadopokemon.abilities[i].ability['name'] +'<br>'
    }


        habilidade= document.querySelector('#habilidades')  
        habilidade.innerHTML= x  
            


    } catch(err) {
        console.log(err)
        console.log('erro')
    }
}
getpokemon()
function pesquisanumero() {
    let inputnumero=numeropk.value
    url = `https://pokeapi.co/api/v2/pokemon/${inputnumero}`
    console.log(url)
    getpokemon()
    let span = document.querySelector('#span')
    span.innerHTML=''
}


function pesquisanome() {
    let inputnome=nomepk.value
    url = `https://pokeapi.co/api/v2/pokemon/${inputnome}`
    console.log(url)
    getpokemon()
    let span = document.querySelector('#span')
    span.innerHTML=''
} 


