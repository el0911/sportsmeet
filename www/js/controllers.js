      angular.module('starter.controllers', [])

      .controller('DashCtrl', function($scope) {})

      .controller('head', function($scope) {
        $scope.view={
          search:false,
          text:false,
          bar:true,
          messages:false,
          user:false
        };

        $scope.search=function(){
        if($scope.view.bar===true){
          $scope.view={
            search:false,
            text:true,
            bar:false,
            messages:true,
            // user:true changing the class of it to a cancel button
          };
        }
        }

        $scope.searchm=function(){}

        $scope.search=function(){}

      })

      .controller('mlogin', function($scope,$state) {

         $scope.view={main:false,login:true,signup:true};

         $scope.back=function(){
           $scope.view={main:false,login:true,signup:true};
         }

         $scope.login=function(){
           $scope.view={main:true,login:false,signup:true};
         }

         $scope.signup=function(){
           $scope.view={main:true,login:true,signup:false};
         }

         $scope.loginm=function(){
           $state.go('tab.dash');
           }

         $scope.signupm=function(){
            $state.go();
         }

      })

      .controller('ChatsCtrl', function($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
          Chats.remove(chat);
        };
      })

      .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
      })

      .controller('AccountCtrl', function($scope) {
        $scope.settings = {
          enableFriends: true
        };
      });
