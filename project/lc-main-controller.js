'use strict';

angular.module('dndWithD3App').controller('MainCtrl', ['$scope', 'filterFilter', 'Restangular', 'storage',

  function($scope, filterFilter, Restangular, storage) {
    var randomData, t, sampleData, init;
    randomData = function() {
      return Math.round(Math.random() * 25);
    };



    t = function() {
      //set time based identifiers which will be always unique; use this for assigning ids and charts
      var currentTime = new Date().getTime();
      while (currentTime == new Date().getTime());
      return new Date().getTime();
    };

    $scope.dragItems = [{
      title: "Score with 98",
      score: "98",
      itemId: t()
    }, {
      title: "Score with 65",
      score: "65",
      itemId: t()
    }, {
      title: "Score with 30",
      score: "30",
      itemId: t()
    }];

    $scope.handleDragStart = function(e) {
      this.style.opacity = '0.4';
      //e.dataTransfer.setData('text', this.innerHTML);
      e.dataTransfer.setData('text', this.id);
    };

    $scope.handleDragEnd = function(e) {
      this.style.opacity = '1';
    };

    $scope.handleDragEnter = function(e) {
      this.classList.add('over-drop-area');
    };
    $scope.handleDragLeave = function(e) {
      this.classList.remove('over-drop-area');
    };

    $scope.handleDrop = function(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      if (e.stopPropogation) {
        e.stopPropogation();
      }

      var dataText = e.dataTransfer.getData("text");
      $scope.draggedItem = [];
      $scope.draggedItem = filterFilter($scope.dragItems, dataText);
      $scope.$apply(function() {
        $scope.showChart();
        $scope.addToLocalStore();
      });

      return false;
    };

    $scope.handleDragOver = function(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.dataTransfer.dropEffect = 'copy';
      return false;
    };

    $scope.$watch('checked', function() {
      //$scope.chartData = [];
    });


    $scope.dataLength = 3;
    $scope.chartData = [];

    sampleData = [{
      data: 30,
      time: 1385532687055
    }, {
      data: 40,
      time: 1385532687051
    }, {
      data: 50,
      time: 1385532687052
    }, {
      data: 60,
      time: 1385532687022
    }, {
      data: 70,
      time: 1385532687053
    }, {
      data: 80,
      time: 1385532687058
    }, {
      data: 90,
      time: 1385532687059
    }];

    $scope.showChart = function() {
      if ($scope.checked) {
        $scope.chartData = sampleData;
      } else {
        $scope.chartData.push({
          time: t(),
          data: parseInt($scope.draggedItem[0].score, 10)
        });
        if ($scope.chartData.length > $scope.dataLength) {
          $scope.chartData.shift();
        }
      }
    };

    $scope.addToLocalStore = function() {
      storage.addLSItem($scope, 'offlineItems', $scope.chartData);
    };

    $scope.readLocalStore = function() {
      var storedItems = storage.getLSItem('offlineItems');
      if (storedItems && storedItems.length > 0) {
        $scope.chartData = storedItems;
        console.log($scope.chartData);
      } else {
        $scope.chartData = [];
      }
    };

    init = function() {
      $scope.readLocalStore();
    };

    init();

  }
]);