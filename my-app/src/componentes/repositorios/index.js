import React from "react";
import RepositorioItem from "../repositorio-item";
import * as S from "./styled";


function Repositorio(){
    return(
        <S.STabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >

            <S.STabList>
                <S.STab>Repositórios</S.STab>
                <S.STab>Favoritados</S.STab>
            </S.STabList>
            <S.STabPanel>
                <RepositorioItem name='interface-netflix' linktorepo='https://github.com/Antonioleo1997/interface-netflix' fullName='Antonioleo1997/interface-netflix'/>   
            </S.STabPanel>

            <S.STabPanel>
                <RepositorioItem name='landpageibtp' linktorepo='https://github.com/Antonioleo1997/landpageibtp' fullName='Antonioleo1997/landpageibtp'/>   
            </S.STabPanel>
            
        </S.STabs>
    )
}

export default Repositorio