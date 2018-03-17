'use strict';

// Register `phoneDetail` component, along with its associated controller and template
    +angular.
  module('imagesOfCategory',  ['ngRoute'])
//         .component('imagesOfCategory', {
//         // Note: The URL is relative to our `index.html` file
//         templateUrl: 'images-of-category/images-of-category.template.html',
//         controller:
//             function ($http) {
//
//                 $http.get('https://api.imgur.com/3/tags')
//                     .then(result => {
//                         this.cat = result.data.data.tags;
//
//                     });
//             }
//     }
//
// )
        .component('imagesOfCategory', {
            templateUrl: 'images-of-category/images-of-category.template.html',
    controller: ['$http', '$routeParams',
        function ($http, $routeParams) {
            var self = this;
            self.tagSearch = $routeParams.categoryName;

            $http.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
                .then(result => {
                    this.items = result.data.data;
                    self.imgArr = [];
                    self.imgTag = this.items.forEach(function (imgData) {
                    self.findtag = imgData.tags.forEach(function (tagsData) {
                        if (tagsData.name === self.tagSearch) {
                            // self.dataImg = this.imgData;

                            return self.imgArr.push(imgData);
                        }

                    });

                    });
                    console.log(self.imgArr);

                });


        }
    ]
});