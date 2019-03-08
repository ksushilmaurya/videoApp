var app = angular.module("myApp");

app.service("MainService", function ($http) {

    this.get = function (input) {

        return $http.get("https://www.googleapis.com/youtube/v3/search/", {
            params: {
                key: 'AIzaSyC0vIdjWOXNdyXG--z_MGgz1YHU-9LIx_c' ,
                type: 'video',
                maxResults: '5',
                pageToken: '',
                part: 'id, snippet',
                fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken,prevPageToken',
                q: input
            }
            
        }).then(function (response) {
        console.log(response);  
        return response.data;  
        });
    }
})