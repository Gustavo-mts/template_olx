import React, {useState, useEffect} from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxApi';
import { doLogin } from '../../helpers/AuthHandler';
import Cookies from "js-cookie";

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';


const Page = () => {
    const api = useApi();

    const [error, setError] = useState('');

    const [user, setUser] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState("");
    
    useEffect(()=>{
        let token = Cookies.get('token');
        const getUser = async () => {
            const sUser = await api.getUser(token);
            setUser(sUser);
            console.log(sUser)
        }
        getUser();
    }, []);

    return (
        <PageContainer>
            <PageTitle> Meus dados</PageTitle>
            <PageArea>
                    Nome do usuário: {user.name} <br/>
                    Email: {user.email} <br/>
                    Estado: {user.state}
            </PageArea>
        </PageContainer>
    );
}

export default Page;