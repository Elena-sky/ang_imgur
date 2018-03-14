// Define the `myApp` module
// объявление основного модуля
angular.module('myApp', [
    // ...which depends on the `imageList` module
    'imgCategories',
    'imageList',
    'tagsSearch'
]);
