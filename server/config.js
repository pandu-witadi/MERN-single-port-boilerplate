//
//
//
let CF = {
    appName: "MEAN-boilerplate",
    appVersion: "0.0.1",
    port: 5152,
    baseURL : "http://localhost",

    frontEndPath: "../client/build",


    // mongodb setting
    use_mongo : true,
    dburl : 'mongodb://127.0.0.1:27017/',
    dbname : 'MERN-boilerplate',

    // secret_key for JWT (JSONWebToken)
    secret_str : "this-auth-token",
    refresh_token_time:  2 * 60 // 2 minutes
}
CF.publicURL = CF.baseURL + ':' + CF.port.toString()
CF.apiURL = CF.publicURL + '/api'

module.exports = CF
