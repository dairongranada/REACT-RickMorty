import React from 'react'
            //(Props 'character') que LLega como parametro del consumo de la api
export const Character = ({character, setCharacters}) => {

    const resetCharacters = ()=> {
        setCharacters(null);
    }

    return (
        <div className='characters'>
            <h1>Personajes</h1>
            <span className='back-home' onClick={resetCharacters} >Volver Al Inicio</span>
            <div className='container-characters'>

                {character.map((character, index) => (
                <div className='character-container' key={index}>
                    <div><img src={character.image} alt={character.name} /></div>
                        <div>
                            <h3>{character.name} </h3> 
                            <p>
                                <spam className='text-grey'>Episodios: {character.epi} </spam>
                                <span> {character.episode.length} </span>
                            </p>
                            <p> Especie: {character.species}</p>
                        </div>
                </div>
                ))}
            </div>
            <span className='back-home' onClick={resetCharacters} >Volver Al Inicio</span>
        </div>
    )
}
