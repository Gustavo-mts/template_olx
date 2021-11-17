import React, { useEffect, useState } from 'react';
import { PageArea } from './styled';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useParams } from 'react-router-dom';

import {PageContainer} from '../../components/MainComponents';


const Page = () => {
    

    return (
        <>
           <PageArea>
               <PageContainer style={{backgroundColor: '#fff', height: '122vh'}}>
                    <div className="myads--box">
                        
                    </div>
               </PageContainer>
           </PageArea>
        </>
    );
}

export default Page;