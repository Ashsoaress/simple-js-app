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
 
    function addListItem(pokemon) {
    
      let pokemonListItems = document.querySelector(".pokemon-list");
      pokemonListItems.classList.add("list-group");
      let listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
  
      let button = document.createElement("button");
      button.classList.add("btn-block");
      button.classList.add("btn-lg");
      button.classList.add("btn-primary");
      button.innerText = pokemon.name;
      button.classList.add("pokemonButton");
      listItem.appendChild(button);
      pokemonListItems.appendChild(listItem);
  
      button.addEventListener("click", function () {
        showDetails(pokemon);
      });
    }
  
    function loadList() {
      return fetch(apiUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            add(pokemon);
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    }
  
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        })
        .catch(function (e) {
          console.error(e);
        });
    }
  
   
  
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        showModal(pokemon);
      });
    }
  
    function showModal(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        let modalTitle = document.querySelector(".modal-title");

        return {
         getAll: getAll,
         add: add,
         addListItem: addListItem,
         loadList: loadList,
         loadDetails: loadDetails,
         showDetails: showDetails,
         showModal: showModal,
       };
     })();
 
 
    pokemonRepository.getAll().forEach(function(pokemon) {
      if (pokemon.height >= 7) { 
         document.write(pokemon.name + " (height: " + pokemon.height + ") - Wow that's big!<br>");
      } else { 
         document.write(pokemon.name + " (height: " + pokemon.height + ")<br>");
      }
    });
