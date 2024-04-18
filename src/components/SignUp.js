const SignUp = () => {
    return ( 
        <>
        <div class="row justify-content-center mt-4">
            <div className="col-sm-5 mb-3">
                <h3>Sign-Up</h3>
            <label for="" className="form-label">Name</label>
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
        <div class="row justify-content-center mt-1">
            <div className="col-sm-5 mb-3">
                <label for="" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                />
            </div>
        </div>
        <div class="row justify-content-center">
            <div className="col-sm-5 mb-3">
            <label for="" className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                name=""
                id=""
                placeholder=""
            />
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-5 mb-3">
            <label for="" className="form-label">Phone Number</label>
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
            <button
                type="submit"
                class="btn btn-light"
            >
                SignUp
            </button>
            </div>
        </div>
        </>
     );
}
 
export default SignUp;