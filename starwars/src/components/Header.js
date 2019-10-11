import React from "react"
import { Jumbotron } from "reactstrap"

const Header = () => {
    return (
        <div>
            <Jumbotron>
                <h1 className='display-3' color='warning'>
                    This is my React Wars
                </h1>
            </Jumbotron>
        </div>
    )
}

export default Header
