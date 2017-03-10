myApp.factory('FactoryFactory', ['$http', function($http) {
  var factoryCustomer = { list: []};


























  getCustomers();
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


  factoryCustomer: factoryCustomer
};
}]);
