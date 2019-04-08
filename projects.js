module.exports = function (http){
    return {
        list: async function (){
            let response = await http.get ('/project/list');
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
                return response.data.projects;
            }
            console.log('de aici sare')
            throw new Error ('invalid request');
        },

        get: async function (projectId){
            let response = await http.get ('/project/'+projectId);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
                return response.data.project;
            }
            
            throw new Error ('invalid request');
        }
    }
};