import styled, {css} from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const Window = styled.div`
    ${({isOpen}: any) => css`
        width: auto;
        height: auto;
        background-color: #00000030;
        /* min-width: 200px;
        min-height: 200px; */
        /* max-width: 90vw;
        max-height: 90vh; */
        border-radius: 12px;
        border: 3px solid #00000020;
        /* position: absolute; */
        /* top: 50%;
        left: 50%; */
        /* transform: translate(-50%, -50%); */
        padding: 16px;
        display: ${isOpen ? 'flex' : 'none'};
        flex-direction: column;
        gap: 12px;
        align-items: center;
        justify-content: center;
    `}
`;

export const CloseButton = styled(IconButton)`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
`;