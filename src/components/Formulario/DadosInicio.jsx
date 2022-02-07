import { Button, TextField, Typography } from '@mui/material';
import React from 'react';


function DadosInicio({ proximaEtapa, validaEmail }) {
    return (
        <form action="" method="post">
            <div>
                <Typography variant='h4'> Dados inicio </Typography>
                <TextField
                    onBlur={
                        (event) => {
                            validaEmail('email', event.target.value)
                        }
                    }
                    required

                    id='email'
                    type='email'
                    variant='outlined'
                    label='Email'
                    margin='normal'
                    color='secondary'
                    fullWidth
                />
                <TextField
                    required
                    id='senha'
                    type='password'
                    variant='outlined'
                    label='Senha'
                    margin='normal'
                    color='secondary'
                    fullWidth
                />
            </div>
            <Button
                onClick={

                    (event) => {

                        proximaEtapa()
                    }
                }
                color='secondary'
                variant='contained' >
                Avançar
            </Button>
        </form>
    );
}

export default DadosInicio;