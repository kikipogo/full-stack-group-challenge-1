myApp.factory('FactoryFactory', ['$http', function($http){
  var factoryWarehouse = { list: [] };
  var factoryOrder = { list: [] };
  var factoryCustomer = { list: [] };

  getWarehouse();
  getCustomers();
  getOrder();

  function getWarehouse() {
    $http({
      method: 'GET',
      url: '/warehouse'
    }).then(function(response){
      factoryWarehouse.list = response.data;
      console.log('logging in factory in function', factoryWarehouse.list);
    });//ends .then
  } //ends getWarehouse function

  function getOrder() {
    $http({
      method: 'GET',
      url: '/order'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      factoryOrder.list = response.data;
    });
  }

  function getCustomers() {
    $http({
      method: 'GET',
      url: '/customer'
    }).then(function(response) {
      console.log('this is response.data from factory', response.data);
      console.log('this is response from factory', response);
      factoryCustomer.list = response.data;
    });
  }

  return {
    factoryWarehouse: factoryWarehouse,
    factoryOrder: factoryOrder,
    factoryCustomer: factoryCustomer
  };

}]);
