'use strict';

// Register the `imageList` component on the `imageList` module,
angular
    .module('imageList', [])
        .component('imageList', {
            // Note: The URL is relative to our `index.html` file
            templateUrl: 'image-list/image-list.template.html',
            controller:
                function ($http) {
                    this.$onInit = function () {
                    // noinspection JSAnnotator

                        $http.get('https://api.imgur.com/3/gallery/hot/viral/0.json', {
                            headers: {'Authorization': 'Client-ID b82eca036063cec'},
                        })
                        .then(result => {
                            this.items = result.data.data;
                        });
                    }
                }
        }
    );


