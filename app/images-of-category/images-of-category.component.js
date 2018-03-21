'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('imagesOfCategory',  ['ngRoute'])
        .component('imagesOfCategory', {
            templateUrl: 'images-of-category/images-of-category.template.html',
            controller: ['$http', '$filter', '$routeParams',
                function ($http, $filter, $routeParams) {
                var self = this;
                self.tagSearch = $routeParams.categoryName;
                self.page = $routeParams.pageNum;
                self.next = parseInt(self.page) + 1;
                self.previous = parseInt(self.page) - 1;

                $http.get('https://api.imgur.com/3/gallery/search/top/all/'+self.page+'/?q='+self.tagSearch, {
                    headers: {'Authorization': 'Client-ID b82eca036063cec'},
                })

                    .then(result => {
                        this.imgSearch = result.data.data;

                        $( document ).ready(function() {
                            $( "#floatingBarsG" ).hide();
                            $('#container').removeClass( "displayNone" );
                        });

                    });

                }
             ]
});