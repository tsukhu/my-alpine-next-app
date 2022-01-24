import 'isomorphic-fetch';
import fs from 'fs';

const createTWJSfile = async () => {
    try {
        fetch('http://localhost:3000/api/blocks')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            })
            .then(function (result) {
               fs.writeFileSync("./generated/result.js", `export default ${JSON.stringify(result)}`, 'utf8');
            });
    } catch (e) {
        console.log(e)  // If any error is thrown, you can see the message.
    }
}

await createTWJSfile();