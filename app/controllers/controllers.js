'use-strict';

angular.module('skeletonApp.controllers', ['restangular', 'skeletonApp.services'])

    .controller('AppCtrl', function ($scope) {

    })

    .controller('HomeCtrl', function ($scope, nameService) {
        $scope.name = nameService.getName();
    })

    .controller('SectionCtrl', function ($scope) {

    });
