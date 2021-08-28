import styled from 'styled-components';

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 5px;
    padding: 16px;
    background-color: #ffffff;
    border-left: 5px solid transparent;

    &:hover {
        background-color: ${(props) => props.theme.colors.background};
        border-left: 5px solid red;
    }


`

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
    margin-bottom: 10px;
`

export const Address = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    line-height: 1.2rem;
    margin-bottom: 10px;
`

export const Photo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 5px;
    object-fit: cover;
`