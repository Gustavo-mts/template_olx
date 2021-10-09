import React, {useState} from 'react';
import { PageArea } from './styled';
import { useParams } from 'react-router-dom';
import useApi from '../../helpers/OlxApi';

import { PageContainer } from '../../components/MainComponents';


const Page = () => {
    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState([]);
    const [adInfo, setAdInfo] = useState([]);

    return (
        <PageContainer>
            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            ...
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                ...
                            </div>
                            <div className="adDescription">
                                ...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    ...
                </div>
            </PageArea>
        </PageContainer>
    );
}

export default Page;