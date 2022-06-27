import React from "react";

function RepositorioItem({name, linktorepo, fullName}){
    return(
        <div>
            <h2>{name}</h2>
            <h4>Nome Completo do Repositório:</h4>
            <a href={linktorepo} target="_blank">{fullName}</a>
        </div>
    )
}

export default RepositorioItem