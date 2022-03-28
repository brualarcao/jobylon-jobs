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

    height: min-content;

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

    height: auto;

    margin-bottom: 6px;

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

export const ReviewedInfos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    width: 80%;
    height: 70px;

    margin: 15px 0;

    border: 1px solid ${colors.blueColor};
    border-radius: 12px;
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;

    background-color: transparent;

    justify-content: center;

    border-right: 1px solid ${colors.blueColor};

    &:last-child {
        border: none;
    }
`;

export const OwnerContainer = styled.div`
    display: flex;
    width: 40%;
    height: auto;

    margin: 12px 0;

    background-color: transparent;

    border: 1px solid ${colors.blueColor};
    border-radius: 12px;

    justify-content: center;
    align-items: center;

    align-self: center;

    div {
        background-color: transparent;
        flex-direction: column;
    }
`;

export const NavigationSection = styled.div`
    display: flex;

    background-color: transparent;

    justify-content: center;

    margin: 12px 0;
`;

export const ButtonNavigation = styled.button`
    background-color: ${colors.blueColor};
    color: ${colors.allWhiteTextColor};

    border-radius: 12px;

    margin-right: 12px;

    width: 230px;
    height: 40px;
`;



export const LogoCompany = styled.img`
    width: 100px;
    height: 100px;

    margin: 24px 0;
`;