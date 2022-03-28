import styled from 'styled-components';
import { colors } from '../../../styles/theme';
import { ICardStyles } from './interfaces';

export const CardContainer = styled.button<ICardStyles>`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;

    flex-wrap: wrap;

    width: 100%;
    height: 130px;

    min-height: 95px;

    align-items: center;

    border-radius: 12px;

    background-color: ${colors.backgroundLighterColor};

    margin: 12px 0;

    &:hover {
    opacity: 0.8;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
  }

  ${({ selected }) =>
    selected &&
    `
    border: 3px solid ${colors.blueColor};
    `}


`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 5px;

    justify-self: flex-start;

    max-width: 360px;

    background-color: transparent;
`;

export const CompanyLogo = styled.img`
    width: 50px;
    height: 50px;

    background-color: transparent;

    justify-self: flex-start;

    margin: 2px 15px;
`;

export const Tag = styled.div`
    display: flex;

    align-self: flex-end;
    justify-self: flex-start;

    align-items: center;
    justify-content: center;

    border: 1px solid ${colors.blueColor};

    background-color: ${colors.backgroundColor};

    width: 100px;
    height: 25px;

    border-radius: 8px;

    margin-bottom: 8px;
`;

export const TagArea = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;

    background-color: transparent;

    justify-content: center;

    margin-right: 12px;
    margin-left: 6px;
`;