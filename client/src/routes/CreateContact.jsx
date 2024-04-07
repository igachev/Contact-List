import { Form, redirect } from "react-router-dom";
import * as contactService from "../services/contactService"

export async function createContactAction({request}) {
    try {
        const formData = await request.formData()
        const createFormData = Object.fromEntries(formData.entries())
        const newContact = await contactService.createContact(createFormData)
        return redirect('/contacts')
    } catch (err) {
        console.log(err)
    }
}

export default function CreateContact() {

    return (
        <div className="create-contact">
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

            <div className="btn-container">
                <input type="submit" value="Create" />
            </div>

            </Form>
        </div>
    )

}