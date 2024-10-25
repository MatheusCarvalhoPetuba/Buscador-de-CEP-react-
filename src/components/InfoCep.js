import "../components/InfoCep.css";

function InfoCep({ cep, complemento, estado, uf }) {
  return (
    <div className={` conteiner-info-cep${cep ? "opacity" : ""}`}>
      <div className="info-cep">
        <h1>CEP: {cep}</h1>

        <p>Complemento: {complemento}</p>
        <p>Estado: {estado}</p>
        <p>UF: {uf}</p>
      </div>
    </div>
  );
}

export default InfoCep;
