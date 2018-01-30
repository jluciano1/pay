(function ($app) {
    angular.module('custom.controllers', []);
    
    app.controller('CadastroController', ['$scope', '$http', '$location', '$rootScope', '$window', '$state', '$translate', 'Notification', function ($scope, $http, $location, $rootScope, $window, $state, $translate, Notification) {
      $scope.message = {};
      $scope.cadastrar = function () {
        $scope.message.error = undefined;

        $http({
            method: 'POST',
            url: 'api/security/User/cadastrar',
            data: $scope.user
        }).success(handleSuccess).error(handleError);
      }
      
      function handleSuccess(data, status, headers, config) {
        $state.go("login");
      }

      function handleError(data, status, headers, config) {
        var error = status == 401 ? $translate.instant('Login.view.invalidPassword') : data;
        Notification.error(error);
      }
    }]);

} (app));