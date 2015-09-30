var app = angular.module( ' flapperNews ', []);
app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);
$scope.posts = [
   {title: 'post 1', upvotes: 5},
  {title: 'post 2', upvotes: 2},
  {title: 'post 3', upvotes: 15},
  {title: 'post 4', upvotes: 9},
  {title: 'post 5', upvotes: 4}
];
$scope.addPost = function(){
  $scope.posts.push({title: $scope.title, upvotes: 0});
  $scope.title = '';
};
<button ng-click="addPost()">Post</button>
if(!$scope.title || $scope.title === '') { return; }
$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};
<form ng-submit="addPost()">
  <input type="text" placeholder="Title" ng-model="title"></input>
  <br>
  <input type="text" placeholder="Link" ng-model="link"></input>
  <br>
  <button type="submit">Post</button>
</form>
$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0
  });
  $scope.title = '';
  $scope.link = '';
};
app.factory('posts', [function(){
  // service body
}])
app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);
app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  ...

)};
$scope.posts = posts.posts;
<script src="http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.js"></script>

angular.module('flapperNews', ['ui.router'])
app.config([
  .state('posts', {
  url: '/posts/{id}',
  templateUrl: '/posts.html',
  <script type="text/ng-template" id="/posts.html">

  <!-- post template -->

  <form ng-submit="addComment()"
    style="margin-top:30px;">
    <h3>Add a new comment</h3>

    <div class="form-group">
      <input type="text"
      class="form-control"
      placeholder="Comment"
      ng-model="body"></input>
    </div>
    <button type="submit" class="btn btn-primary">Post</button>
  </form>
</script>

  controller: 'PostsCtrl'
});
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);
app.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){

}]);
$scope.posts.push({
  title: $scope.title,
  link: $scope.link,
  upvotes: 0,
  comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]
});
$scope.addComment = function(){
  if($scope.body === '') { return; }
  $scope.post.comments.push({
    body: $scope.body,
    author: 'user',
    upvotes: 0
  });
  $scope.body = '';
};
