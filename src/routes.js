(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  .state('catagories', {
    url: '/catagories',
    templateUrl: 'src/shoppinglist/main-catagoriePage.html',
     controller: 'CategoriesComponentController as CCC',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        console.log("ass");
        return MenuDataService.getAllCategories();

      }]
    }
  })

  // Item detail
  .state('catagories.menuu', {
     url: '/item-detail/{categoryShortNameIndex}',
    templateUrl: 'src/shoppinglist/main-itemPage.html',
    controller: 'ItemsComponentController as ICC',
    prameters: {
      categoryShortNameIndex : null
    },
    resolve :{
      menuItems: ['MenuDataService','$stateParams','items', function (MenuDataService,$stateParams,items) {
         var categoryShortName = items[$stateParams.categoryShortNameIndex].short_name;
         console.log("The fucking thing",categoryShortName);
         console.log("stateParams",$stateParams);
        console.log("looool",$stateParams.categoryShortNameIndex);
        console.log("asschild");
        return MenuDataService.getItemsForCategory(categoryShortName);

      }]
    }
  });

}

})();
