import styled from 'styled-components';
import { colors } from '../../../styles/theme';

export const JobListContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    max-width: 1000px;

    background-color: transparent;
`;

export const JobSelectionContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    background-color: transparent;

    overflow-y: scroll;

    ::-webkit-scrollbar { 
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${colors.blueColor};
        border-radius: 12px;
    }
`;

export const SortByOption = styled.div`
    display: flex;
    align-items: center;
    width: 98%;
    justify-content: space-between;

    button { 
        color: ${colors.blueColor};
    }
`;