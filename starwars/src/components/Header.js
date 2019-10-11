import React from "react"
import { Jumbotron } from "reactstrap"

const Header = () => {
    return (
        <div>
            <Jumbotron className='display-3' color='warning'>
                <h1>This is my React Wars!</h1>
            </Jumbotron>
        </div>
    )
}

export default Header
