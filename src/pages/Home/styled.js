import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const Wraper = styled.div`
    display: flex;
    flex-direction: row;

`

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding-top: 5px;
    
`

export const LogoContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: solid 2px #99090d;
    margin-bottom: 40px;
`

export const LogoText1 = styled.p`
    font-size: 1.6rem;
    background-color: #99090d;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    margin-right: 2px;
`

export const LogoText2 = styled.p`
    font-size: 1.6rem;
    font-weight: 600;
    color: #99090d;
`

export const LogoImg = styled.img `
    width: 100px;
    margin-right: 5px;

`

export const SearchContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-bottom: 40px;
`

export const TField = styled(TextField)`    
    
`

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
`

export const CarouselTitle = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1rem;
`

export const MapContainer = styled.section`
    background: #99090d;
    width: calc(100vw - 360px);
    height: 100vh;
`