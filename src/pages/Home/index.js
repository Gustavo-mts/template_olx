import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { PageArea, SearchArea } from './styled';
import useApi from '../../helpers/OlxApi';

import { PageContainer } from '../../components/MainComponents';


const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adsList, setAdsList] = useState([]);

    useEffect(()=>{
        const getStates = async() =>{
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    useEffect(()=>{
        const getCategories = async() =>{
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    useEffect(()=>{
        const getRecentAds = async() =>{
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdsList(json.ads);
        }
        getRecentAds();
    }, []);

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O quê você procura?" />
                            <select name="state">
                                {stateList.map((i, k) =>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i, k) =>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt="" />
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>

            <PageContainer>
                <PageArea>
                    <h2>Anúncios recentes</h2>
                    <div className="list">
                        {adsList.map((i, k) =>
                            <adItem key={k} data={i} />
                        )}
                    </div>
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;