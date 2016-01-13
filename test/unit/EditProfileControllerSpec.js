/**
 * Created by 60922 on 1/12/2016.
 */
'use strict';


describe('EditProfileControllerSpec',function(){
    var $controllerConstructor,scope,mockGravatarUrlBuilder;

    beforeEach(module("eventsApp"));
    beforeEach(inject(function($controller,$rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl : function(){}});
    }));

    it("should build Gravatar with given email address",function(){
        $controllerConstructor("EditProfileController",
            {"$scope":scope,gravatarUrlBuilder:mockGravatarUrlBuilder});
        var email = 'joe@joe.com';
        scope.getGravatarUrl(email);
        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith()).toBe(true);
    })

});