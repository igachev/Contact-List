import { Form } from "react-router-dom";

export default function Search() {
   
    return (
          <div className="search-container">
            <Form method="get">
            <input type="search" name="search" id="search" placeholder="Search Contact..." />
            </Form>
          </div>
    )

}