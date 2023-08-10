// Global Variables
var global_path = [], fileInfo, narrative, pageNarrative, lastUpdate;

// Make the map draggable
$('#draggableMap').draggable();

//------------------------------ Event listeners ------------------------------
// settings button click event
let settingsBtn = document.querySelector('#settingsBtn');
settingsBtn.addEventListener('click', function () {
  // hide information section
  let infoSection = document.querySelector('#information');
  let infoBtn = document.querySelector('#infoBtn');
  if (infoSection.classList.contains('show')) {
    infoSection.classList.toggle('show');
    infoBtn.classList.toggle('show');
  }

  // hide the search element
  let fileSearch = document.querySelector('#fileSearch');
  let searchBtn = document.querySelector('#searchBtn');
  if (fileSearch.classList.contains('show')) {
    fileSearch.classList.toggle('show');
    searchBtn.classList.toggle('show');
  }

  // toggle the settings section
  let settingsSection = document.querySelector('#settings');
  settingsSection.classList.toggle('show');

  //toggle the settings button
  settingsBtn.classList.toggle('show');
});

// information button click event
let infoBtn = document.querySelector('#infoBtn');
infoBtn.addEventListener('click', function () {
  // hide the settings section
  let settingsSection = document.querySelector('#settings');
  let settingsBtn = document.querySelector('#settingsBtn');
  if (settingsSection.classList.contains('show')) {
    settingsSection.classList.toggle('show');
    settingsBtn.classList.toggle('show');
  }

  // hide the search element
  let fileSearch = document.querySelector('#fileSearch');
  let searchBtn = document.querySelector('#searchBtn');
  if (fileSearch.classList.contains('show')) {
    fileSearch.classList.toggle('show');
    searchBtn.classList.toggle('show');
  }

  // toggle information section
  let infoSection = document.querySelector('#information');
  infoSection.classList.toggle('show');

  // toggle the information button
  infoBtn.classList.toggle('show');
});

// search button click event
let searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', function () {
  // show the file list
  let fileList = document.querySelector('#fileList');
  let fileListBtn = document.querySelector('#fileListBtn');
  if (fileList.classList.contains('hide')) {
    fileList.classList.toggle('hide');
    fileListBtn.classList.toggle('hide');
  }

  // hide the settings section
  let settingsSection = document.querySelector('#settings');
  let settingsBtn = document.querySelector('#settingsBtn');
  if (settingsSection.classList.contains('show')) {
    settingsSection.classList.toggle('show');
    settingsBtn.classList.toggle('show');
  }

  // hide the information section
  let infoSection = document.querySelector('#information');
  let infoBtn = document.querySelector('#infoBtn');
  if (infoSection.classList.contains('show')) {
    infoSection.classList.toggle('show');
    infoBtn.classList.toggle('show');
  }

  // toggle search element
  let fileSearch = document.querySelector('#fileSearch');
  fileSearch.classList.toggle('show');

  // toggle the search button
  searchBtn.classList.toggle('show');
});

// file list button click event
let fileListBtn = document.querySelector('#fileListBtn');
fileListBtn.addEventListener('click', function () {
  // hide the search element
  let fileSearch = document.querySelector('#fileSearch');
  if (fileSearch.classList.contains('show')) {
    fileSearch.classList.toggle('show');
  }

  // hide the search button
  let searchBtn = document.querySelector('#searchBtn');
  if (searchBtn.classList.contains('show')) {
    searchBtn.classList.toggle('show');
  }

  // toggle file list element
  let fileList = document.querySelector('#fileList');
  fileList.classList.toggle('hide');

  // toggle the button
  fileListBtn.classList.toggle('hide');
});

// file list item process button click event
let fileListItemBottomProcessBtn = document.querySelectorAll('.fileListItemBottomProcessBtn button');
for (let i = 0; i < fileListItemBottomProcessBtn.length; i++) {
  fileListItemBottomProcessBtn[i].addEventListener('click', function (e) {
    e.currentTarget.firstElementChild.classList.toggle('open');
    e.currentTarget.parentElement.nextSibling.nextSibling.classList.toggle('open');
  });
}

// file list item object button click event
let fileListItemBottomObjectBtn = document.querySelectorAll('.fileListItemBottomObjectBtn button');
for (let i = 0; i < fileListItemBottomObjectBtn.length; i++) {
  fileListItemBottomObjectBtn[i].addEventListener('click', function (e) {
    e.currentTarget.firstElementChild.classList.toggle('open');
    e.currentTarget.parentElement.nextSibling.nextSibling.classList.toggle('open');
  });
}

// file list item button right click event
let fileListItemTopBtnRight = document.querySelectorAll('.fileListItemTopBtnRight');
for (let i = 0; i < fileListItemTopBtnRight.length; i++) {
  fileListItemTopBtnRight[i].addEventListener('click', function (e) {
    e.currentTarget.firstElementChild.classList.toggle('open');
    e.currentTarget.parentElement.parentElement.lastElementChild.classList.toggle('open');
  });
}

// file list item button left click event
let fileListItemTopBtnLeft = document.querySelectorAll('.fileListItemTopBtnLeft');
for (let i = 0; i < fileListItemTopBtnLeft.length; i++) {
  fileListItemTopBtnLeft[i].addEventListener('click', function (e) {
    let itemList = e.currentTarget.parentElement.parentElement.parentElement.querySelectorAll('.fileListItem');
    for (let j = 0; j < itemList.length; j++) {
      itemList[j].classList.remove('show');
    }
    e.currentTarget.parentElement.parentElement.classList.toggle('show');

    // get the json data
    let data = e.currentTarget.dataset.json;
    let jsonData = JSON.parse(data);

    // get the process narrative
    narrative = e.currentTarget.parentElement.parentElement.querySelector('.fileListItemBottomProcessList').dataset.narrative;

    // get the file info
    fileInfo = JSON.parse(e.currentTarget.parentElement.parentElement.dataset.info);

    // get last update
    lastUpdate = e.currentTarget.parentElement.parentElement.dataset.lastupdate;

    drawPage(jsonData);
  });
}

// file list item bottom button click event
let fileListItemBottomPage = document.querySelectorAll('.fileListItemBottomPage');
for (let i = 0; i < fileListItemBottomPage.length; i++) {
  fileListItemBottomPage[i].addEventListener('click', function (e) {
    let itemList = e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.fileListItem');
    for (let j = 0; j < itemList.length; j++) {
      itemList[j].classList.remove('show');
    }
    e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle('show');

    // get the json data
    let data = e.currentTarget.dataset.json;
    let jsonData = JSON.parse(data);

    // get the process narrative
    narrative = e.currentTarget.parentElement.parentElement.dataset.narrative;

    // get the file info
    fileInfo = JSON.parse(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.info);

    // get last update
    lastUpdate = e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.lastupdate;

    drawPage(jsonData);
  });
}

// update XML button click event
let settingsUpdateXmlBtn = document.querySelector('#settingsUpdateXmlBtn');
settingsUpdateXmlBtn.addEventListener('click', function () {
  fetch(window.location.href + 'database/xmlTableUpdate')
    .then(response => response.json())
    .then(data => { alert(data) })
    .catch(error => { alert(error.detail) });
});

// update JSON button click event
let settingsUpdateJsonBtn = document.querySelector('#settingsUpdateJsonBtn');
settingsUpdateJsonBtn.addEventListener('click', function () {
  fetch(window.location.href + 'database/jsonTableUpdate')
    .then(response => response.json())
    .then(data => { alert(data) })
    .catch(error => { alert(error.detail) });
});

// file list item button left click event
let stageInfoBtn = document.querySelectorAll('.stageInfoTop button');
for (let i = 0; i < stageInfoBtn.length; i++) {
  stageInfoBtn[i].addEventListener('click', function (e) {
    e.currentTarget.parentElement.parentElement.lastElementChild.classList.toggle('open');
  });
}

// map click event
let map = document.querySelector('#map');
map.addEventListener('mousedown', function () {
  // hide the search element
  let fileSearch = document.querySelector('#fileSearch');
  if (fileSearch.classList.contains('show')) {
    fileSearch.classList.toggle('show');
  }

  // hide the search button
  let searchBtn = document.querySelector('#searchBtn');
  if (searchBtn.classList.contains('show')) {
    searchBtn.classList.toggle('show');
  }

  // hide file list element
  let fileList = document.querySelector('#fileList');
  if (!fileList.classList.contains('hide')) {
    fileList.classList.toggle('hide');
  }

  // hide file list the button
  let fileListBtn = document.querySelector('#fileListBtn');
  if (!fileListBtn.classList.contains('hide')) {
    fileListBtn.classList.toggle('hide');
  }
});

//------------------------------ Loaders ------------------------------
function pageLoaded() {
  let loader = document.querySelector('#pageLoader');
  loader.style.display = 'none';
}

function mapLoaded() {
  let loader = document.querySelector('#mapLoader');
  loader.style.display = 'none';
}

//------------------------------ Draw Page ------------------------------
function drawPage(page){

  // editPath();
  emptyPage();

  for (let stage of page.stagelist){
    switch(stage.type){
      case 'Block':
        drawBlock(stage);
        break;
      case 'ProcessInfo':
        drawProcessInfo(stage);
        break;
      case 'SubSheetInfo':
        drawSubsheetInfo(stage);
        break;
      case 'Collection':
        drawCollection(stage);
        break;
      default:
        drawStage(stage);
        break;
    }
  }

  //resizePage();
  //scrollIntoView();
  drawAllLines();

  drawChoices();
  //drawChoiceLines();
}

//------------------------------ Create Stages ------------------------------
/*
  functions the create different types of stages
*/
function drawStage(stage){
  let parent = document.createElement('div');

  parent.setAttribute('class', 'stage');
  parent.setAttribute('id', stage.id);
  parent.setAttribute('onsuccess', stage.onsuccess);
  parent.setAttribute('ontrue', stage.ontrue);
  parent.setAttribute('onfalse', stage.onfalse);
  parent.setAttribute('stagetype', stage.type);

  parent.style.left = stage.x + 'px';
  parent.style.top = stage.y + 'px';
  parent.style.color = stage.fontcolor;
  parent.style.fontSize = stage.fontsize + 'px';
  parent.style.width = stage.w + 'px';
  parent.style.height = stage.h + 'px';

  if (stage.w !== null && stage.h !== null){
  }

  if (stage.type !== 'Anchor' && stage.type !== 'Note'){
    let p = document.createElement('p');
    p.innerText = stage.name;
    parent.appendChild(p);
    parent.appendChild(createHoverElement(stage));
  }
  if (stage.type === 'Note'){
    let p = document.createElement('p');
    p.innerText = stage.narrative;
    parent.appendChild(p);
  }
  if (stage.type === 'ChoiceStart'){
    parent.setAttribute('data-json', JSON.stringify(stage.choices));
    parent.setAttribute('groupid', stage.groupid);
  }
  if (stage.type === 'ChoiceEnd'){
    parent.setAttribute('groupid', stage.groupid);
  }

  document.getElementById('mapCenter').appendChild(parent);
}

function drawBlock(stage){
  let element, p;

  p = $('<p>');
  p.attr({
    'class' : 'blockLabel',
    'stagetype' : 'BlockLabel',
  }).css({
    'left' : stage.x,
    'top' : stage.y,
    'color' : stage.font_color,
    'font-size' : stage.fontsize,
  }).append(stage.name);

  element = $('<div>');
  element.attr({
    'class' : 'stage',
    'id' : stage.id,
    'onsuccess' : stage.onsuccess,
    'stagetype' : stage.type,
  }).css({
    'left' : stage.x,
    'top' : stage.y,
    'width' : stage.w,
    'height' : stage.h,
  });
  $('#mapCenter').append(element);
  $('#mapCenter').append(p);
}

function drawProcessInfo(stage){
  let element, p;
  element = $('<div>');
  element.attr({
    'class' : 'stage',
    'id' : stage.id,
    'onsuccess' : stage.onsuccess,
    'stagetype' : stage.type,
  }).css({
    'left' : stage.x,
    'top' : stage.y,
    'width' : stage.w,
    'height' : stage.h,
  });

  // name
  p = $('<p>');
  p.css({
    'border-bottom' : '1px solid black',
    'padding' : '0 2px',
  }).append(fileInfo.name);
  element.append(p);

  // narrative
  p = $('<p>');
  p.css({
    'border-bottom' : '1px solid black',
    'padding' : '0 2px',
  }).append(narrative);
  element.append(p);

  // user created by
  p = $('<p>');
  p.css({
    'border-bottom' : '1px solid black',
    'padding' : '0 2px',
  }).append('Created: ' + fileInfo.usercreatedby + ', at ' + fileInfo.created);
  element.append(p);

  // last update
  p = $('<p>');
  p.css({
    'border-bottom' : '1px solid black',
    'padding' : '0 2px',
  }).append('Last update: ' + lastUpdate);
  element.append(p);

  $('#mapCenter').append(element);
}

function drawSubsheetInfo(stage){
  let element, p, i, subsheet;
  element = $('<div>');

  // Set attributes and CSS properties of the element
  element.attr({
    'class': 'stage',
    'id': stage.id,
    'onsuccess': stage.onsuccess,
    'stagetype': stage.type,
  }).css({
    'left': stage.x,
    'top': stage.y,
    'width': stage.w,
    'height': stage.h,
  });

  // Create a <p> element to display the name
  p = $('<p>');
  p.css({
    'border-bottom': '1px solid black',
    'padding': '0 2px',
  }).append(stage.name);
  element.append(p);
  
  // Create a <p> element to display the narrative
  p = $('<p>');
  p.css({
    'border-bottom': '1px solid black',
    'padding': '0 2px',
  }).append(stage.narrative);
  element.append(p);

  // Append the element to the display center
  $('#mapCenter').append(element);
}

function drawCollection(stage){
  let element, p, child;

  p = $('<p>');
  p.append(stage.name);

  child = $('<div>');
  child.append(p);

  element = $('<div>');
  element.attr({
    'class' : 'stage',
    'id' : stage.id,
    'onsuccess' : stage.onsuccess,
    'stagetype' : stage.type,
  }).css({
    'left' : stage.x,
    'top' : stage.y,
    'width' : stage.w * 0.8,
    'height' : stage.h * 0.9,
  }).append(child);
  $('#mapCenter').append(element);
}

function drawChoices(){
  let i, path, point, parents, element, choices;
  parents = document.querySelectorAll('.stage[stagetype=ChoiceStart]');
  if (parents.length === 0){
    return
  }

  let svg = document.querySelector('svg');

  let center = {
    'x': $(svg).outerWidth() / 2,
    'y': $(svg).outerHeight() / 2,
  }

  parents.forEach(function(parent){
    path = svg.getElementById(parent.getAttribute('id'));

    choices = JSON.parse(parent.dataset.json);

    choices.forEach(choice => {
      point = {
        'x': path.getPointAtLength(choice.distance).x - center.x,
        'y': path.getPointAtLength(choice.distance).y - center.y,
      }

      // Create a new element for the choice
      element = $('<div>');
      element.attr({
        'name': choice.name,
        'id': choice.id,
        'class': 'stage',
        'ontrue': choice.ontrue,
        'stagetype': 'Choice',
        'title': 'Choice: ' + choice.name,
      }).css({
        'left': point.x,
        'top': point.y,
      });

      // Append the choice element to the display center
      $('#mapCenter').append(element);

    });

    drawChoiceLines();
  });
}

function createHoverElement(stage){
  let hover = document.createElement('div');
  hover.setAttribute('class', 'hover');
  let hoverInner = document.createElement('div');

  if(stage.onsuccess){
    let onsuccess = document.createElement('p');
    onsuccess.innerText = 'Onsuccess: ' + stage.onsuccess;
    hoverInner.appendChild(onsuccess);
  }

  if(stage.ontrue){
    let ontrue = document.createElement('p');
    ontrue.innerText = 'Ontrue: ' + stage.ontrue;
    hoverInner.appendChild(ontrue);
  }
  
  if(stage.onfalse){
    let onfalse = document.createElement('p');
    onfalse.innerText = 'Onfalse: ' + stage.onfalse;
    hoverInner.appendChild(onfalse);
  }
  
  if(stage.narrative){
    let narrative = document.createElement('p');
    narrative.innerText = 'Narrative: ' + stage.narrative;
    hoverInner.appendChild(narrative);
  }
  
  if(stage.datatype){
    let datatype = document.createElement('p');
    datatype.innerText = 'Datatype: ' + stage.datatype;
    hoverInner.appendChild(datatype);
  }
  
  if(stage.collectioninfo && stage.collectioninfo.length > 0){
    let collectioninfo = document.createElement('p');
    collectioninfo.innerHTML = 'Collection info: ';

    hoverInner.appendChild(collectioninfo);
  }
  
  if(stage.initialvalue && stage.initialvalue.length > 0){
    let initialvalue = document.createElement('p');
    initialvalue.innerHTML = 'Initial value: ';

    hoverInner.appendChild(initialvalue);
  }
  
  if(stage.inputs && stage.inputs.length > 0){
    let inputs = document.createElement('p');
    inputs.innerText = 'Inputs: ';
    hoverInner.appendChild(inputs);
  }
  
  if(stage.outputs && stage.outputs.length > 0){
    let outputs = document.createElement('p');
    outputs.innerText = 'Outputs: ';
    hoverInner.appendChild(outputs);
  }

  hover.appendChild(hoverInner);

  return(hover);
}

//------------------------------ Hover Element ------------------------------

//------------------------------ SVG ------------------------------
// Draw an SVG path from given start and end coordinates
function drawLine(x1, y1, x2, y2, arrow = true, id = null, onfalse = false) {
  let line, midX, midY;
  midX = (x1 + x2) / 2;
  midY = (y1 + y2) / 2;

  // Create an SVG path element using the createElementNS method
  line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  line.setAttribute('class', 'line');
  line.setAttribute('d', "M " + x1 + " " + y1 + " L " + midX + " " + midY + " L " + x2 + " " + y2);
  line.setAttribute('stroke', 'black');
  line.setAttribute('stroke-width', '1px');

  // Set attributes based on the provided arguments
  if (arrow === true) {
    line.setAttribute('marker-mid', 'url(#arrow)');
  }
  if (id !== null) {
    line.setAttribute('id', id);
  }
  if (onfalse === true) {
    line.setAttribute('stroke-dasharray', "5,5");
  }

  // Append the line to the SVG element in the document
  $('svg').append(line);

  // Return the line element
  return line;
}

// Draw lines for the choices
function drawChoiceLines() {
  let start, end, start_x, start_y, end_x, end_y, center_x, center_y;

  // Get the size of the SVG element
  center_x = $('svg').outerWidth() / 2;
  center_y = $('svg').outerHeight() / 2;

  // Iterate over each element with stage_type=Choice attribute
  $('[stagetype=Choice]').each((i, start_element) => {
    start = $(start_element);
    end = $('.stage').filter('[id=' + start.attr('ontrue') + ']');

    // Calculate the start and end coordinates relative to the SVG element
    start_x = start.position().left + start.outerWidth() / 2 + center_x;
    start_y = start.position().top + start.outerHeight() / 2 + center_y;
    end_x = end.position().left + end.outerWidth() / 2 + center_x;
    end_y = end.position().top + end.outerHeight() / 2 + center_y;

    // Call the draw_line function with the calculated coordinates
    drawLine(start_x, start_y, end_x, end_y);
  });
}

// Get the positions of all stages with onsucces and draw lines from start to end stage
function drawAllLines() {
  let svg = $('svg');

  // Remove all lines if remove_all is true, otherwise remove only unnamed lines
  svg.find('path').filter('.line').remove();

  // Get the size of the SVG element
  let center = {
    'x': svg.outerWidth() / 2,
    'y': svg.outerHeight() / 2,
  }

  // Iterate over each stage element
  $('.stage').each((i, start_element) => {
    let start = $(start_element);

    // Check if the stage has onsucces or ontrue or onfalse attribute
    if (
      start.attr('stagetype') !== 'ChoiceStart' && (
        start.attr('onsuccess') !== undefined ||
        start.attr('ontrue') !== undefined ||
        start.attr('onfalse') !== undefined
      )
    ) {
      // Iterate over each stage element again to find the end stage
      $('.stage').each((j, end_element) => {
        let end = $(end_element);

        // Check if the end stage ID matches the onsucces or ontrue or onfalse attribute of the start stage
        if (
          start.attr('onsuccess') === end.attr('id') ||
          start.attr('ontrue') === end.attr('id') ||
          start.attr('onfalse') === end.attr('id')
        ) {
          let onfalse = start.attr('onfalse') === end.attr('id') ? true : false;

          let start_coor = {
            'x': start.position().left + start.outerWidth() / 2 + center.x,
            'y': start.position().top + start.outerHeight() / 2 + center.y,
          }

          let end_coor = {
            'x': end.position().left + end.outerWidth() / 2 + center.x,
            'y': end.position().top + end.outerHeight() / 2 + center.y,
          }
          
          // Draw a line from the start stage to the end stage
          drawLine(start_coor.x, start_coor.y, end_coor.x, end_coor.y, true, null, onfalse);
        }
      });
    }
  });

  // Handle choice start/end paths
  $('.stage[stagetype=ChoiceStart]').each((i, start_element) => {
    let start = $(start_element);
    let end = $('.stage[stagetype=ChoiceEnd]').filter('[groupid=' + start.attr('groupid') + ']');
    if (end.length === 0){
      console.log('Choince end not found');
      return;
    }

    let start_coor = {
      'x': start.position().left + start.outerWidth() / 2 + center.x,
      'y': start.position().top + start.outerHeight() / 2 + center.y,
    }

    let end_coor = {
      'x': end.position().left + end.outerWidth() / 2 + center.x,
      'y': end.position().top + end.outerHeight() / 2 + center.y,
    }

    // Draw a line from the choice start stage to the choice end stage
    drawLine(start_coor.x, start_coor.y, end_coor.x, end_coor.y, false, start.attr('id'));
  });
}

//------------------------------ Other ------------------------------
function emptyPage(){
  let mapCenter = document.getElementById('mapCenter');
  mapCenter.innerHTML = '';
}
