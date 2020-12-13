const express = require ('express');
const cors = require ('cors');
const faker = require ('faker');


const port = 3000;
const hostname = 'localhost';

const app = express();
app.use(cors());

const gerarPessoalAleatoria = () =>{
    let pessoa = {
        
        nome: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        position: {
            latitude: faker.address.latitude(),
            longitute: faker.address.longitude(),
        }
    }

    return(pessoa);
}

app.get('/', (req, resp) => {

    resp.setHeader('Content-Type', 'application/json'); 
    
    let vet = [];

    for (let i = 0; i <= 10; i++){

        vet.push(gerarPessoalAleatoria());
    }
    
    resp.end(JSON.stringify(vet));   
})

app.listen (port , hostname , () => {

    console.log(`Servidor rodando no endereço http://${hostname}:${port}`);

})