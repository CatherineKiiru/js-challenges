/* Synchronous JavaScript
function concatenate(first, last) {
    var full;
    full = first + last;
    return full;
}
function secondFunction(){
    var result;
    result = concatenate('Catherine', 'Kiiru')
    document.write(result);

};

/*

//Callbacks

let items = {
    Vegetables : ["onions", "tomatoes", "potatoes", "garlic"],
    Spices : ["cumin", "pepper", "tumeric"],
    Supermarket : ["oil", "salt", 'sugar'],
  };
  
  let recipe = (get_ingredients) => {
    get_ingredients ();
  };
  
  let preparation = () => {
    // recipe(preparation); */

   //Async/ Await

   /* 
    let items = {
      Vegetables : ["onions", "tomatoes", "potatoes", "garlic"],
      Spices : ["cumin", "pepper", "tumeric"],
      Supermarket : ["oil", "salt", 'sugar'],
    };
    
    */
    
    let food = true; 
    
    
    let items = () => {
      return new Promise( (resolve, reject)=>{ //this returns new promise
        if(true){
          resolve()
        };
        else {
          reject()
        };
      });
    };
    
    items()
    .then()
    .then()
    .then()
    .catch()
    .finally()

    /*
    async function items (){
      try {
        await abc;
      } catch (error) {
        console.log("abc does not exist", error)
      } finally {
        console.log ("runs code anyway")
      };
    };
    
    items();

    /* "abc does not exist" // [object Error] 
{}
"runs code anyway" */