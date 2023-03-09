import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

const Producto = () => {
  //let location = useLocation();
  //console.log(location);

  //Con el hook useLocation además de saber en qué URL estamos, podemos saber de dónde venimos
  let { search } = useLocation();
  let query = new URLSearchParams(search); 

  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;
  //console.log(start, end);


  let history = useHistory();
  console.log(history);

  const handlePrev = (e) => {
    history.push({search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}`})
  };

  const handleNext = (e) => {
    history.push({search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}`})
  };


  return (
    <div>
      <h3>Producto</h3>
      <p>Mostrando productos del <b>{start}</b> al <b>{end}</b></p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  )
}

export default Producto