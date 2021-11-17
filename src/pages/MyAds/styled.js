import styled from 'styled-components';

export const PageArea = styled.div`
width: 100%;
height: 717.312px;
background-color: rgba(0,0,0,0.7);
display: block;
z-index: 99;
position: absolute;
margin-top: -715px;
margin-left: -97px;

.box {
    background-color:#fff;
    border-radius:5px;
    box-shadow:0px 0px 4px #999;
    margin-bottom:20px;
}
. box--padding {
    padding:10px;
}

.leftSide {
    flex: 1;
    margin-right:20px;

    .box {
        display: flex;
    }

    .adImage {
        width: 320px;
        height: 320px;
        margin-right: 20px;

        .each-slide img {
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            height:320px;
        }
    }

    .adInfo {
        padding:10px; 

        .adName {
            margin-bottom:20px;

            h2 {
                margin: 0;
                margin-left: 20px
            }

            small {
                color: #999;
            }
        }

        .adDescription {
            small {
                color: #999;
            }
        }
    }
}
.rightSide {
    width: 250px;

    .price {
        margin-left: 5px;
    
        span {
            color: #0000ff;
            display: block;
            font-size: 27px;
            font-weight: bold;
        }
    }

    .contactSellerLink {
        background-color: #0000ff;
        color: #fff;
        height: 30px;
        border-radius:5px;
        box-shadow:0px 0px 4px #999;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin-bottom: 20px;
    }

    .createdBy

        strong {
            margin-left: 5px;
        }
        
        small {
            display: block;
            color: #999;
            margin-top: 10px;
            margin-left: 5px;
        }
    }
}
`;