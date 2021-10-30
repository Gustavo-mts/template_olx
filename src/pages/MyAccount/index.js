import React, {useState, useEffect} from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxApi';
import { doLogin } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';


const Page = () => {
    const api = useApi();

    const [error, setError] = useState('');


    /*
    useEffect(()=>{
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, [])
    */
    /*
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if(password !== confirmPassword) {
            setError('As senhas não batem.');
            setDisabled(false);
            return;
        }
        
        const json = await api.register(name, email, password, stateLoc);

        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = "/";
        }

        setDisabled(false);
    } */

    return (
        <PageContainer>
            <PageTitle>Meus dados</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
            </PageArea>
        </PageContainer>
    );
}

export default Page;