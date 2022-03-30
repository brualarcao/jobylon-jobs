import styled, { css, keyframes } from 'styled-components';
import { breakpoints, colors, fontStyle } from '../../../styles/theme';
import { IJobInfoStyle } from '../../../models/models';

const modalAnimation = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;

export const ModalContainer = styled.div<IJobInfoStyle>`
  display: none;
  background: ${colors.backgroundLighterColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  height: 90%;

  align-items: center;

  animation: ${modalAnimation} 0.35s;

  max-width: 80vw;
  width: 80vw;

  margin: 5% auto;

  border: 3px solid ${colors.blueColor};

  border-radius: 8px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  };

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: ${colors.blueColor};
  };

  ${props =>
    props.open &&
    css`
      display: block;
    `};

    @media (max-width: ${breakpoints.mobile}) {
        display: none;
    }
`;

export const ModalContent = styled.main`
  width: 100%;
  height: auto;
  background-color: ${colors.backgroundLighterColor};

  display: flex;
  flex-direction: column;

  .closeModal_button {
    position: absolute;
    top: 10px;
    right: 5px;
    background: transparent;
    border: none;
    color: ${colors.blueColor};
    background-color: transparent;
    width: 50px;
    height: 50px;

    img, svg {
        background-color: transparent;
        width: 45px;
        height: 45px;
    }
  }
`;

export const JobInfoContainer = styled.div<IJobInfoStyle>`
    display: flex;
    justify-content: center;
    flex-direction: column;

    padding: 0 15px;
    background-color: ${colors.backgroundLighterColor};
    border-radius: 12px;

    margin-top: 12px;

    width: 100%;

    max-height: 95%;
    height: auto;


    margin: 15px 0;

    align-items: center;

    ${props => props.hide && `
        display: none;
    `}

    h4 {
    text-align: start;
    align-self: center;
    margin-bottom: 10px;
    margin-top: 10px;
    color: ${colors.blueColor};
    background-color: transparent;
    }

    @media (max-width: ${breakpoints.mobile}) {
        display: none;
    }
`;

export const JobInfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 20px;

    padding-top: 12px;

    border-bottom: 3px solid ${colors.blueColor};

    background-color: ${colors.backgroundLighterColor};

    height: auto;

    p {
        text-align: center;
    }
`;

export const JobInfoDescription = styled.div`
    display: flex;
    flex-direction: column;

    position: relative;

    align-items: center;

    align-self: center;
    
    background-color: ${colors.backgroundLighterColor};

    height: auto;
    max-height: 300px;

    max-width: 900px;
    width: 100%;

    margin-bottom: 12px;

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
    list-style-type: none;
    background-color: ${colors.backgroundLighterColor};
    };

    p,
    strong,
    li {
        align-self: flex-start;
        background-color: ${colors.backgroundLighterColor};
  }
`;

export const ReviewedInfos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    width: 90%;
    height: 90px;

    margin: 15px 0;

    border: 3px solid ${colors.blueColor};
    border-radius: 12px;
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;

    background-color: transparent;

    justify-content: center;

    border-right: 3px solid ${colors.blueColor};

    svg {
        background-color: transparent;
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }

    &:last-child {
        border: none;
    }
`;

export const OwnerContainer = styled.div`
    display: flex;
    width: 40%;
    height: 15%;

    margin: 10px 0;

    background-color: ${colors.backgroundColor};

    border: 1px solid ${colors.blueColor};
    border-radius: 12px;

    justify-content: center;
    align-items: center;    

    align-self: center;

    div {
        background-color: transparent;
        flex-direction: column;
    }

    img {
        width: 80px;
        height: 80px;

        border-radius: 40px;

        margin: 10px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        img {
            width: 45px;
            height: 45px;

            margin-left: 10px;
        }
        p {
            font-size: ${fontStyle.size.small};
        }
    }
`;

export const NavigationSection = styled.div`
    display: flex;

    background-color: transparent;

    justify-content: center;

    margin: 8px 0;
`;

export const ButtonNavigation = styled.button`
    background-color: ${colors.blueColor};
    color: ${colors.allWhiteTextColor};

    font-weight: ${fontStyle.weight.bold};

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

export const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;

    margin: 6px 0;
    padding: 12px;

    align-items: center;
    justify-content: center;

    background-color: transparent;
    
    color: ${colors.textLightColor};

    img {
        width: 180px;
        color: ${colors.blueColor};
        background-color: transparent;
    }
`;