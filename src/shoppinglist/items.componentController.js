(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsComponentController', ItemsComponentController);

ItemsComponentController.$inject=['menuItems','MenuDataService']
function ItemsComponentController(menuItems,MenuDataService) {
  var ICC = this;

  ICC.items = menuItems;



}

})();
