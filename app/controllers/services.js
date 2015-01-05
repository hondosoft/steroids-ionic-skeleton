'use-strict';

angular.module('skeletonApp.services', ['restangular'])

    .factory('nameService', function () {

        return {
                getName: function() {
                    return "Skeleton App";
                }
        }

    });
