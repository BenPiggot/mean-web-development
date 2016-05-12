<<<<<<< HEAD
var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['example']);

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName])
})
=======
var mainApp = angular.module("Mean", []);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['Mean']);
})
>>>>>>> 0f33465abf95d1f66da9dc0741ff72c5304eda4a
