import { Form } from "react-router-dom";

export default function CreateContact() {

    return (
        <div>
            <h2>Create Contact</h2>
            <Form method="post">

            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" />
            </div>

            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" />
            </div>

            <div>
                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" name="imageUrl" />
            </div>

            <div>
                <label htmlFor="notes">Notes:</label>
                <textarea name="notes" cols="30" rows="10"></textarea>
            </div>

            <div>
                <input type="submit" value="Create" />
            </div>

            </Form>
        </div>
    )

}