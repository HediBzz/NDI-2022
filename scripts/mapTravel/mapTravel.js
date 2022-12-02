const container = document.getElementById("container");

function createMap() {
  var numberRows = 15;

  for (var i = 0; i < numberRows; i++) {
    const row = document.createElement("div");
    row.className = "row";

    const column = document.createElement("div");
    column.className = "column";
    const column1 = document.createElement("div");
    column1.className = "column";
    const column2 = document.createElement("div");
    column2.className = "column";

    row.appendChild(column);
    row.appendChild(column1);
    row.appendChild(column2);

    if (i == 0 || i == numberRows - 1) {
      var nodeRepos = createNodeAlways(i);
      nodeRepos.classList.add("center");
      column1.appendChild(nodeRepos);
      container.appendChild(row);
      continue;
    }

    if (i % 5 == 0) {
      var nodeRepos = createNodeAlways(i);
      column1.appendChild(nodeRepos);
      nodeRepos.classList.add("center");
      nodeRepos.classList.add(i);
      container.appendChild(row);
      continue;
    }

    var node = createNode(i);
    if (node) {
      column.appendChild(node);
      node.classList.add("left");
    }

    var node1 = createNode(i);
    if (node1) {
      column1.appendChild(node1);
      node1.classList.add("center");
    }

    var node2 = createNode(i);
    if (node2) {
      column2.appendChild(node2);
      node2.classList.add("right");
    }

    if (!node && !node1 && !node2) {
      var random = Math.random();
      if (random < 0.33) {
        var node = createNodeAlways(i);
        column.appendChild(node);
        node.classList.add("left");
      } else if (random < 0.66) {
        var node1 = createNodeAlways(i);
        column1.appendChild(node1);
        node1.classList.add("center");
      } else {
        var node2 = createNodeAlways(i);
        column2.appendChild(node2);
        node2.classList.add("right");
      }
    }

    container.appendChild(row);
  }
}

createMap();

function createNode(i) {
  var node = createNodeAlways(i);

  var random = Math.random();
  if (random < 0.43) {
    return node;
  }
  return null;
}

function createNodeAlways(i) {
  const node = document.createElement("div");
  const a = document.createElement("a");
  const img = document.createElement("img");

  node.className = i;

  a.appendChild(img);
  node.appendChild(a);

  if (i == 0) {
    node.classList.add("node");
    node.classList.add("start");
    img.src = "../assets/images/start.png";
    img.width = 50;
    img.height = 50;

    return node;
  }

  if (i == 14) {
    node.classList.add("node");
    node.classList.add("end");
    img.src = "../assets/images/start.png";
    img.width = 50;
    img.height = 50;

    return node;
  }

  if (i % 5 == 0) {
    node.classList.add("node");
    node.classList.add("repos");
    img.src = "../assets/images/repos.png";
    img.width = 50;
    img.height = 50;

    return node;
  }

  var randomType = Math.random();
  if (randomType < 0.7) {
    node.classList.add("node");
    node.classList.add("combat");
    a.href = "../views/arena.php";
    img.src = "../../assets/images/combat.png";
    img.width = 50;
    img.height = 50;
  } else {
    node.classList.add("node");
    node.classList.add("evenement");
    a.href = "../views/event.php";
    img.src = "../../assets/images/evenement.png";
    img.width = 50;
    img.height = 50;
  }

  var randomTranslateY = Math.random() * 0.4 + 0.25;
  var randomTranslateX = Math.random() * 0.4 + 0.25;

  var randomXPos = Math.random();
  if (randomXPos < 0.5) {
    randomTranslateX = -randomTranslateX;
  }
  var randomYPos = Math.random();
  if (randomYPos < 0.5) {
    randomTranslateY = -randomTranslateY;
  }

  if (randomTranslateY < 0.5) {
    node.style.transform =
      "translate(" +
      randomTranslateY * 60 +
      "px, " +
      randomTranslateX * 60 +
      "px)";
  } else {
    node.style.transform =
      "translate(" +
      randomTranslateY * 60 +
      "px, " +
      randomTranslateX * 60 +
      "px)";
  }

  return node;
}

function saveMap() {
  var allCombat = document.getElementsByClassName("combat");
  var allEvenement = document.getElementsByClassName("evenement");
  var allRepos = document.getElementsByClassName("repos");

  var url = "&";

  var rows = document.getElementsByClassName("row");
  for (var i = 0; i < rows.length; i++) {
    url += i + "=";
    var rowsChildren = rows[i].children;
    for (var j = 0; j < rowsChildren.length; j++) {
      var rowsChildrenChildren = rowsChildren[j].children;
      if (rowsChildrenChildren.length == 0) {
        url += "null";
      } else {
        url += rowsChildrenChildren
          .item(0)
          .className.split(".")[0]
          .split(" ")[2];
      }
      if (j != 2) url += ",";
    }
    if (i != rows.length - 1) url += "&";
  }

  console.log(url);

  window.location.href = "?page=mapTravel" + url;
}

// 0=combat,null,event
