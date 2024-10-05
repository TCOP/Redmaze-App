import axios from 'axios'

/**
 * Simple client to send an HTTP request 
 * @param {string} url 
 * @param {object} headerValue 
 */

export async function httpRequest(url: string, elementId: string[]) {

    let body: { [key: string]: any } = {}
    elementId.forEach(element => {
        const inputElement = document.getElementById(element) as HTMLInputElement | null

        if (inputElement) {
            const value = inputElement.value
            body[element] = value
            // console.log(body)
        }
    });

    try {
        const response = await axios.post(url, body);
        const messageElement = document.getElementById('message')

        if (messageElement) {
            console.log(response.data.message)
            messageElement.innerText = `${response.data.message}`;
        }

    } catch (error) {
        console.log('error bud', error);
    }
}

declare global {
    interface Window {
        httpRequest: (url: string, elementId: string[], headerValue: string | null) => void;
    }
}

window.httpRequest = httpRequest;