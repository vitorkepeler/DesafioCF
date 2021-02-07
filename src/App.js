
import React, { useState } from "react";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'


function App() {
  function fibonacci(termo) {
    var penultimo = 0, ultimo = 1;
    var numero;

    if (termo <= 2)
      numero = termo - 1;
    else {
      var count = 3;
      while (count <= termo) {
        numero = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = numero;
        count++;

      }
    }
    return numero;
  }
  const GlobalStyle = createGlobalStyle`
  body {
   background-color:#eee8aa;
    }
  `;
  const Button = styled.button`
  background: #b30942;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #b30942;
  border-radius: 3px;
`;
  const H1 = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #b30942;
  margin: 1em;
`;
  const P = styled.p`
  text-decoration: line-through;
`;
  const H3 = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: #b30942;
  margin: 1em;
`;
  const DivInput = styled.div`
  width: 80%;
  max-width: 800px;
  background-color: white;
  padding: 30px 50px;
  margin: 10px auto;
  border-radius: 10px;
  text-align: center;: center;
  `
  const DivResult = styled.div`
  width: 80%;
  max-width: 800px;
  background-color: white;
  padding: 30px 50px;
  margin: 10px auto;
  border-radius: 10px;
  align-content: center;
  `

  const [zetas, setarZetas] = useState([

  ]);
  

  const calcularZeta = () => {

    var n = 2;
    const input = document.getElementById('num').value;
    var resp = 0;

    while (fibonacci(n) <= input) {
      resp = fibonacci(n);

      if (resp == input) {

        setarZetas([
          {
            zeta: 1,
            certo: true
          }

        ]);
        var continuar = false;

        break;
      } else {
        var continuar = true;
      }

      n++;
    }
    if (continuar == true) {
      n--;

      var z = 2;
      var resp = fibonacci(n);
      n = 2;
      while (resp != input) {
        while (resp <= input) {
          if (resp + fibonacci(n) == input) {
            resp = resp + fibonacci(n);
            setarZetas([
              {
                zeta: z,
                certo: true
              }
            ]);
            z--;
            break;
          } else {
            if (resp + fibonacci(n) > input){
              n--;
              resp = resp +fibonacci(n);
              break;
            }else{
              n++
            }
          }
        }
        if (resp == input) {
          break;
        } else {
          n=2;
          z++
        }

      }

    }
  }
  return (

    <div className="App">
      <GlobalStyle />
      <H1>DESAFIO CENTRAL DO FRANQUEADO</H1>
      <DivInput>
        <H3>Insira o número</H3>
        <input id="num" type="number" />
        <Button onClick={() => calcularZeta()}>Calcular Zeta</Button>
      </DivInput>
      <DivResult>
        <H3>Zetas:</H3>
        {
          zetas.map((val) => {
            if (val.certo) {
              return (
                <h1> {val.zeta}</h1>
              );
            } else {
              return (
                <P> {val.zeta}</P>
              )
            }
          })
        }
      </DivResult>
    </div>
  );
}

export default App;
