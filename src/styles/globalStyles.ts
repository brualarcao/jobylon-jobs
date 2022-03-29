import { createGlobalStyle } from 'styled-components';
import { colors, fontStyle } from './theme'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${colors.backgroundColor};

        font-family: ${fontStyle.type.primary};

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
        width: 100%;
    }
`;