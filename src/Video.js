import { useState } from "react";

const Video = ({title, dateAdded, channel, thumbnail, description}) => {

  const [valoraciones, setValoraciones] = useState(0);
  const [mostrar, setMostrar] = useState(true);
  const [nuevosDatos, setNuevosDatos] = useState({title, channel});

  const increment = () => {
    setValoraciones(valoraciones+1);
    setValoraciones(valoraciones+1);
  }

  const mostrarDetalles = () => {
    setMostrar(!mostrar);
  }

  const editar = (newData) => {
    setNuevosDatos(newData);
  }

        return (
            <div className="video-container">
                <div className="video-image">
                  <img src={thumbnail} alt={title} />
                </div>
                <div className="video-info">
                  <h3>{nuevosDatos.title}</h3>
                  <p>{valoraciones} estrellas <button onClick={increment}>Aumentar estrellas</button></p>
                  <button onClick={mostrarDetalles}>Ver/Ocultar detalles</button>
                  {
                    mostrar && 
                    <>
                    <p>Upload date: {dateAdded}</p>
                    <h4>Channel's Title: {nuevosDatos.channel}</h4>
                    <p>{description}</p>
                    </>
                  }
                  <button onClick={() => editar({title: "Mi super video", channel: "CoderHouse"})}>Editar</button>
                </div>
            </div>
        );
    }

export default Video;