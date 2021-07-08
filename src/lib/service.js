const axios = require('axios')
async function getData(userID){
    let userUrl = `https://jsonplaceholder.typicode.com/users/${userID}`
    let postUrl= `https://jsonplaceholder.typicode.com/posts?userId=${userID}`

    let userInfo;
    let userPostInfo;
    try {
        userInfo = await axios.get(userUrl);
        userPostInfo = await axios.get(postUrl);

       return {userInfo, userPostInfo};
    } catch (error) {
        console.error(error);
    }
}
module.exports={getData};
