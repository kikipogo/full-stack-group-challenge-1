myApp.factory('FactoryFactory', ['$http', function($http){
  var factoryOrder = { list: [] };
  var factoryCustomer = { list: []};


getCustomers();
getOrder();



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
factoryOrder: factoryOrder,
factoryCustomer: factoryCustomer
};


}]);
