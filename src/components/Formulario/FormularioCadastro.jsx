import { Typography } from '@mui/material';
import React, { useState } from 'react';
import DadosEndereco from './DadosEndereco';
import DadosInicio from './DadosInicio';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro() {

    const [etapaAtual, setEtapaAtual] = useState(0)
    const [validaEmail, setValidaEmail] = useState(
        {
            email:
            {
                valido: true,
                error: ""
            },
            senha: {
                valido: true,
                error: ""
            }
        })

    function proximaEtapa() {
        setEtapaAtual(etapaAtual + 1)
    }
    function etapaAnterior() {
        setEtapaAtual(etapaAtual - 1)
    }
    function ValidaEmail(nameInput, obj) {
        //console.log(!obj.length)
        if (!obj.length) {
            console.log("Obj invalido")
            console.log(validaEmail[nameInput]);
        }
    }

    function formPorEtapa() {
        switch (etapaAtual) {
            case 0:
                return (
                    <DadosInicio proximaEtapa={proximaEtapa} validaEmail={ValidaEmail} />
                );
            case 1:
                return (
                    <DadosUsuario proximaEtapa={proximaEtapa} etapaAnterior={etapaAnterior} />
                );
            case 2:
                return (
                    <DadosEndereco etapaAnterior={etapaAnterior} />
                );
            default:
                return (
                    <Typography> Etapa Inexistencia </Typography>
                );
        }
    }

    return (
        <div>
            <Typography component='h1' variant='h4'> Formulario Cadastro </Typography>
            {formPorEtapa()}


        </div>
    );
}

export default FormularioCadastro;