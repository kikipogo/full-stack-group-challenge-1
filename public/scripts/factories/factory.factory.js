myApp.factory('FactoryFactory', ['$http', function($http){
var factoryWarehouse = { list: [] };

getWarehouse();
function getWarehouse() {
  $http({ //this is like our AJAX call
    method: 'GET',
    url: '/warehouse'
  }).then(function(response){
    factoryWarehouse.list = response.data; //variable factoryTasks and the property you want
    console.log('logging in factory in function', factoryWarehouse.list);
  });//ends .then
} //ends getWarehouse function




























return {
  factoryWarehouse: factoryWarehouse,


};
}]);
