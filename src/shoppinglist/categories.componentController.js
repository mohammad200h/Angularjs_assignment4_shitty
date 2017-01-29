(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesComponentController', CategoriesComponentController);

CategoriesComponentController.$inject = ['MenuDataService','items'];
function CategoriesComponentController(MenuDataService,items) {
  var CCC = this;

  CCC.items = items;

}

})();
