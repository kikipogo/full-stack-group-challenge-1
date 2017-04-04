myApp.controller('OrderController', ['FactoryFactory', function(FactoryFactory){
  console.log('Order Controller was loaded');
  var self = this;
  self.orderList = FactoryFactory.factoryOrder;
}]);
