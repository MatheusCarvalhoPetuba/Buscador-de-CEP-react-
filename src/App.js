import { useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./App.css";

import InfoCep from "./components/InfoCep";
import Api from "./services/Api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleCep() {
    if (input === "") {
      alert("Digite um CEP:");
      setInput("");
      return;
    }

    try {
      const response = await Api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch (error) {
      alert("Ops erro ao buscar...");
      setInput("");
      return;
    }
  }

  return (
    <div className="conteiner">
      <div className="area-pesquisa">
        <h1>Buscador de CEP</h1>
        <div className="input-search">
          <input
            placeholder="Digite seu cep..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => handleCep()} className="btn-search">
            <BsSearch size={20} color="black" />
          </button>
        </div>

        <InfoCep
          cep={cep.cep}
          complemento={cep.complemento}
          estado={cep.estado}
          uf={cep.uf}
        />
      </div>
    </div>
  );
}

export default App;
