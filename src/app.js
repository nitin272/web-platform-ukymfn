// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF = -1000000;

function createPop(givenArray, item) {

  // Progression 2: add 3 variables: title, currIndex, check
  const title = document.createElement('h3');
  let currIndex = NEG_INF;
  let check = false;

  // Progression 3: create a function "find" (inside createPop function only).
  function find(array, givenItem){
    array.forEach((element,index) => {
      if(element==givenItem){
        currIndex=index;
        check = true;
      }
    });

  }

  // Progression 4: return a function (can be anonymous).
  return function(){

    find(givenArray,item);
    let index = currIndex;
    let isPresent = check;

    if(isPresent){
      document.getElementById('root').append(title);
      title.innerHTML+=`The item is present and is at index ${index}`;
      return console.log(`The item is present and is at index ${index}`);
    }
    else{
      document.getElementById('root').append(title);
      title.innerHTML+=`The item is not present and is at index ${index}`;
      return console.log(`The item is not present, so your index is ${index}`);
    }

  };
}

const arrayOfNumbers = [1,2,3,4,5,6];
const itemToSearch = 9;
const pop = createPop(arrayOfNumbers,itemToSearch);
pop();

