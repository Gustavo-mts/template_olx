import styled from 'styled-components';

export const PageArea = styled.div`
 
form {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;

    .area {
        display: flex;
        align-items: center;
        padding: 10px;
        max-width: 500px;

        .area--title {
            width: 200px;
            text-align: right;
            padding-right: 5px;
            font-weight: bold;
            font-size: 14px;
        }

        span {
            color: #999;
            font-size: 9px;
            padding-right: 10px;
            margin-top: 4px;
        }

        .area--input {
            flex: 1;
            border: 1px solid #999;
            border: none;

            input {
                width: 100%;
                font-size: 14px;
                padding: 5px;
                border: none;
                outline: 0;
                transition: all ease 0.4s;

                &:focus {
                    outline: none;
                }

                &:[type="checkbox"] {
                    width: 13px
                }
            }
            .check {
                width: 13px;
            }

            button {
                background-color: #0089ff;
                border: 0;
                outline: 0;
                padding: 5px 10px;
                margin-left: 55px;
                border-radius: 4px;
                color: #fff;
                font-size: 15px;
                cursor: pointer;

                &:hover {
                    background-color: #006fce;
                }
            }
        }
    }
}
`;

export const AdArea = styled.div`
background-color: #fff;
border-radius: 3px;
padding: 10px;
box-shadow: 0px 0px 3px #999;
display: flex;

.myAds {
    width: 33%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .myAds--image {
        width: 70%;
        height:200px;
        background-color: #ccc;
        border-radius: 3%;
    }

`;


export const Modal = styled.div`
.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .ads--image {
        width: 30vw;
        height: 50vh;
        background-color: #ccc;
        margin-top: 20px;
    }
}
`;