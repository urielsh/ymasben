angular.module('yoga')
    .controller('contactCtrl', ['$scope',
        function contactControllerFunc($scope)
        {
            $scope.message = 'Contact us! JK. This is just a demo.';
        }]);