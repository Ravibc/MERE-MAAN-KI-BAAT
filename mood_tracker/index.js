
const moodInput = document.getElementById("cars");
const addButton = document.getElementById("submit");
const moodList = document.querySelector(".mood-list");


addButton.addEventListener("click", addMood);

function addMood(event){
    console.log('clicked');
    event.preventDefault();

    const boxLi = document.createElement("li");
    boxLi.classList.add("boxes");
    const newMood = document.createElement("div");
    newMood.classList.add("mood");
    newMood.innerHTML=moodInput.value;
    const moodText = document.createElement("div");
    moodText.classList.add("styled");
    if(moodInput.value==="cheerful"){
        moodText.innerHTML = "Cheerfulness is a multiplier, so with your cheerful spirit spread joy far and wide..."
    }
    if(moodInput.value==="grumpy"){
        newMood.style.color = "rgb(185, 183, 16)";
        moodText.innerHTML = "Holding onto anger is like grasping a hot cold. With the intent of throwing it at someone else , you are the one who gets burnt..."
    }
    if(moodInput.value==="mood"){
        moodText.innerHTML = "Learn to calm down the winds of your mind, and you'll enjoy great inner peace..."
    }
    if(moodInput.value==="annoyed"){
        newMood.style.color = "rgb(27, 233, 27)";
        moodText.innerHTML = "Not every problem is worth stressing over,so take a deep breath and start afresh..."
    }
    if(moodInput.value==="emotional"){
        moodText.innerHTML = "It's okay to feel what you're feeling, there's a dark cloud covering the great sun you are, after it lifts you'll be shining... "
    }
    if(moodInput.value==="depressed"){
        moodText.innerHTML = "Once you accept your limits, you can't go beyond. So, keep pushing youself to the fullest..."
    }
    if(moodInput.value==="gloomy"){
        moodText.innerHTML = "In the middle of difficulties lie oppurtunities, work your way to a better future..."
    }
    boxLi.appendChild(newMood);
    boxLi.appendChild(moodText);
    if(moodInput.value!==""){ 
        moodList.appendChild(boxLi);
    }
}

