import React, {Component} from 'react'
import Main from './layouts/Main'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import styled from 'styled-components'
import { Container } from '@material-ui/core'


const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`

export default class HomePage extends Component {

    render(){

        return (
            <Container maxWidth='lg'>
                <Header></Header>
                <Main></Main>
                <section></section>
                <section></section>
                <Footer></Footer>
            </Container>
        );
    }
}