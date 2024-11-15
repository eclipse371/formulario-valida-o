import express from 'express';
const app = express();
const porta = 4000;
const host = '0.0.0.0';
var clientes = [];
app.use(express.urlencoded({ extended: true }));
app.get('/cadastrarCliente', cadastroCliente);


function cadastroCliente(req, resp){
resp.send(`
    <html>
    <head>
    <title>Cadastro de empresas</title>
    </head>
    <body>
     <h2>Cadastro de Empresas</h2>
        <form action="/cadastrar" method="POST">
            <label for="cnpj">CNPJ</label>
            <input type="text" id="cnpj" name="cnpj" >
             <br>
            <label for="razao">Razão Social ou Nome do Fornecedor</label>
            <input type="text" id="razao" name="razao" >
             <br>

            <label for="nome">Nome fantasia</label>
            <input type="text" id="nome" name="nome" >
            <br>
            <label for="endereco">Endereço</label>
            <input type="text" id="endereco" name="endereco" >
            <br>
            <label for="cidade">Cidade</label>
            <input type="text" id="cidade" name="cidade" >
            <br>
            <label for="uf">UF</label>
            <input type="text" id="uf" name="uf" >
            <br>
            <label for="cep">CEP</label>
            <input type="text" id="cep" name="cep" >
            <br>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" >
            <br>
            <label for="telefone">Telefone</label>
            <input type="text" id="telefone" name="telefone" >
            <br>
            <button type="submit">Cadastrar</button>
        </form>
        <style>
         label{
         display: block;
         }


        </style>
    </body>
    </html>
    `);
}
function cadastrar(req, resp){

    const cnpj = req.body.cnpj;
    const nome = req.body.nome;
    const razao = req.body.razao;
    const endereco = req.body.endereco;
    const cidade = req.body.cidade;
    const uf = req.body.uf;
    const cep = req.body.cep;
    const email = req.body.email;
    const telefone = req.body.telefone;
   

  if(nome &&  cnpj &&  email &&  cidade && telefone && cep &&  uf &&  razao && endereco){

  
    const cli = {nome, cnpj, email, cidade, telefone, cep, uf, razao, endereco};
    clientes.push(cli);
    resp.write(`
        <html>
  <head>
    <title>Cadastro de alunos</title>
  </head>
  <body>
    <h2>Cadastro de alunos</h2>
   `);
 
    for (var i = 0; i < clientes.length; i++) {
      resp.write( `
          <ul>
            <li>
              <strong>Nome:</strong> ${clientes[i].cnpj} <br>
              <strong>Sobrenome:</strong> ${clientes[i].razao} <br>
              <strong>Email:</strong> ${clientes[i].nome}<br>
              <strong>Email:</strong> ${clientes[i].endereco}
              <strong>Nome:</strong> ${clientes[i].cidade} <br>
              <strong>Sobrenome:</strong> ${clientes[i].uf} <br>
              <strong>Email:</strong> ${clientes[i].cep}<br>
              <strong>Email:</strong> ${clientes[i].email}<br>
              <strong>Email:</strong> ${clientes[i].telefone}
            </li>
          </ul>
        `);
      }

    resp.write(`
         <form action="/cadastrarCliente" method="get">
      <button type="submit">Continuar Cadastrando</button>
    </form>
        
  </body>
</html>
    `);

    resp.end();
    
}
else{
resp.write(`
  <html>
  <head>
  <title>Cadastro de empresas</title>
  <meta charset="UTF-8">
  </head>
  <body>
   <h2>Cadastro de Empresas</h2>
      <form action="/cadastrar" method="POST">
          <label for="cnpj">CNPJ</label>
          <input type="text" id="cnpj" name="cnpj" value="${cnpj}">
          <br>
  `
)
if(!cnpj){
  resp.write(`
   <div style="color: red;">Preencha o campo do cnpj.</div>
    `)
}
resp.write(`
   <label for="razao">Razao Social ou Nome do Fornecedor</label>
    <input type="text" id="razao" name="razao" value="${razao}">
  `
)
if(!razao){
  resp.write(`
    <div style="color: red;">Preencha o campo da razao.</div>
    `)
}

resp.write(`
  <label for="nome">Nome fantasia</label>
 <input type="text" id="nome" name="nome" value="${nome}">

  `)
  if(!nome){
    resp.write(`
     <div style="color: red;">Preencha o campo do nome fantasia.</div>
      <br>
      `)
  }
  resp.write(`
     <label for="endereco">Endereço</label>
     <input type="text" id="endereco" name="endereco" value="${endereco}">
  
    `)
  if(!endereco){
    resp.write(`
      <div style="color: red;">Preencha o campo do endereco.</div>
      <br>
      `)
  }
  resp.write(`
  <label for="cidade">Cidade</label>
  <input type="text" id="cidade" name="cidade" value="${cidade}">
   `)
if(!cidade){
  resp.write(`
    <div style="color: red;">Preencha o campo da cidade.</div>
    <br>
    `)
}
resp.write(`
  <label for="uf">UF</label>
    <input type="text" id="uf" name="uf" value="${uf}">
   `)
if(!uf){
  resp.write(`
    <div style="color: red;">Preencha o campo da UF.</div>
    <br>
    `)
}
resp.write(`
  <label for="cep">CEP</label>
  <input type="text" id="cep" name="cep" value="${cep}">
   `)
if(!cep){
  resp.write(`
    <div style="color: red;">Preencha o campo do cep.</div>
    <br>
    `)
}
resp.write(`
  <label for="email">Email</label>
  <input type="text" id="email" name="email" value="${email}">
   `)
if(!email){
 resp.write(`
  <div style="color: red;">Preencha o campo do email.</div>
  <br>
      `)
   }
   resp.write(`
    <label for="telefone">Telefone</label>
        <input type="text" id="telefone" name="telefone" value="${telefone}">
     `)
if(!telefone){
  resp.write(`
    <div style="color: red;">Preencha o campo do telefone.</div>
    <br>
        `)
}

resp.write(`
     <button type="submit">Cadastrar</button>
        </form>
        <style>
         label{
         display: block;
         }
        </style>
    </body>
    </html>
  `)


}
}
app.get('/cadastrarCliente', cadastroCliente);
app.post('/cadastrar', cadastrar);
app.listen(porta, host, () =>{
    console.log(`Servidor iniciado e em execução no endereço http:// ${host}:${porta} `);
});