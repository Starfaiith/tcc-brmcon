import React from 'react'


const PortfolioP = ({titulo, descricao, autor, local, foto}) => {


  return (
    <section id="photos">
        <div className="photo"
        style={{
          backgroundImage: `url(${foto})`
        }}>
            <div className="phototitle">
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <p>{autor}</p>
            <p>{local}</p>
            </div>
        </div>
    </section>
  )
}

export default PortfolioP