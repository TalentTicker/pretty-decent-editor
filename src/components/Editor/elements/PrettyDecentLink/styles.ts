import styled from 'styled-components';

export const StyledInput = styled.input`
    height: 25px !important;
    border-radius: 5px;
    outline: none;
    border: 1px solid #979797;
    padding: 8px;
    margin: 4px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 3;
    background: white;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 16px;
    min-width: 300px;
    @media (max-width: 478px) {
        right: 10px;
    }
`;

export const SubmitBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    height: 40px;
    width: 100px;
    margin-top: 8px;
    border-radius: calc(40px / 2);
    :hover {
        cursor: pointer;
    }
    @media (max-width: 470px) {
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledLabel = styled.label`
    margin: 4px;
    font-size: 12px;
`;

export const CloseBtn = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: none;
    outline: none;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    top: 5px;
    right: 5px;
    border: none;
    transition: background 0.3s ease;
    :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primary};
        opacity: 1;
    }
`;
