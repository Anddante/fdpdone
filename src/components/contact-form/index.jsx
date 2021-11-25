import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <Fragment>
            <h2 className="title">Service request</h2>
            <form
                id="contactForm"
                className="row"
                action="https://getform.io"
                method="POST"
            >
                <div className="col-12 col-sm-12 mb-3">
                    <input
                        type="text"
                        className="form-control underline"
                        id="name"
                        name="name"
                        placeholder="Name"
                        ref={register({ required: "Name is required" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="col-12 col-sm-12 mb-3">
                    <input
                        type="text"
                        className="form-control underline"
                        id="tel"
                        name="tel"
                        placeholder="Tel."
                        ref={register({ required: "Number is required" })}
                    />
                    {errors.tel && <p>{errors.tel.message}</p>}
                </div>
                <div className="col-12 col-sm-12 mb-3">
                    <input
                        type="text"
                        className="form-control underline"
                        id="email"
                        name="email"
                        placeholder="Email"
                        ref={register({
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="col-12 col-sm-12 mb-3">
                    <input
                        type="text"
                        className="form-control underline"
                        id="service"
                        name="service"
                        placeholder="Choose a service"
                        ref={register({ required: "service is required" })}
                    />
                    {errors.service && <p>{errors.service.message}</p>}
                </div>

                <div className="col-12 mb-4">
                    <textarea
                        className="form-control massage-control"
                        name="message"
                        id="massage"
                        cols="30"
                        rows="10"
                        placeholder="Additional Information"
                        ref={register({
                            required: "Message is required",
                        })}
                    ></textarea>
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <div className="col-12">
                    <button
                        id="contactSubmit"
                        type="submit"
                        className="btn"
                        data-complete-text="Well Done!"
                    >
                        Send a request
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default ContactForm;
