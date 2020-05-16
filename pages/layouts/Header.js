import React, {Component} from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'



export default class Header extends Component {

    render() {

        return (

            <>
                <Toolbar>
                    <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className='title'
        >
          App in NextJS
        </Typography>
                    
                </Toolbar>
            </>
        );
    }
}