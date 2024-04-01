import { Form, redirect, useLoaderData } from "react-router-dom";
import * as contactService from "../services/contactService"

export async function editContactAction({request,params}) {
    try {
        const formData = await request.formData()
        const editedFormData = Object.fromEntries(formData.entries())
        const contactId = params.contactId;
        await contactService.editContact(contactId,editedFormData)
      return  redirect(`/contacts/${contactId}`)
    } catch (err) {
        console.log(err)
    }
}

export default function EditContact() {

    let {contact} = useLoaderData()

    return (
        <section>
            <Form method="post">

                <div>
                    <label htmlFor="firstName">firstName:</label>
                    <input type="text" name="firstName" defaultValue={contact.firstName} />
                </div>

                <div>
                    <label htmlFor="lastName">lastName:</label>
                    <input type="text" name="lastName" defaultValue={contact.lastName} />
                </div>

                <div>
                    <label htmlFor="imageUrl">imageUrl:</label>
                    <input type="text" name="imageUrl" defaultValue={contact.imageUrl} />
                </div>

                <div>
                    <label htmlFor="notes">Notes:</label>
                    <textarea name="notes" id="notes" cols="30" rows="10" defaultValue={contact.notes}></textarea>
                </div>

                <div>
                    <button type="submit">Edit</button>
                    <button>Cancel</button>
                </div>
            </Form>
        </section>
    )
}