import { Categoria } from "../model/categoria";
import { Prato } from "../model/prato";

export const CATEGORIA: Categoria[] = [
    {
        id: 1,
        nomeCat: "Entradas",
        imgCat: "/assets/imgs/agil_entrada.jpg",
        numPratos: "4 Pratos",
    },
    {
        id: 2,
        nomeCat: "Principais",
        imgCat: "/assets/imgs/agil_principal.jpg",
        numPratos: "4 Pratos",
    },
    {
        id: 3,
        nomeCat: "Sobremesas",
        imgCat: "/assets/imgs/agil_sobremesa.jpg",
        numPratos: "4 Pratos",
    },
    {
        id: 4,
        nomeCat: "Bebidas",
        imgCat: "/assets/imgs/agil_bebida.jpg",
        numPratos: "4 Bebidas",
    },

]

export const PRATOS: Prato[] = [
    {
        id: 1,
        idCat: 1,
        catPrato: "Entradas",
        nomePrato: "Tartar de Salmão",
        numPrato: 1,
        descPrato: "Com manga, ervas frescas e limão siciliano.",
        imgPrato: "/assets/imgs/agil_entradas/agil_tartar.jpg",
        preco: 64.00,
    },
    {
        id: 2,
        idCat: 1,
        catPrato: "Entradas",
        nomePrato: "Carpaccio",
        numPrato: 2,
        descPrato: "Carne de aproximadamente 70g.",
        imgPrato: "/assets/imgs/agil_entradas/agil_carpaccio.png",
        preco: 24.90,
    },
    {
        id: 3,
        idCat: 1,
        catPrato: "Entradas",
        nomePrato: "Salada Caesar",
        numPrato: 3,
        descPrato: "tradicional salada de alface americana, parmesão em lascas, croutons, molho caesar e cubinhos de bacon.",
        imgPrato: "/assets/imgs/agil_entradas/agil_caesar.png",
        preco: 25.40,
    },
    {
        id: 4,
        idCat: 1,
        catPrato: "Entradas",
        nomePrato: "Porção de bolinho de bacalhau.",
        numPrato: 4,
        descPrato: "Bolinho de bacalhau com 12 unidades. ",
        imgPrato: "/assets/imgs/agil_entradas/agil_bolinho.png",
        preco: 30.70,
    },
    {
        id: 5,
        idCat: 2,
        catPrato: "Principais",
        nomePrato: "Ravioli de Mussarela de Búfala",
        numPrato: 5,
        descPrato: "Ao molho de tomate e basílico.",
        imgPrato: "/assets/imgs/agil_principais/agil_ravioli.jpg",
        preco: 49.00,
    },
    {
        id: 6,
        idCat: 2,
        catPrato: "Principais",
        nomePrato: "Carioquinha La Mole Contrafilé",
        numPrato: 6,
        descPrato: "contrafilé com arroz branco, feijão, farofa e batatas fritas.",
        imgPrato: "/assets/imgs/agil_principais/carioquinha.png",
        preco: 28.90,
    },
    {
        id: 7,
        idCat: 2,
        catPrato: "Principais",
        nomePrato: "Mozzarella Marinara",
        numPrato: 7,
        descPrato: "Deliciosas tiras de mozzarella empanadas, acompanhadas do clássico molho marinara da casa.",
        imgPrato: "/assets/imgs/agil_principais/agil_mozzarela.jpg",
        preco: 29.90,
    },
    {
        id: 8,
        idCat: 2,
        catPrato: "Principais",
        nomePrato: "Arancini",
        numPrato: 8,
        descPrato: "Bolinhos empanados de risoto com linguiça tipo italiana e pimentões, servidos com o clássico molho marinara da casa.",
        imgPrato: "/assets/imgs/agil_principais/agil_arancini.jpeg",
        preco: 29.90,
    },
    {
        id: 9,
        idCat: 3,
        catPrato: "Sobremesas",
        nomePrato: "Petit Gâteau au Chocolat",
        numPrato: 9,
        descPrato: "Com sorvete de baunilha.",
        imgPrato: "/assets/imgs/agil_sobremesas/agil_petitgateau.jpg",
        preco: 24.00,
    },
    {
        id: 10,
        idCat: 3,
        catPrato: "Sobremesas",
        nomePrato: "Crème Brûlée",
        numPrato: 10,
        descPrato: "Sobremesa à base de creme de leite com crosta de açucar queimado.",
        imgPrato: "/assets/imgs/agil_sobremesas/agil_cremebrulee.jpg",
        preco: 24.00,
    },
    {
        id: 11,
        idCat: 3,
        catPrato: "Sobremesas",
        nomePrato: "Panacotta",
        numPrato: 11,
        descPrato: "Aromatizada com baunilha, coberta com calda de frutas vermelhas.",
        imgPrato: "/assets/imgs/agil_sobremesas/agil_pannacotta.jpg",
        preco: 24.00,
    },
    {
        id: 12,
        idCat: 3,
        catPrato: "Sobremesas",
        nomePrato: "Creme de Papaya",
        numPrato: 12,
        descPrato: "Com creme de cassis.",
        imgPrato: "/assets/imgs/agil_sobremesas/agil_cremepapaya.jpg",
        preco: 24.00,
    },
    {
        id: 13,
        idCat: 4,
        catPrato: "Bebidas",
        nomePrato: "Água Mineral (300 ml)",
        numPrato: 13,
        descPrato: "",
        imgPrato: "/assets/imgs/agil_bebidas/agil_agua.jpg",
        preco: 6.00,
    },
    {
        id: 14,
        idCat: 4,
        catPrato: "Bebidas",
        nomePrato: "Refrigerante (350 ml)",
        numPrato: 14,
        descPrato: "",
        imgPrato: "/assets/imgs/agil_bebidas/agil_refrigerante.jpg",
        preco: 6.00,
    },
    {
        id: 15,
        idCat: 4,
        catPrato: "Bebidas",
        nomePrato: "Heineken (longneck)",
        numPrato: 15,
        descPrato: "",
        imgPrato: "/assets/imgs/agil_bebidas/agil_heineken.jpg",
        preco: 10.00,
    },
    {
        id: 16,
        idCat: 4,
        catPrato: "Bebidas",
        nomePrato: "Baden Baden Witbier /IPA",
        numPrato: 16,
        descPrato: "",
        imgPrato: "/assets/imgs/agil_bebidas/agil_witbier.jpg",
        preco: 34.00,
    }
]