
function ghsubmitbtn() {   
    //Create variables equals to the input content
    var username = document.getElementById("ghusername").value;


    // API request
    var requri   = 'https://api.github.com/users/'+username;


   //get response from the API
    fetch(requri)
      .then(function(response) {
     

     //Return json file
        return response.json() // the important line 
      })

    //Parse json file
      .then(function(myJson) {
        var fullname = myJson.name;
        var username   = myJson.login;
        var aviurl     = myJson.avatar_url;
        var profileurl = myJson.html_url;
        var location   = myJson.location;
        var followersnum = myJson.followers;
        var followingnum = myJson.following;
        var reposnum     = myJson.public_repos;

        //output 
        var outhtml = '<h2>'+fullname+' <span class="smallname">(@<a href="'+profileurl+'" target="_blank">'+username+'</a>)</span></h2>';
        outhtml = outhtml + '<div class="ghcontent"><div class="avi"><a href="'+profileurl+'" target="_blank"><img src="'+aviurl+'" width="80" height="80" alt="'+username+'"></a></div>';
        outhtml = outhtml + '<p>Followers: '+followersnum+' - Following: '+followingnum+'<br>Repos: '+reposnum+'</p></div>';
        outhtml = outhtml + '<div class="repolist clearfix">';
        ;

    //return data to html
        document.getElementById('ghapidata').innerHTML = outhtml;
      })
      .then(console.log);

}
 