import React from "react";
import * as S from './styled'

function Layout({Children}){
    return (
        <S.Layout>
            <section>
                <header>
                    header
                </header>
                {Children}
            </section>
        </S.Layout>
    )
}

export default Layout