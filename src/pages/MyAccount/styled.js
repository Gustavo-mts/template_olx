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
            display: flex;
            justify-content: space-between;
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