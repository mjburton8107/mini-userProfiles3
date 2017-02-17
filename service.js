angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();

//move the return to deferred.promise on line 13

    $http({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=1'
    }).then(function(response){
      var users = response.data.data;

      users.forEach(function(user){
        user.first_name = "Michael";
        user.avatar = "http://fatcatart.com/wp-content/gallery/dutch-art/thumbs/thumbs_Helst-Portret-van-Gerard-Andriesz-Bicker-cat-w.jpg";
      });
      deferred.resolve(users)
//above is where you're doing the data manipulation you were doing in your controller on version 2
    })
  return deferred.promise;
  }
});
