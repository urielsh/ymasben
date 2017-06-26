
angular.module('yoga',['ui-router','ui.rcalendar'])
"use strict"
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
        $stateProvider

            .state('login', {
                url:'/login',
                templateUrl: 'login/login.html',
                controller: 'loginController',
                controllerAs: 'loginCtrl',
            })
            .state('register', {
                url:'/register',
                templateUrl: 'register/register.html',
                controller: 'registerController',
                controllerAs: 'registerCtrl',

            })
            .state('manager', {
                url:'/manager',
                templateUrl: 'manager/manager.html',
                controller: 'managerController',
                controllerAs: 'managerCtrl',

            })
            .state('membership', {
                url:'/membership',
                templateUrl: 'membership/membership.html',
                controller: 'membershipController',
                controllerAs: 'membershipCtrl',

            })
            .state('contact', {
                url:'/contact',
                templateUrl: 'manager/contact/contact.html',
                controller: 'contactController',
                controllerAs: 'contactCtrl',

            })
            .state('users', {
                url:'/users',
                templateUrl: 'manager/users/users.html',
                controller: 'usersController',
                controllerAs: 'usersCtrl',

            })
            .state('classes', {
            url:'/classes',
            templateUrl: 'classes/classes.html',
            controller: 'classesController',
                controllerAs: 'classesCtrl',

        })
            .state('user', {
                url:'/user',
                templateUrl: 'user_view/user_view.html',
                controller: 'userViewController',
                controllerAs: 'userViewCtrl',

            })



   }]);