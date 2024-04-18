const Login = () => {
    return ( 
        // bs5-form-group --> login page
        <>
        <div className="row justify-content-center mt-4">
            <div className="col-sm-5 mb-3">
                <h3>Login</h3>
            </div>
        </div>
        <div className="row justify-content-center mt-1">
            <div className="col-sm-5 mb-3">
                <label for="" className="form-label">Email: </label>
                <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                />
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-5 mb-3">
            <label for="" className="form-label">Password</label>
            <input
                type="password"
                name=""
                id=""
                className="form-control"
                placeholder=""
                aria-describedby="helpId"
            />
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-5 mb-3">
        <button
            type="submit"
            className="btn btn-light"
        >
            Login
        </button>
        </div>
        </div>

        
        </>
        
     );
}
 
export default Login;