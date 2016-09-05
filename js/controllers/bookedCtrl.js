angular.module('devmtnTravel').controller('bookedCtrl',function($scope,$location,mainSrv){

  $scope.bookedId = $location.path().replace('/booked/','');

  for (key in mainSrv.travelInfo){
    if (mainSrv.travelInfo[key]['id'] === Number($scope.bookedId)){
      $scope.package = mainSrv.travelInfo[key];
    }
  }

});
