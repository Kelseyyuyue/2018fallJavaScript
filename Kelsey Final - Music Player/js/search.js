(function musicDB()
 {
  this.init = function()
  {

    this.search();
  };

  /* Grab form, get input interact with database */
  this.search = function()
  {
    const form = document.querySelector("#form");

    form.addEventListener("submit",function(e)
                          {
      e.preventDefault();//prevent form from resetting the page
      //grab actual input to get value
      const value = document.querySelector("#input_search").value;

      form.reset(); //reset the form after we grab the value

      getData(value.split(' ').join("+"));

    });
  };//end search

  /*
Create a HTTP request
*/
  this.getData = function(artist)
  {
    const http = new XMLHttpRequest();
    artist = artist.toString();
    const url = "https://itunes.apple.com/search?term="+artist+"&entity=album";
    const method = "GET";

    //clear album container everytime
   const container = document.querySelector('#album_list_container');
    container.innerHTML = '';

    http.open(method,url); //open a request

    http.onreadystatechange = function()
    {
      if(http.readyState = 4 && http.status == 200 )
      {
        console.log("SUCCESS - connected to itunes API");

        showArtist(JSON.parse(http.responseText));
      }
      else if(http.readyState == XMLHttpRequest.DONE && http.status != 200)
      {
        console.log("ERROR - connecting to Itunes API")
      }
    }
    http.send();
  }; //end getdata




  this.showArtist=function(obj)
  {
    console.log(obj);
    //grab container to host this
    let container = document.querySelector("#album_list_container");
    let template = '';
    document.querySelector('#not_match').style.display="none";
    if(obj.results.length > 0)
    {

      //there are albums
      //loop through object results array and create the template
      for(let i = 0; i< obj.results.length; i++)
      {
        template += '<div class = "col-sm-3 album_item">';

        template += '<div class = "item_thmb" style = "background: url('+obj.results[i].artworkUrl100+')"></div>';

        template += '<div class = "item_title"> '+obj.results[i].collectionName+'</div>';


        template += '<div class = "item_price">';

        template +='<span>Price:</span> '+obj.results[i].collectionPrice+' </div>';

        template +='<a href = '+obj.results[i].collectionViewUrl+' target = "_blank"> View </a>';



        // template +='<a href = "purchase.html"> Check out </a>';

        template +='</div>';

      }
      container.innerHTML = '';
      container.insertAdjacentHTML('afterbegin',template);
    }
    else
    {
      //no albums
      document.querySelector('#not_match').style.display="block";
      //alert("No albums");
    }


  }; //end showArtist

 


  this.init();
}
)();



