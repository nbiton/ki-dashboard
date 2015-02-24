/**
 * Created by naor on 2/24/15.
 */
(function () {
  angular.module('charts').directive('utilizationPie', function () {
    return {
      replace: true,
      restrict: 'E',
      scope: {
        valueMap: '=',
        total: '='
      },
      template: '<div><canvas class="chart chart-pie" data="chartData" labels="labels"></canvas></div>',
      link: function (scope) {

        var reverseMap = {};
        for (var key in scope.valueMap) {
          reverseMap[scope.valueMap[key].toString()] = key;
        }

        var values = Object.keys(reverseMap).map(function (key) {
          return parseInt(key);
        }).sort(function (a, b) {
          return a - b;
        });

        scope.labels = values.map(function (value) {
          return reverseMap[value.toString()];
        }).concat(['Free']);

        var lastValue = 0;
        scope.chartData = values.map(function (value) {
          var res = value - lastValue;
          lastValue = value;
          return res;
        }).concat([scope.total - lastValue]);
      }
    }
  });
})();