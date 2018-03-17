'use strict';

// Register `phoneDetail` component, along with its associated controller and template
    +angular.
  module('imagesOfCategory',  ['ngRoute'])
        .component('imagesOfCategory', {
            templateUrl: 'images-of-category/images-of-category.template.html',
            controller: ['$http', '$routeParams',
                function ($http, $routeParams) {
                var self = this;
                self.tagSearch = $routeParams.categoryName;

                $http.get('https://api.imgur.com/3/gallery/search/?q='+self.tagSearch, {
                    headers: {'Authorization': 'Client-ID b82eca036063cec'}
                })
                    .then(result => {
                        this.imgSearch = result.data.data;
                        console.log(this.imgSearch);

                    });

                }
             ]
});