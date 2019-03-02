module.exports = function (http)
{
    return {
        get: async function (){
            let response = await http.get ('/settings');
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
                return response.data;
            }
            throw new Error ('invalid request');
        }
    };
};