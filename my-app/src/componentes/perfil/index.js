import React from "react";
import * as S from './styled'

function Perfil(){
    return(
        <S.Perfil>
            
                <S.PerfilImagem 
                src="https://avatars.githubusercontent.com/u/96701921?v=4"
                alt='Imagem do Usuário'/> 
            
            <S.PerfilInfo>
                <h1>
                    Antonio Leonardo
                </h1>

                <div><h3>User Name:</h3> <a>Antonioleo1997</a> </div>
                

                <S.StatusPerfil>
                    <S.StatusPerfilItem>
                        <h4>Seguidores</h4>
                        <span>5</span>
                    </S.StatusPerfilItem>
                    <S.StatusPerfilItem>
                        <h4>Seguindo</h4>
                        <span>6</span>
                    </S.StatusPerfilItem>
                    <S.StatusPerfilItem>
                        <h4>Favoritos</h4>
                        <span>3</span>
                    </S.StatusPerfilItem>
                </S.StatusPerfil>
            </S.PerfilInfo>
            
            
        </S.Perfil>
        
    )
}

export default Perfil