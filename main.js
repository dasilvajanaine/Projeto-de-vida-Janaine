const  botoes  =  documento . querySelectorAll ( ". botao" );

para ( deixe  i  =  0 ; i  <  botoes . comprimento ; i ++ ) {
    botoes [ i ]. onclick  =  função () {
        botoes[i].classList.add("ativo");
    };
}