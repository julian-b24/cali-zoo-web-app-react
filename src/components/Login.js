import LoginForm from "./LoginForm";
import '../css/Login.css';

function Login(){

    var sendLogin = ()=>{
        console.log("Enviar")
    }

    return(
        <div className="Login">
            <LoginForm/>
            <button type="button" className="btn btn-primary" onClick={sendLogin}>Enviar</button>
        </div>
    );
}

export default Login;