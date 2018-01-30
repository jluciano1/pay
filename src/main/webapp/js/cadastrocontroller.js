(function ($app) {
    angular.module('custom.controllers', []);
    
    app.controller('CadastroController', ['$scope', '$http', '$location', '$rootScope', '$window', '$state', '$translate', 'Notification', function ($scope, $http, $location, $rootScope, $window, $state, $translate, Notification) {
      $scope.message = {};
      $scope.cadastrar = function () {
        $scope.message.error = undefined;

        $http({
            method: 'POST',
            url: 'api/security/User/cadastrar',
            data: $.param($scope.user),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(handleSuccess).error(handleError);
      }
      
      function handleSuccess(data, status, headers, config) {
        // Store data response on session storage
        // The session storage will be cleaned when the browser window is closed
        if(typeof(Storage) !== "undefined") {
          // save the user data on localStorage
          sessionStorage.setItem("_u",JSON.stringify(data));
          $rootScope.session = JSON.parse(sessionStorage._u);
        } else {
          // Sorry! No Web Storage support.
          // The home page may not work if it depends
          // on the logged user data
        }
        
        // Redirect to home page
        $state.go("login");
      }

      function handleError(data, status, headers, config) {
        var error = status == 401 ? $translate.instant('Login.view.invalidPassword') : data;
        Notification.error(error);
      }
    }]);

} (app));