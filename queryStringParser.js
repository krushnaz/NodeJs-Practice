const url = require('url');
module.exports = {
    parseQueryString : function(queryString){
        const parseUrl = url.parse(queryString,true)
        return parseUrl.query;
    }
}