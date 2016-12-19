(function () {
    'use strict';
    angular.module('lunchCheck',[])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchstr="";
        $scope.message="";

        $scope.checkLunch = function () {
            if(arrLength() == 0){
                $scope.message="Please enter Data first!";
            }
            else if(arrLength()>3){
                $scope.message= "Too Much!!!";
            }
            else{
                $scope.message= "Enjoy";
            }
        };

        function arrLength(){
            var al = $scope.lunchstr.split(',');
            var counter = 0;
            for (var i=0; i<al.length; i++){
                if(/\S/.test(al[i])){
                    counter++;
                }
            }
            return counter;
        };

    }

})();
/**
 * Created by thomasschuler on 10.12.16.
 */

