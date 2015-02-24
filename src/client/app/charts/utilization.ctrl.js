/**
 * Created by naor on 2/24/15.
 */
(function () {
  angular.module('charts').controller('UtilizationCtrl', function ($scope) {

    $scope.currCpuUsage = {
      used: 30
    };

    $scope.currMemoryUsage = {
      heapUsed: 30,
      heapTotal: 100,
      rss: 180
    };

    $scope.totalMemory = 1024;

    $scope.memoryHistory = [
      50,
      50,
      100,
      60,
      70,
      40,
      45,
      200,
      100,
      30,
      15,
      35,
      40,
      50,
      60,
      100,
      150,
      123,
      75,
      20
    ];

    $scope.cpuHistory = [
      50,
      50,
      100,
      60,
      70,
      40,
      45,
      200,
      100,
      30,
      15,
      35,
      40,
      50,
      60,
      100,
      150,
      123,
      75,
      20
    ];

    $scope.historyTimeInterval = 300000;
  });
})();