'use-strict';

var app = angular.module('skeletonApp');

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "menu.html",
            controller: 'AppCtrl'
        })

        .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "home.html",
                    controller: 'HomeCtrl'
                }
            }
        })

        .state('app.section', {
            url: "/section",
            views: {
                'menuContent': {
                    templateUrl: "section.html",
                    controller: 'SectionCtrl'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
