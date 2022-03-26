import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #4992FC;

        button, a {
            outline: none;
            border: none;
        }

        button:hover {
            cursor: pointer;
        }
    };

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;