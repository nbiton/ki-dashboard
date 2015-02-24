/**
 * Created by naor on 2/24/15.
 */
/**
 * Created by naor on 2/24/15.
 */
(function () {
  angular.module('charts').directive('historyGraph', function () {
    function leadingZeros(str, charCount) {
      var res = '',
        missingZeroes = charCount - str.length;
      for (var i = 0; i < missingZeroes; i++){
        res += '0';
      }

      return res + str;
    }
    return {
      replace: true,
      restrict: 'E',
      scope: {
        values: '=',
        timeInterval: '@'
      },
      template: '<div><canvas class="chart chart-line" data="chartData" labels="labels"></canvas></div>',
      link: function (scope, element) {
        scope.chartData = [scope.values];
        var timeInterval = parseInt(scope.timeInterval);

        scope.labels = [];
        for (var i = 0; i < scope.values.length; i++){
          var labelDate = new Date(Date.now() - (timeInterval * scope.labels.length));

          scope.labels.unshift(leadingZeros(labelDate.getHours().toString(), 2) + ':' + leadingZeros(labelDate.getMinutes().toString(), 2));
        }
      }
    }
  });
})();