import { Form, redirect } from "react-router-dom";
import * as authService from "../services/authService";


export async function loginAction({ request }) {

    try {
        const formData = await request.formData();
        const loginForm = Object.fromEntries(formData.entries());
        const loggedUser = await authService.login(loginForm.email, loginForm.password);
        if(loggedUser) {
            localStorage.setItem("accessToken", loggedUser.accessToken);
        return redirect("/contacts")
        }
    } catch (err) {
        console.log(err);
        // Handle errors if necessary
        return err
    }
}

export default function Login() {
    return (
        <section>
            <Form method="post">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </Form>
        </section>
    );
}