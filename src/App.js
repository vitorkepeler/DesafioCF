
import React, { useState, useEffect } from "react";
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

    var n1 = 2;
    var n2 = 2;
    var n3 = 2;
    var n4 = 2;
    const input = document.getElementById('num').value;
    var resp = 0;

    while (fibonacci(n1) <= input) {
      resp = fibonacci(n1);

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

      n1++;
    }
    if (continuar == true) {
      n1--;

      var f1 = fibonacci(n1);
      var f2;

      while (fibonacci(n2) <= resp) {
        resp = f1 + fibonacci(n2);

        if (resp == input) {
          f2 = fibonacci(n2);

          setarZetas([
            {
              zeta: 1,
              certo: false
            },
            {
              zeta: 2,
              certo: true
            }

          ]);

        }
        if (resp > input) {
          n2--

          f2 = fibonacci(n2);

          while (fibonacci(n3) <= resp) {

            resp = f1 + f2 + fibonacci(n3);

            if (resp == input) {
              var f3 = fibonacci(n3);


              setarZetas([
                {
                  zeta: 1,
                  certo: false
                },
                {
                  zeta: 2,
                  certo: false
                },
                {
                  zeta: 3,
                  certo: true
                }

              ]);

              break;
            }
            if (resp > input) {
              n3--

              var f3 = fibonacci(n3);

              while (fibonacci(n4) <= resp) {

                resp = f1 + f2 + f3 + fibonacci(n4);

                if (resp == input) {
                  var f4 = fibonacci(n4);


                  setarZetas([
                    {
                      zeta: 1,
                      certo: false
                    },
                    {
                      zeta: 2,
                      certo: false
                    },
                    {
                      zeta: 3,
                      certo: false
                    },
                    {
                      zeta: 4,
                      certo: true
                    }

                  ]);

                  break;
                }
                n4++;
              }
              break;
            }
            n3++;
          }
          break;
        }
        n2++;
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
