import React, { useState } from 'react'
import BasicLayout from "../src/layouts/BasicLayout";
import Link from 'next/link'
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData, { resetForm }) => {
      setIsLoading(true);
        login(formData.userEmail, formData.userPassword)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            toast.success("User login successfully");
            resetForm({ values: "" });
            setIsLoading(false);
            router.push("/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            toast.error(errorMessage);
            setIsLoading(false);
          }
        );
      
      resetForm({ values: "" });
      setIsLoading(false);
    },
  });

  return (
      <BasicLayout classNameName="home">
          <main className="login-form m-4">
    <div className="cotainer">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                   
                    <div className="card-body">
                        <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                              <h2>Signup</h2>
                        </div>  
                            <div className="form-group row mt-4">      
                                <div className="col-md-12">
                                    <input type="text" id="email_address" className="form-control" 
                                    onChange={formik.handleChange}
                                    value={formik.values.userEmail}
                                    placeholder="Email Address" 
                                    name="userEmail"
                                    isInvalid={formik.errors.userEmail}
                                    required
                                    autofocus/>
                                </div>
                            </div>

                            <div className="form-group mt-4"> 
                                <div className="col-md-12">
                                    <input type="password" id="password" className="form-control"
                                    onChange={formik.handleChange}
                                    value={formik.values.userPassword}
                                    isInvalid={formik.errors.userPassword}
                                    placeholder="Password" 
                                    name="userPassword"
                                    required
                                    />
                                </div>
                            </div>

                            <div className="form-group mt-4"> 
                                <div className="col-md-12">
                                    <input type="password" id="repeat-password" className="form-control"
                                    onChange={formik.handleChange}
                                    value={formik.values.userPassword}
                                    isInvalid={formik.errors.userPassword}
                                    placeholder="Repeat Password" 
                                    name="repeat-password"
                                    required
                                    />
                                </div>
                            </div>

                        

                            <div className="form-group mt-4">
                                <button type="submit" className="btn btn-primary btn-block">
                                   { isLoading ? 'Loading' : 'Signup' }
                                </button>
                            </div>

                            
                            </form>
                    </div>
                    
                </div>
                <p class="text-center mt-4">Already have account? <Link href="/signin">Login</Link></p>
            </div>
        </div>
    </div>
</main>   
      </BasicLayout>
  )
}

function initialValues() {
  return {
    userEmail: "",
    userPassword: "",
  };
}

function validationSchema() {
  return {
    userEmail: Yup.string().required(true),
    userPassword: Yup.string().required(true),
  };
}