import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';


function DadosUsuario({ proximaEtapa, etapaAnterior }) {
    return (
        <form action="" method="post">
            <Typography variant='h4'> Dados Usuário </Typography>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6} >
                    <TextField
                        required
                        id='nome'
                        type='text'
                        variant='outlined'
                        label='Nome'
                        margin='normal'
                        color='secondary'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} md={6} >
                    <TextField
                        required
                        id='sobrenome'
                        type='text'
                        variant='outlined'
                        label='Sobrenome'
                        margin='normal'
                        color='secondary'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} md={6} >
                    <TextField
                        required
                        id='cpf'
                        type='text'
                        variant='outlined'
                        label='CPF'
                        margin='normal'
                        color='secondary'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} md={6} >
                    <TextField
                        required
                        id='rg'
                        type='text'
                        variant='outlined'
                        label='RG'
                        margin='normal'
                        color='secondary'
                        fullWidth
                    />
                </Grid>



            </Grid>

            <Button
                onClick={
                    (event) => {
                        etapaAnterior()
                    }
                }
                color='success'
                variant='contained'
            >
                Voltar
            </Button>
            <Button
                onClick={
                    (event) => {
                        proximaEtapa()
                    }
                }
                color='secondary'
                variant='contained'>
                Avançar
            </Button>


        </form>
    );
}

export default DadosUsuario;