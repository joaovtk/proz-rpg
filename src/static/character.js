function criarPersonagemAvancado(nome, classe, atributos){
    let character = {
        classe: "",
        hp: 0,
        atk: 0,
        esquiva: 0,
        points: {
            forca: 0,
            destreza: 0,
            inteligencia: 0
        },
        crit: 0,
        especial: {
            nome: "",
            atk: 0
        },
        defesa: 0
    };
    if(!nome && !classe){
        throw Error("Classe ou nome invalidos...");
    }else {
        switch(classe.toLowerCase()){
            case "guerreiro":
                character.atk += 20;
                character.hp += 100;
                character.points = atributos;
                character.especial.nome = "Catedral de Lâminas";
                character.classe = "guerreiro";
                break;
            case "mago":
                character.atk += 25;
                character.hp += 80
                character.points = atributos;
                character.classe = "mago";
                character.especial.nome = "Parede de Fogo";
                break;
            case "arqueiro":
                character.atk += 15;
                character.hp += 90;
                character.points = atributos;
                character.classe = "arqueiro";
                character.especial.nome = "Flecha da Precisão";
                break;
            default:
                alert("Classe Invalida");
        }
        if(character.classe && character.atk && character.hp){
            let points = 0;
            points += character.points.forca;
            points += character.points.inteligencia;
            points += character.points.destreza;

            if(points <= 10){
                // Força
                character.atk += character.points.forca;
                character.hp += character.points.forca;
                character.defesa += character.points.forca;

                // Destreza
                character.crit += character.points.destreza;
                character.esquiva += character.points.destreza;

                // Inteligencia 
                if(character.classe == "mago"){
                    character.especial.atk += character.points.inteligencia;
                    character.defesa += character.points.inteligencia;
                }else if(character.classe == "arqueiro"){
                    character.especial.atk += character.points.destreza;
                }else {
                    character.especial.defesa += character.points.inteligencia;
                }
                return character;
            }else {
                alert("Distribuição de pontos incorretas tente novamente");
            }
        }else {
            throw Error("Valores Invalidos")
        }
    }
}