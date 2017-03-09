myApp.controller('CustomerController', function(){
  console.log('Customer Controller was loaded');

  var dummyData = [
    {first_name: 'Lisa', last_name: 'Bonet'},
    {first_name: 'Charles', last_name: 'Darwin'},
    {first_name: 'George', last_name: 'Foreman'},
    {first_name: 'Lucy', last_name: 'Liu'}
  ];

  var self = this;
  self.someMessage = 'This site is amazing!!';
  self.dummyData = dummyData;
});
