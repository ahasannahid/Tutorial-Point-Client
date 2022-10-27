import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa"

const RightNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle>  Login with google</Button>
                <Button variant='outline-dark'><FaGithub></FaGithub> Login with github</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightNav;