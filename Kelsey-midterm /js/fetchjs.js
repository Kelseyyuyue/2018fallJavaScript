// $(function(){
//   $('#ghsubmitbtn').on('click', function(e){
//     e.preventDefault();



function ghsubmitbtn() {   
    var username = document.getElementById("ghusername").value;
    // var username = ghusername.value;
    var requri   = 'https://api.github.com/users/'+username;
    var repouri  = 'https://api.github.com/users/'+username+'/repos';


    fetch(requri)
      .then(function(response) {
        // console.log(`status: ${response.status}`);
        // console.dir(response.body);
        return response.json() // the important line 
      })
      .then(function(myJson) {
        var fullname = myJson.name;
        var username   = myJson.login;
        var aviurl     = myJson.avatar_url;
        var profileurl = myJson.html_url;
        var location   = myJson.location;
        var followersnum = myJson.followers;
        var followingnum = myJson.following;
        var reposnum     = myJson.public_repos;
        var outhtml = '<h2>'+fullname+' <span class="smallname">(@<a href="'+profileurl+'" target="_blank">'+username+'</a>)</span></h2>';
        outhtml = outhtml + '<div class="ghcontent"><div class="avi"><a href="'+profileurl+'" target="_blank"><img src="'+aviurl+'" width="80" height="80" alt="'+username+'"></a></div>';
        outhtml = outhtml + '<p>Followers: '+followersnum+' - Following: '+followingnum+'<br>Repos: '+reposnum+'</p></div>';
        outhtml = outhtml + '<div class="repolist clearfix">';
        ;


        // repo_outhtml = repo(repouri,outhtml);

        // outhtml = outhtml  + repo_outhtmll
        document.getElementById('ghapidata').innerHTML = outhtml;
      })
      .then(console.log);

      
    // function repo(repouri,outhtml){
    //   fetch(repouri)
    //         .then(function(repo_response) {
    //         return repo_response.json()
    //       })
    //         .then(function(repo_myJson){
    //           repositories = repo_myJson;
    //           var repo_outhtml = outhtml
    //           if(repositories.length == 0) { repo_outhtml = repo_outhtml + '<p>No repos!</p></div>'; }
    //         else {
    //            repo_outhtml = repo_outhtml + '<p><strong>Repos List:</strong></p> <ul>';
    //         //   repositories.forEach(function (repo) {
    //         //     outhtml = outhtml + '<li><a href="'+repo.html_url+'" target="_blank">'+repo.name + '</a></li>';
    //         // });
    //          for(var i=0; i < repositories.length; i++) {
    //             repo_outhtml = repo_outhtml + '<li><a href="'+repositories[i].html_url+'" target="_blank">'+repositories[i].name + '</a></li>';
    //           }
    //             repo_outhtml = repo_outhtml + '</ul></div>'; 
    //         }
    //         ;
    //         })
    //         .then(console.log);          
    //         return repo_outhtml;
    //   }
}
 
//   }); // end click event handler
  
// });