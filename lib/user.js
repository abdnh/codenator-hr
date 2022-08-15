
const SERVER = process.env.JSON_SERVER;

export async function getUser(email, password) {
    const results = await (await fetch(`${SERVER}/users?email=${email}&password=${password}`)).json();
    const user = results[0];
    return user ? { user, loggedIn: true } : { loggedIn: false };
}
