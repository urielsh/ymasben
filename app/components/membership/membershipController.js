angular.module('ymasben').controller(['membershipCtrl',
    function ($scope) {
        $scope.user =
            {
                name:"",
                surename:"",
                email:"",
                level:0,             // no level
                classes:[],
                membershiptype:0,    // not a member
                membershipexpiration:date
            }
    }])