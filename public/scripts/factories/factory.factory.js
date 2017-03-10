myApp.factory('FactoryFactory', ['$http', function($http){
var factoryWarehouse = { list: [] };

getWarehouse();
function getWarehouse() {
  $http({
    method: 'GET',
    url: '/warehouse'
  }).then(function(response){
    factoryWarehouse.list = response.data;
    console.log('logging in factory in function', factoryWarehouse.list);
  });//ends .then
} //ends getWarehouse function




























return {
  factoryWarehouse: factoryWarehouse,


};
}]);
