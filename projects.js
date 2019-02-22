module.exports = function (http){
    return {
        list: async function (){
            let response = await http.get ('/project/list');
            if (response.data)
                return {
                    err: response.data.err,
                    projects: response.data.projects
                };
            return {
                err: 'Invalid request'
            };
        },

        get: async function (projectId){
            let response = await http.get ('/project/'+projectId);
            if (response.data)
                return {
                    err: response.data.err,
                    project: response.data.project
                };
            return {
                err: 'Invalid request'
            };
        }
    }
};