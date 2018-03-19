angular.
module('myApp',['ngRoute', 'imgCategories', 'imageList', 'imagesOfCategory']).
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/images', {
            template: '<image-list></image-list>'
        }).
        when('/tag/:categoryName/:pageNum', {
            template: '<images-of-category></images-of-category>'

        }).
        otherwise({
            redirectTo:'/images'
        });
    }
]);

