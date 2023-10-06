import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {
    const { formState, onInputChange, username, email, password } = useForm(    {
        username: 'Kevin',
        email: 'test@test.com',
        password: '1234'
    });

    // const { username, email, password } = formState;


  return (
    <>
        <h1>SimpleForm con custom hook</h1>
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
        <input
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={password}
            onChange={ onInputChange }

        />
        

    </>
  )
}
