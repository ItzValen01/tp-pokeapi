fetch("https://pokeapi.co/api/v2/pokemon?limit=1350") // ?limit=1350
    .then(res1 => res1.json())
    .then(data1 => {
        //console.log(data1)
        data1.results.forEach(pokemon => {
            fetch(pokemon.url)
                .then(res => res.json())
                .then(data => {
                    const abilities = data.abilities
                        .map(ability => `<li>${ability.ability.name}</li>`)
                        .join('')

                    document.getElementById("pokemons").innerHTML += `
                        <div class="col-md-3 mb-4">
                            <div class="card">
                                <img src="${data.sprites.other["official-artwork"].front_default}" class="card-img-top" />

                                <div class="card-body">
                                    <h5 class="card-title">
                                        ${pokemon.name}
                                    </h5>

                                    <ul id="${data1.name}-pokemon">
                                        ${abilities}
                                    </ul>
                                </div>
                            </div>
                        </div>
            `
                })
        })
    })

// .sprites.other["official-artwork"].front_default