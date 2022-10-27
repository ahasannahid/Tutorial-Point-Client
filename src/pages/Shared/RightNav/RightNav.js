import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa"
import ListGroup from 'react-bootstrap/ListGroup';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';



const RightNav = () => {
    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSIgnIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSIgnIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle>  Login with google</Button>
                <Button variant='outline-dark'><FaGithub></FaGithub> Login with github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on </h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whats app</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;