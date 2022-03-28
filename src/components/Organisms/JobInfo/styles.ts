import styled from 'styled-components';
import { colors } from '../../../styles/theme';
import { IJobInfoStyle } from '../../../models/models';


export const JobInfoContainer = styled.div<IJobInfoStyle>`
    display: flex;
    flex-direction: column;

    padding: 0 15px;
    background-color: ${colors.backgroundLighterColor};
    border-radius: 12px;

    margin-top: 12px;

    width: 100%;

    height: 60%;

    border: 1px solid ${colors.blueColor};

    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);

    ${props => props.hide && `
        display: none;
    `}

    h4 {
    text-align: start;
    margin-bottom: 10px;
    margin-top: 10px;
    color: ${colors.blueColor};
    background-color: transparent;
    }
`;

export const JobInfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border-bottom: 1px solid ${colors.blueColor};

    background-color: ${colors.backgroundLighterColor};

    min-height: 200px;

    p {
        text-align: center;
    }
`;

export const JobInfoDescription = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: ${colors.backgroundLighterColor};

    height: 520px;

    overflow-y: scroll;

    color: ${colors.allWhiteTextColor};

    ::-webkit-scrollbar { 
        width: 10px;
    };

    ::-webkit-scrollbar-thumb {
        background: ${colors.blueColor};
        border-radius: 12px;
    };

    ul {
    list-style-position: inside;
    margin: 0;
    list-style-type: none;
    background-color: ${colors.backgroundLighterColor};
    };

    p,
    strong,
    li {
        background-color: ${colors.backgroundLighterColor};
  }
`;

export const LogoCompany = styled.img`
    width: 80px;
    height: 80px;

    margin: 24px 0;
`;