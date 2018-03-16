angular.
module('myApp',['ngRoute', 'imgCategories', 'imageList', 'imagesOfCategory']).
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/images', {
            template: '<image-list></image-list>'
        }).
        when('/tag/:categoryName', {
            template: '<images-of-category></images-of-category>'

        }).
        otherwise({
            redirectTo:'/images'
        });
    }
]);



// config(function config($routeProvider) {
//         $routeProvider
//             .when('/images', {
//                 template: '<img-categories></img-categories>'
//         }).
//         // when('/tag/:categoryName', {
//         //     template: '<images-of-category></images-of-category>'
//         // }).
//         otherwise({
//             redirectTo:'/images'
//         });
//     }
// );