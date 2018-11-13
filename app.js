(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.dishes = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkLunch = function() {
            if ($scope.dishes.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var dishes1 = $scope.dishes.split(',');
                var dishesWithoutEmpty = dishes1.filter(function(dish) {
                    return dish.trim() !== '';
                });

                if (dishesWithoutEmpty.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();
