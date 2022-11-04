// Bibliotecas
// Configura
const supertest = require("supertest");   // Framework de teste de API
const assert = require("chai").assert;    // Função de assertiva do resultado, checagem 

// Constantes, Variaveis e Objetos
const baseUrl = "https://petstore.swagger.io/v2";  // url base da API
const petId   = 17321813;                          // codigo do animal


// Descrição = Conjunto de Testes ~ Classe
describe("PetStore Swagger - Pet", () => {
    const request = supertest(baseUrl)
    const pets = require("../../vendors/json/petn")

    // Post - teste de incluir um animal
    it("Post Pet", () => {
        // Configura
        // Apontou para o arquivo com os dados do animal
        const jsonFile = require("../../vendors/json/pet1.json")
        // Realizar a requisição e receber a resposta

        // Executa
        return request      // chamada para a requisição
            .post("/pet")   // endpoint / função para incluir o animal
            .send(jsonFile) // envia os dados do animal no corpo da requisição
            // Valida
            .then((response) => {
                assert.equal(response.statusCode, 200); // Se a requisição foi recebida e processada
                assert.equal(response.body.id, petId);  // Se é o id esperado do animal
                assert.equal(response.body.name, "Ice"); // Se é o nome esperado
                assert.equal(response.body.status, "available"); // Se está com o status esperado
            });
    });

    it("Get Pet", () => {
        return request                                 // chamada para a requisição
            .get("/pet/" + petId)                      // consultar o animal pelo id
            .then((response) => {                      // tratar a resposta / retorno
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.id, petId);
                assert.equal(response.body.name, "Ice");
                assert.equal(response.body.status, "available");
            });
    });

    it("Put Pet", () => {
        const jsonFile = require("../../vendors/json/pet2.json");
        return request                                  // realizar a requisição
            .put("/pet")                                //alterar o animal - aponta para o endpoint
            .send(jsonFile)                             // json com a alteração
            .then((response) => {                       // receber e validar a resposta
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.id, petId);
                assert.equal(response.body.name, "Ice");
                assert.equal(response.body.tags[1].id, 4);
                assert.equal(response.body.tags[1].name, "castrated");
                assert.equal(response.body.status, "sold");

            });
    });

    it("Delete Pet", () => {
        return request
            .delete("/pet/" + petId)
            .then((response) => {
                assert.equal(response.statusCode, 200)
            });
                
    });
            // Função de carga de animais - Setup
    pets.array.forEach(({nomePet, idPet, nomeCategoria, idCategoria}) => {
        it('Setup Swagger - Add Pets', () => {
            pet.id = idPet
            pet.name = nomePet
            pet.category.id = idCategoria
            pet.category.name = nomeCategoria
            pet.tags[0].id = 3
            pet.tags[0].name = "vaccinated"
            pet.status = "done"

            return request
            .post('/pet')
            .send(pet)

        
        })
    })
    

});