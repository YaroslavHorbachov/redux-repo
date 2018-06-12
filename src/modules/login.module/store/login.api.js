const end = 'http://localhost:3020/'
const postConfig = {
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({ date: new Date().getSeconds() }),
}

export const loginRequest = () => (
    fetch(end + 'login', {
        method: 'get'
    })
)