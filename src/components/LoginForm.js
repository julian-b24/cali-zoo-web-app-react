import '../css/LoginForm.css'

function LoginForm(){
    return(
        <div className="LoginForm">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Bienvenido al Zoológico!</h3>
                        <p>Inicia sesión para continuar</p>
                    </div>

                    <form className="card-body">

                        <div className="form-group">
                            <label>Lion's Name</label>
                            <input
                                type="text"
                                name="lionName"
                                className="form-control"
                                placeholder="Lion's name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="text"
                                name="lionPassword"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;