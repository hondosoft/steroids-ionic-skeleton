'use-strict';

angular.module('skeletonApp', ['ionic', 'skeletonApp.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .constant('baseUrl', 'http://localhost:8080/rest')

    .config(function (RestangularProvider, baseUrl) {
        RestangularProvider.setDefaultHeaders({ "Content-Type": "application/json" });
        RestangularProvider.setBaseUrl(baseUrl);
    });
