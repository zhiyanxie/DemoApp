'use strict';

eventsApp.controller("MainMenuController",

    function MainMenuController($scope,$location){
        $scope.createEvent = function(){
          $location.url('/newEvent');
        };
    }


);