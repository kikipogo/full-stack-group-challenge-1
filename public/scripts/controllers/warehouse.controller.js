myApp.controller('WarehouseController', function(){
  console.log('Warehouse Controller was loaded');

  var self = this;
  self.dummyData = [{warehouse: 'alpha', fulfillment_days: 2}, {warehouse: 'beta', fulfillment_days: 3}, {warehouse: 'delta', fulfillment_days: 4}, {warehouse: 'gamma', fulfillment_days: 4}, {warehouse: 'epsilion', fulfillment_days: 5}];
  console.log(self.dummyData);

});
