(function () {
'use strict';

angular.module('MenuApp')
.component('myCategories', {
  templateUrl: 'src/shoppinglist/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
