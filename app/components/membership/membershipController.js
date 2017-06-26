angular.module('yoga').controller('membershipCtrl',['angular-translate','$firebaseArray',
    function ($scope,$firebaseArray) {
        $scope.memberships = $firebaseArray(new Firebase('https://webmanageapp.firebaseio.com'));
    },
     // flags
    $scope.createNewType=false,
    $scope.addNewMember=false,
    $scope.editMember=false,

    $scope.membership = {
                        membershiptype:0,    // not a member
                        membershipexpiration:date
                        },


    $scope.createMembershipType = function (type,date) {
       this.membershiptype = type;
       this.membershipexpiration = date;
       $scope.memberships.push(this);
       return true;
    },

    $scope.deleteMembershipType = function (index) {
       $scope.memberships.splice(index,1);
    }




   ] );