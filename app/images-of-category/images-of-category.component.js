'use strict';

// Register `phoneDetail` component, along with its associated controller and template
    +angular.
  module('imagesOfCategory',  ['ngRoute']).
    component('imagesOfCategory', {
        // Note: The URL is relative to our `index.html` file
        templateUrl: 'images-of-category/images-of-category.template.html',
        controller:
            function ($http) {

                $http.get('https://api.imgur.com/3/tags')
                    .then(result => {
                        this.cat = result.data.data.tags;

                    });
            }
    }
);


// .
// component('imagesOfCategory', {
//     template: 'TBD: Detail view for <span>{{$ctrl.categoryName}}</span>',
//     controller: ['$routeParams',
//         function PhoneDetailController($routeParams) {
//             this.categoryName = $routeParams.categoryName;
//         }
//     ]
// });