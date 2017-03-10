myApp.controller('CustomerController', [ 'FactoryFactory', function(FactoryFactory){
  var self = this;
  self.customer = FactoryFactory.factoryCustomer;
}]);
