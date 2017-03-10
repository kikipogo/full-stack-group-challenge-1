myApp.controller('WarehouseController',['FactoryFactory', function(FactoryFactory){
  console.log('Warehouse Controller was loaded');

  var self = this;
  self.warehouseData = FactoryFactory.factoryWarehouse;

}]);
