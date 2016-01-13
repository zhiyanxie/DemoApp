'use strict';


eventsApp.directive("upvote", function(){

    return {
        restrict: 'E',
        templateUrl:'templates/directives/upvote.html',
        scope:{
            upvote:"&",
            downvote:"&",
            count:"="
        }
    }



});