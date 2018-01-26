(function ($app) {
    angular.module('custom.controllers', []);
    
    app.controller('IndexController', ['$scope', '$http', '$location', '$rootScope', '$window', '$state', '$translate', 'Notification', function ($scope, $http, $location, $rootScope, $window, $state, $translate, Notification) {
      
      $scope.redirectLogin = function () {
        $state.go("login");
      }
      
      
      $scope.redirectCadastro = function () {
        $state.go("cadastro");
      }
      
    }]);

} (app));