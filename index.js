fetch("https://api.nasa.gov/planetary/apod?api_key=TRqSqJkWACHnr7cvb4V1Vg8tNGme2rU90ggrlirU")
.then(response => response.json())
.then(data => {
    console.log(data);
    document.getElementById("description").textContent = data.explanation;
    document.getElementById("title").textContent = data.title;

    if(data.media_type === "image"){
        document.getElementById("image").src = data.url;
        document.getElementById("image").style.display = "block";
    }else{
        document.getElementById("image").style.display = "none";
    }
});

try {
    
} catch (error) {
    
}(error => console.log("Erreur", error));