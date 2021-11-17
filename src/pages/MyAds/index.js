import React, { useEffect, useState } from 'react';
import { PageArea } from './styled';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useParams } from 'react-router-dom';
import useApi from '../../helpers/OlxApi';

import {PageContainer} from '../../components/MainComponents';


const Page = () => {
    const api = useApi();
    const { id } = useParams();

    const [adInfo, setAdInfo] = useState([]);
 
    useEffect(()=>{
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            return json;
        }
        getAdInfo(id);
    },[]);

    const formatDate= (date) => {
        let cDate = new Date(date);

        let months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`; 
    }

    return (
        <>
           <PageArea>
               <PageContainer style={{backgroundColor: '#fff'}}>
               <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {adInfo.images &&
                                <Slide>
                                    {adInfo.images.map((img, k) =>
                                        <div key={k} className="each-slide">
                                            <img src={img} alt="" />
                                        </div>
                                    )}
                                </Slide>
                            }
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {adInfo.title &&
                                    <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated &&
                                    <small>criado em {formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className="adDescription">
                                 {adInfo.description}
                                 <hr/>
                                 {adInfo.views &&
                                    <small>Visualizações: {adInfo.views}</small>
                                 }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box box--padding">
                        {adInfo.priceNegotiable &&
                            'Preço Negociável'
                        }
                        {!adInfo.priceNegotiable && adInfo &&
                            <div className="price">Preço: <span>${adInfo.price}</span></div>
                        }
                    </div>
                        {adInfo.userInfo &&
                            <>
                                <a href={`mailto:${adInfo.userInfo.email}`} target="_blanck" className="contactSellerLink">Fale conosco</a>
                                <div className="createdBy box box--padding">
                                    <strong>{adInfo.userInfo.name}</strong>
                                    <small>Email: {adInfo.userInfo.email}</small>
                                    <small>Estado: {adInfo.stateName}</small>
                                </div>
                            </>
                        }
                </div>
               </PageContainer>
           </PageArea>
        </>
    );
}

export default Page;