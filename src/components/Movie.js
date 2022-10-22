
function Movie(props) {
    return (
      <div className="card">
        <h2>{props.name}</h2>
        <div className="actions">
          <button className="btn">Selecionar</button>
        </div>
      </div>
    );
}

export default Movie;