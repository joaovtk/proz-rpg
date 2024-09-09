function gerarMonstroAvancado(){
    /* Esquiva vai de 0 a 10*/
    let monsters = [
        {
            tipo: "Ogro",
            hp: 220,
            atk: 15,
            especial: {
                nome: "Sopro da Montanha",
                hp: 10,
                atk: 0,
                durabilidade: 1,
                cooldown: 1,
                esquiva: 0,
            }
        },
        {
            tipo: "Dragão",
            hp: 250,
            atk: 30,
            especial: {
                nome: "Soltar Fogo",
                hp: 0,
                atk: 50,
                durabilidade: 3,
                cooldown: 3,
                esquiva: 0,
            }
        },
        {
            tipo: "Goblin",
            hp: 170,
            atk: 10,
            especial: {
                nome: "Desvio Astuto",
                atk: 0,
                hp: 0,
                durabilidade: 1,
                cooldown: 3,
                esquiva: 10,
            }
        }
    ];

    return monsters[Math.floor(Math.random() * monsters.length)];
}

let res = gerarMonstroAvancado();

console.log(res);