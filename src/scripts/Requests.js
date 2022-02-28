import { deleteRequest, getRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


export const Requests = () => {
    const requests = getRequests()

    let html = "<ul>"

    const convertedRequestToListElement = requests.map(
        (request) => {
            return `<li> 
                ${request.description}
                <button class="request_delete"
                        id="request--${request.id}">
                    Delete
                </button>
            </li>`
        }
    )
            
    html += convertedRequestToListElement.join("")
    html += "</ul>"

    return html
}