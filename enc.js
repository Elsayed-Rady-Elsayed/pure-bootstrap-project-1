document.getElementById("menu").onclick = function () {
  if (document.getElementById("smallScreenHeadder").style.display == "block") {
    document.getElementById("smallScreenHeadder").style.display = "none";
  } else {
    document.getElementById("smallScreenHeadder").style.display = "block";
  }
};
