import React from "react";
import { Box, Botao } from "../UI";
import { extratoLista } from "../../info";

export default () => {
    return (
        <Box>
            {extratoLista.updates.map(({id, type, from, value, date}) => {
                return (
                    <div key={id}>
                        <div>{type}</div>
                        <div>{from}</div>
                    </div>
                )
            })}
            <Botao>Ver Mais</Botao>
        </Box>
    )
}