angular.module('ymasben', ['ngRoute','ui.rCalendar','socialLogin','firebaseUrl', '$firebaseAuth','pascalprecht.translate'])
    .config(function($routeProvider) {
        $routeProvider

        // route for the home page
            .when('/', {
                templateUrl: 'login/login.html',
                controller: 'loginController',
                controllerAs: 'loginCtrl'
            })
            /*manager routing*/
            .when('/manager', {
                templateUrl: 'components/manager/manager.html',
                controller: 'managerController',
                controllerAs: 'managerCtrl'
            })
            .when('/classes', {
                templateUrl: 'components/classes/classes.html',
                controller: 'classesController',
                controllerAs: 'classesCtrl'
            })
            .when('/membership', {
                templateUrl: 'components/membership/membership.html',
                controller: 'membershipController',
                controllerAs: 'membershipCtrl'
            })
            .when('/messages', {
                templateUrl: 'components/messages/messages.html',
                controller: 'messagesController',
                controllerAs: 'messagesCtrl'
            })
            /*user routing*/
            .when('/user', {
            templateUrl: 'components/user_view/user_view.html',
            controller: 'userViewController',
            controllerAs: 'userViewCtrl'
            })
            .when('/user_classes', {
                templateUrl: 'components/user_classes_view/user_classes_view.html',
                controller: 'userClassesController',
                controllerAs: 'userClassesCtrl'
            })
            .when('/user_membership', {
                templateUrl: 'components/user_membership_view/user_membership_view.html',
                controller: 'userMembershipViewController',
                controllerAs: 'userMembershipViewCtrl'
            })
            .when('/user_contact', {
                templateUrl: 'components/user_contact_view/user_contact_view.html',
                controller: 'userContactViewController',
                controllerAs: 'userContactViewCtrl'
            })


    });

/* .when('/user', {
 templateUrl: 'components/manager/management/user.html',
 controller: 'userController',
 controllerAs: 'userCtrl'
 })
 .when('/about', {
 templateUrl: 'components/manager/about/about.html',
 controller: 'aboutController',
 controllerAs: 'aboutCtrl'
 })

 .when('/user', {
 templateUrl: 'components/manager/contact/contact.html',
 controller: 'contactController',
 controllerAs: 'contactCtrl'
 });*/
/*.config(function (socialProvider) {
 socialProvider.setGoogleKey("YOUR GOOGLE CLIENT ID");
 socialProvider.setLinkedInKey("YOUR LINKEDIN CLIENT ID");
 socialProvider.setFbKey({appId: "'467966933552893'", apiVersion: "API VERSION"});
 }
 .config(['$translateProvider', function($translateProvider) {
 $translateProvider.defaultLanguage('he');
 $translateProvider.useUrlLoader("app/assets/translate.json");
 // registers translation table with language key 'he'
 $translateProvider.translations('en', $translateProvider.useUrlLoader("app/assets/translate.json"));

 // registers translation table with language key 'en'
 $translateProvider.translations('en', {
 WELCOME: 'Welcome!'
 }),
 // registers translation table with language key 'de'
 $translateProvider.translations('de', {
 WELCOME: 'herzlich willkommen!'
 }),
 // registers translation table with language key 'fr'
 $translateProvider.translations('fr', {
 WELCOME: 'Bienvenue!'
 })
 }*/

// create the controller and inject Angular's $scope

/*

 ymas.controller('usersController', ['$scope', usersControllerFunc]),
 ymas.controller('classesController', ['$scope', classesControllerFunc]);
 function managerControllerFunc($scope) {

 $scope.message = 'MANAGER pAGE';
 $scope.eventSources = [];
 $scope.classes = ['Gimnestic', 'Basketball']
 */


/* $calendar = $('[ui-calendar]');

 var date = new Date(),
 d = date.getDate(),
 m = date.getMonth(),
 y = date.getFullYear();

 $scope.changeView = function (view) {
 $calendar.fullCalendar('changeView', view);
 };

 /!* config object *!/
 $scope.uiConfig = {
 calendar: {
 lang: 'da',
 height: '100%',
 editable: true,
 header: {
 //left: 'month basicWeek basicDay',
 //center: 'title',
 right: 'today prev,next'
 },
 eventClick: function (date, jsEvent, view) {
 $scope.alertMessage = (date.title + ' was clicked ');
 },
 dayClick: $scope.alertEventOnClick,
 eventDrop: $scope.alertOnDrop,
 eventResize: $scope.alertOnResize,
 eventRender: $scope.eventRender
 }
 };
 */
/*$scope.events = [{
 title: 'All Day Event',
 start: new Date(y, m, 1)
 }, {
 title: 'Long Event',
 start: new Date(y, m, d - 5),
 end: new Date(y, m, d - 2)
 }, {
 id: 999,
 title: 'Repeating Event',
 start: new Date(y, m, d - 3, 16, 0),
 allDay: false
 }, {
 id: 999,
 title: 'Repeating Event',
 start: new Date(y, m, d + 4, 16, 0),
 allDay: false
 }, {
 title: 'Birthday Party',
 start: new Date(y, m, d + 1, 19, 0),
 end: new Date(y, m, d + 1, 22, 30),
 allDay: false
 }, {
 title: 'Click for Google',
 start: new Date(y, m, 28),
 end: new Date(y, m, 29),
 url: 'https://google.com/'
 }];

 $scope.eventSources = [$scope.events];

 };

 function usersControllerFunc($scope) {
 $scope.message = 'Look! I am an about page.';
 }

 function classesControllerFunc($scope) {
 $scope.message = 'Look! I am an about page.';
 }
 */