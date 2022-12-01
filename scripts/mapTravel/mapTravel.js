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

    if (i == 0) {
      var nodeRepos = createNodeAlways();
      nodeRepos.className = "start";
      column1.appendChild(nodeRepos);
      container.appendChild(row);
      continue;
    }

    if (i == numberRows - 1) {
      var nodeRepos = createNodeAlways();
      nodeRepos.className = "end";
      column1.appendChild(nodeRepos);
      container.appendChild(row);
      continue;
    }

    if (i % 5 == 0) {
      var nodeRepos = createNodeAlways();
      nodeRepos.className = "repos";
      column1.appendChild(nodeRepos);
      container.appendChild(row);
      continue;
    }

    var node = createNode();
    if (node) {
      column.appendChild(node);
    }

    var node1 = createNode();
    if (node1) {
      column1.appendChild(node1);
    }

    var node2 = createNode();
    if (node2) {
      column2.appendChild(node2);
    }

    if (!node && !node1 && !node2) {
      var random = Math.random();
      if (random < 0.33) {
        column.appendChild(createNodeAlways());
      } else if (random < 0.66) {
        column1.appendChild(createNodeAlways());
      } else {
        column2.appendChild(createNodeAlways());
      }
    }

    container.appendChild(row);
  }
}

createMap();

function createNode() {
  var node = createNodeAlways();

  var random = Math.random();
  if (random < 0.43) {
    return node;
  }
  return null;
}

function createNodeAlways() {
  const node = document.createElement("div");
  var randomType = Math.random();
  if (randomType < 0.7) {
    node.className = "combat";
  } else {
    node.className = "evenement";
  }

  var randomTranslateY = Math.random();
  var randomTranslateX = Math.random();

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

function createLinkBetweenNodes() {
  const link = document.createElement("div");
  link.className = "link";
  return link;
}
