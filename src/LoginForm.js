function LoginForm() {
    return (
     
    <form> 
        <input type="text" id="username" name="username" placeholder="username"/>
        <input type="password" id="password" name="password" placeholder="Password"/>

        <button type="submit">Login</button>
    </form>
    );
    }
    
    export default LoginForm;