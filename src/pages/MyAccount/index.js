import React, {useState, useEffect} from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxApi';
import { doLogin } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';

const Page = () => {
    const api = useApi();

    const [user, setUser] = useState([]);

    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [stateList, setStateList] = useState([]);

    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(false);

    useEffect(()=>{
        const getUser = async () => {
            const sUser = await api.getUser();
            console.log(sUser);
            setName(sUser.name)
        }
        getUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        
        const json = await api.putUser(name, email, state, password);
        
        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = "/my-account";
        }

        setDisabled(false);
    } 

    return (
        <PageContainer>
            <PageTitle> Meus dados</PageTitle>
            <PageArea>
                    <form onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area--title">Novo Nome</div>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    disabled={disabled}
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    placeholder="Digite seu novo nome"
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Estado</div>
                            <div className="area--input">
                                <select value={state} onChange={e=>setState(e.target.value)}>
                                    <option></option>
                                    {stateList.map((i, k) =>
                                        <option key={k} value={i._id}>{i.name}</option>
                                    )}
                                </select>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Digite seu novo e-mail</div>
                            <div className="area--input">
                                <input 
                                    type="email" 
                                    disabled={disabled}
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Digitar nova senha</div>
                            <div className="area--input">
                                <input 
                                    type="password" 
                                    disabled={disabled}
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Confirmar nova senha</div>
                            <div className="area--input">
                                <input 
                                    type="password" 
                                    disabled={disabled}
                                    value={confirmPassword}
                                    onChange={e=>setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}>Fazer Alterações</button>
                            </div>
                        </label>
                    </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;