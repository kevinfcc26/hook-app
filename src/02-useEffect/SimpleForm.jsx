import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Kevin',
        email: 'test@test.com'
    });

    const {username, email} = formState;

    const onInputChange = ({ target }) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value,
        });
    }

    useEffect(() => {
    },[formState]);

    useEffect(() => {
    },[formState]);

    useEffect(() => {
    },[email]);
    

  return (
    <>
        <h1>SimpleForm</h1>
        <hr />

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={ onInputChange }
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="Email"
            name="email"
            value={email}
            onChange={ onInputChange }

        />
        {
            (username === 'Kevin2') && <Message/>
        }
        

    </>
  )
}
