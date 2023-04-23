let pokemonRepository = (function(){
    let pokemonList = [];
 
    function getAll(){
       return pokemonList;
    }
 
    function add(pokemon){
       pokemonList.push(pokemon)
    }
 
    return {
     getAll: getAll,
     add: add
    };
 
    })();
 
    pokemonRepository.add ({
       name: 'Bulbasaur',
       height: 7,
       types: ['grass', 'poison']
    });
 
    pokemonRepository.add ({
    name: 'charmender',
    height: '6',
    types: ['fire']
    });
 
    pokemonRepository.add ( {
    name: 'squirtle',
    height: 5,
    types: ['water']
    }); 
 
 
    pokemonRepository.getAll().forEach(function(pokemon) {
      if (pokemon.height >= 7) { 
         document.write(pokemon.name + " (height: " + pokemon.height + ") - Wow that's big!<br>");
      } else { 
         document.write(pokemon.name + " (height: " + pokemon.height + ")<br>");
      }
    });