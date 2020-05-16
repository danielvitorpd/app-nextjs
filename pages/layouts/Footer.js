import React, {Component} from 'react'
import { Typography, Container  } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';


export default class Footer extends Component {

    render(){

        return (

            <footer>
                <Container maxWidth='lg'>
                        <Typography variant='body2' align='center' color='textSecondary'>
                            Made with ❤ by <a href='https://github.com/danielvitorpd'><GitHubIcon style={{ color: 'black' }} fontSize='small'></GitHubIcon></a>  
                        </Typography>
                </Container>
            </footer>
        );
    }
}