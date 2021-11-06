import React, {useState, useEffect} from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxApi';
import { doLogin } from '../../helpers/AuthHandler';

import EditIcon from '@mui/icons-material/Edit';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';

const Page = () => {
    const api = useApi();
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [stateList, setStateList] = useState([]);

    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(()=>{
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, [])
    
    useEffect(()=>{
        const getUser = async () => {
            const sUser = await api.getUser();
            console.log(sUser);
            setName(sUser.name)
            setEmail(sUser.email);
            setState(sUser.state);
        }
        getUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if(password !== confirmPassword) {
            setError('As senhas não batem.');
            setDisabled(false);
            return;
        }
        
        const json = await api.putUser(name, email, state, password);
        
        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
        }

        setDisabled(false);
    } 

    return (
        <PageContainer>
            <PageTitle>
                Editar meus dados
                <EditIcon 
                    style={{
                        color: '#999',
                        marginLeft: '25px',
                        cursor: 'pointer'
                    }}
                    onClick={()=>setDisabled(!disabled)}
                />    
            </PageTitle>            
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                    <form onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area--title">Nome completo</div>
                            <span>(opcional)</span>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    placeholder="Digite seu novo nome"
                                    disabled={disabled}                                   
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Estado</div>
                            <span>(opcional)</span>
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
                            <div className="area--title">E-mail</div>
                            <span>(opcional)</span>
                            <div className="area--input">
                                <input 
                                    type="email" 
                                    disabled={disabled}
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder="Digite seu novo e-mail"
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Senha</div>
                            <span>(opcional)</span>
                            <div className="area--input">
                                <input 
                                    type="password" 
                                    disabled={disabled}
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder="Digite sua nova senha"
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title" style={{marginLeft: '50px'}}>Confirmar senha</div>
                            <div className="area--input">
                                <input 
                                    type="password" 
                                    disabled={disabled}
                                    value={confirmPassword}
                                    onChange={e=>setConfirmPassword(e.target.value)}
                                    placeholder="Confirme seu novo e-mail"
                                    style={{
                                        marginLeft: '5px', 
                                        background: 'transparent'
                                    }}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}>Confirmar Alterações</button>
                            </div>
                        </label>
                    </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;