(function () {
'use strict';

angular.module('MenuApp')
.component('myItems', {
  templateUrl: 'src/shoppinglist/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
