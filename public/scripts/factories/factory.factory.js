myApp.factory('FactoryFactory', ['$http', function($http){
  var factoryOrder = { list: [] };













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

















    factoryOrder: factoryOrder,
