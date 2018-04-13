'use strict';

// Register the `imgCategories` component on the `imgCategories` module,
Array.prototype.pluck = function(key) {
    return this.map(function(object) { return object[key]; });
};
angular
    .module('imgCategories', ['ngRoute'])
    .component('imgCategories', {
            // Note: The URL is relative to our `index.html` file
            templateUrl: 'img-categories/img-categories.template.html',
            controller:
                function ($http) {
                    var self = this;
                    self.page = 1;

                    $http.get('https://api.imgur.com/3/tags', {
                        headers: {'Authorization': 'Client-ID b82eca036063cec'},
                    })
                            .then(result => {
                                this.cat = result.data.data.tags;

                            });
                }
        }
    );
