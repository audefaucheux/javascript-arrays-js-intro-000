var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array,element) {
  var newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  function addElementToBeginningOfArray() {
    return array.unshift(element)
  }
  function addElementToBeginningOfArray() {
    return [element, ...array]
  }
}

function addElementToEndOfArray(){

}

function destructivelyAddElementToEndOfArray() {

}
