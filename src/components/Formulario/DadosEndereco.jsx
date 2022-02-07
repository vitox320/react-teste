import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

function DadosEndereco({ etapaAnterior }) {
    return (
        <form className="container-form">
            <Typography variant='h4'> Dados Endereço </Typography>
            <Grid container spacing={2} >
                <Grid item xs={12} md={4} >
                    <TextField
                        required
                        id='cep'
                        type='number'
                        variant='outlined'
                        label='CEP'
                        margin='normal'
                        color='secondary'
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} >
                    <TextField
                        required
                        id='numero'
                        type='text'
                        variant='outlined'
                        label='Número'
                        margin='normal'
                        color='secondary'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={3} >
                    <TextField
                        required
                        id='estado'
                        type='text'
                        variant='outlined'
                        label='Estado'
                        margin='normal'
                        color='secondary'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} md={3} >
                    <TextField
                        required
                        id='cidade'
                        type='text'
                        variant='outlined'
                        label='Cidade'
                        margin='normal'
                        color='secondary'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={3} >
                    <TextField
                        required
                        id='bairro'
                        type='text'
                        variant='outlined'
                        label='Bairro'
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
                margin={1}
                color='success'
                variant='contained'>
                Voltar
            </Button>


            <Button
                margin={1}
                color='secondary'
                variant='contained'>
                Cadastrar
            </Button>


        </form >
    );
}

export default DadosEndereco;