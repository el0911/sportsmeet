      angular.module('starter.controllers', [])

      .controller('DashCtrl', function($scope,$state) {

          $scope.next=function(){
            $state.go("chatm");
          }

      })
      .controller("notification",function($scope,$state){
          // console.log(1);
                              //
        $scope.next=function(){
          $state.go("chatm");
              }
      })


      .controller("time",function($scope,$state){
          // console.log(1);

                    $scope.next=function(){
                      $state.go("chatm");
                    }

      })

            .controller('chat', function($scope) {

            })

            .controller('chatmm', function($scope,Chats,$state) {
              $scope.chats = Chats.all();
              $scope.remove = function(chat) {
                Chats.remove(chat);
              };

              $scope.next=function(){
                $state.go("chatm");
              }


            })

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
        var element = document.getElementById("content");
          console.log(element.offsetWidth);
          var value=element.offsetWidth;// vontent with
          var iwidth=122.7419354839;//this is constant
          var divide=value/iwidth;
          var position = Math.floor( divide);
            console.log(divide);
              console.log("position:"+position);
          // var elements = document.getElementById("h");
          //   console.log(elements.offsetHeight);
          $scope.items = [];

          for (var i = 0; i <= 5; i++) {
            var tmp = [
              {desc: 'The Ramones', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSulfJcjBhxxW2NBBn9KbE3B4BSeh0R7mQ38wUi_zpJlQrMoDWh_qFcMelE_tjtAERUPTc'},
              {desc: 'The Beatles', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGpH07f9zeucoOs_stZyIFtBncU-Z8TDYmJgoFnlnxYmXjJEaitmxZNDkNvYnCzwWTySM'},
              {desc: 'Pink Floyd', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-FbU5dD_Wz472srRIvoZAhyGTEytx9HWGusbhYgSc2h0N6AqqRrDwzApmyxZoIlyxDcU'},
              {desc: 'The Rolling Stones', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6uwPPBnHfAAUcSzxr3iq9ou1CZ4f_Zc2O76i5A4IyoymIVwjOMXwUFTGSrVGcdGT9vQY'},
              {desc: 'The Jimi Hendrix Experience', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRA3jz0uhVypONAKWUve80Q6HASvuvZiohl4Sru5ZihkAsjWiaGjocfxd0aC3H7EeFk5-I'},
              {desc: 'Van Halen', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIslVN9cJJ6YuV0y7JihAyA63JDhXGhkCVxHIRE-IoaF-rpefjIXO5osA24QvN9iCptC8'}
            ];
            $scope.items = $scope.items.concat(tmp);
          };
      });
