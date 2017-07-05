function getFirstSelector(selector){
  //const firstElement = document.querySelector(selector)
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var rankList = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < rankList.length; i++) {
  rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + n
}
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}
