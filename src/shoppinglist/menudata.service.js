(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http){
  var service =this;

  service.getAllCategories=function(){

    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"
    }).then(function(response){
      console.log("getAllCategories.data",response);
          return response.data;
    });
  };

  service.getItemsForCategory = function(categoryShortName){


    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
    }).then(function (rawdata) {
      console.log('categoryShortName',categoryShortName);
      console.log("rawdata.data",rawdata.data);
      console.log("rawdata.data.menu_items",rawdata.data.menu_items);
      return rawdata.data.menu_items;
    });

  }
}

})();
