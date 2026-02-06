window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
function findLMSAPI(win) {
// look in this window
if (win.hasOwnProperty("GetStudentID")) return win;
// all done if no parent
else if (win.parent == win) return null;
// climb up to parent window & look there
else return findLMSAPI(win.parent);
}
var lmsAPI = findLMSAPI(this);
var myName = lmsAPI.GetStudentName();
var array = myName.split(',');
//var lastName = array[0];
//player.SetVar("lastName", lastName);
var firstName = array[1];
player.SetVar("NameEntry", firstName);
}

window.Script2 = function()
{
  var player = GetPlayer();
function findLMSAPI(win) {
// look in this window
if (win.hasOwnProperty("GetStudentID")) return win;
// all done if no parent
else if (win.parent == win) return null;
// climb up to parent window & look there
else return findLMSAPI(win.parent);
}
var lmsAPI = findLMSAPI(this);
var myName = lmsAPI.GetStudentName();
var array = myName.split(',');
//var lastName = array[0];
//player.SetVar("lastName", lastName);
var firstName = array[1];
player.SetVar("NameEntry", firstName);
}

};
