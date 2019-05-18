var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array,element) {
  var newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  return addElementToBeginningOfArray.unshift(element);
}

function addElementToEndOfArray(){

}

function destructivelyAddElementToEndOfArray() {

}
