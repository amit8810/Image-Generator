let btn = document.getElementById('btn');
btn.addEventListener("click",()=>{

    let screen= document.getElementById('screen');
    let image = document.getElementById('image');

    // when image not present in out database
    let checker = false;

    // when search bar is empty 
    if(screen.value === '' || screen.value === ' '){
        alert("Please enter the input");
        checker = true;
    }

    // array with image path
    const arr1 = ['/img/apple.jpg', '/img/banana.jpg','/img/strawberry.jpg','/img/watermelon.jpg'];
    // array with image name 
    const arr2 = ['apple','banana','strawberry','watermelon'];
    
    // checking image in the array 
    for(let i=0; i<4; i++){

        if(screen.value === arr2[i]){
            image.src = arr1[i]; 
            checker = true;  
            break;
        }
    }

    // not found 
    if(checker === false){
        alert("Sorry!! image not found in our database")
    }

});