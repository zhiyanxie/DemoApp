/**
 * Created by 60922 on 1/9/2016.
 */
'use strict';

eventsApp.controller("CompileSampleController",
     function CompileSampleController($scope,$compile){
              $scope.appendDivToElement = function(markup){
                  return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
              }
     }

);