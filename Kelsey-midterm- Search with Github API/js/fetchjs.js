
document.getElementById("button").onclick = function() {ghsubmitbtn()};


function ghsubmitbtn() {  

    //Create variables for the input content
    let username = document.getElementById("ghusername").value;


    // API request
    let requri   = 'https://api.github.com/users/'+username;


   //get response from the API
    fetch(requri)
      .then(function(response) {
     

     //Return json file
        return response.json() // the important line 
      })

    //Parse json file
      .then(function(myJson) {
        let fullname = myJson.name;
        let username   = myJson.login;
        let aviurl     = myJson.avatar_url;
        let profileurl = myJson.html_url;
        let location   = myJson.location;
        let followersnum = myJson.followers;
        let followingnum = myJson.following;
        let reposnum     = myJson.public_repos;



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
 