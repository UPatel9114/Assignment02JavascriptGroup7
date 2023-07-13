// Students:
//  1]Vilas Desai  -  200522471
//  2]Udaykumar Patel  -  200522548	
//  3]Bishnu Bohora  -  200519767

window.onload = function() {
    // Array created for the Large Images and adding in the filename and captions for each large image.
    var imageList = [
      {
        filename: "flowers-pink",
        caption: "The beauty of A Shropshire Lad English Rose earned it the 2012 Award of Garden Merit of the Royal Horticultural Society."
      },
      {
        filename: "flowers-purple",
        caption: "The allium genus includes some familiar names like garlic, chives, and onions."
      },
      {
        filename: "flowers-red",
        caption: "Amaryllis is the only genus in the subtribe Amaryllidinae. It is a small genus of flowering bulbs, with two species. "
      },
      {
        filename: "flowers-white",
        caption: "Magnolia is a large genus of about 210 to 340 flowering plant species in the subfamily Magnolioideae of the family Magnoliaceae. It is named after the French botanist Pierre Magnol."
      },
      {
        filename: "flowers-yellow",
        caption: "The common sunflower is a large annual forb of the genus Helianthus. It is commonly grown as a crop for its edible oily seeds."
      }
    ];
    //Function created for the purposee that when smaller image get clicked on and to load the Larger image accordingly.
    function thumbnail() {
      var thumbnailData = document.getElementById("small-image");
      thumbnailData.innerHTML = ""; // for clearing the existing array.
      imageList.forEach(function(image) {
        var list1 = document.createElement("li"); //Variable list1
        var list2 = document.createElement("img"); //Variable list2
        list2.src = "images/" + image.filename + "-small.jpg"; //Putting the path for the smaller images
        list2.alt = image.caption;
        list2.width = 240; //Setting the width
        list2.height = 160; //Setting the height
        // addEventListener to view the Larger sized image when the smaller one gets clicked on.
        list2.addEventListener("click", function() {
          var imageView = document.querySelector("#gallery figure img");
          imageView.src = "images/" + image.filename + "-large.jpg"; //Putting the path for the larger images
          imageView.alt = image.caption;
          document.querySelector("#gallery figure figcaption").textContent = image.caption;
        });
        list1.appendChild(list2);  // appends the list2 data to list1 data.
        thumbnailData.appendChild(list1); // updates the list1 to the thumbnailData.
      });
    }
    thumbnail(); //Calling the thumbnail function.
  };
  