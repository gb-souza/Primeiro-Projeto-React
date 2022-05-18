import React from "react";

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome}
        cargo={props.cargo}
        idade={props.idade} />
       <Social fb={props.facebook}/>
      <hr/>
    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá sou o(a) {props.nome}</h2>
      <h3>Eu trabalho como {props.cargo}</h3>
      <h3>E tenho {props.idade} Anos </h3>
    </div>
  );

}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook </a>
      <a>LinkedIn </a>
      <a>Youtube </a>
    </div>
  );
}


function App() {

  return (
    <div>
      <h1>Conheça a nossa equipe:</h1>
      <Equipe nome="Gabriel" cargo="Desenvolvedor" idade="23" />
      <Equipe nome="Kevin"cargo="Programador" idade="22" />

    </div>

  );


}
export default App;