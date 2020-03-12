function mapdata() {

  let nodes = [];
  let edges = [];
  let n = 3;

  // Write your logic here...
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

      nodes.push(
        {
          data: {
            id: `N${i}-${j}`
          }
        }
      );

      if (n - j - 1 > 0) {
        let obj = {
          data: {
            id: `${i}-${j}E`,
            source: `N${i}-${j}`,
            target: `N${i}-${j + 1}`
          }
        }
        edges.push(obj);

        // edges.push(
        //   {
        //     data: {
        //       id: `${i}-${j}E`,
        //       source: `N${i}-${j}`,
        //       target: `N${i}-${j + 1}`
        //     }
        //   }
        // );
      }

      if (j > 0) {
        edges.push(
          {
            data: {
              id: `${i}-${j}W`,
              source: `N${i}-${j}`,
              target: `N${i}-${j - 1}`
            }
          }
        );
      }

      if (n - i - 1 > 0) {
        edges.push(
          {
            data: {
              id: `${i}-${j}S`,
              source: `N${i}-${j}`,
              target: `N${i + 1}-${j}`
            }
          }
        );
      }

      if (i > 0) {
        edges.push(
          {
            data: {
              id: `${i}-${j}N`,
              source: `N${i}-${j}`,
              target: `N${i - 1}-${j}`
            }
          }
        );
      }

      if (n - i - 1 > 0 && n - j - 1 > 0) {
        edges.push(
          {
            data: {
              id: `${i}-${j}ES`,
              source: `N${i}-${j}`,
              target: `N${i + 1}-${j + 1}`
            }
          }
        );
      }

      if (i > 0 && j > 0) {
        edges.push(
          {
            data: {
              id: `${i}-${j}WN`,
              source: `N${i}-${j}`,
              target: `N${i - 1}-${j - 1}`
            }
          }
        );
      }

      if (i > 0 && n - j - 1 > 0) {
        edges.push(
          {
            data: {
              id: `${i}-${j}EN`,
              source: `N${i}-${j}`,
              target: `N${i - 1}-${j + 1}`
            }
          }
        );
      }

      if (j > 0 && n - i - 1 > 0) {
        edges.push(
          {
            data: {
              id: `${i}-${j}WS`,
              source: `N${i}-${j}`,
              target: `N${i + 1}-${j - 1}`
            }
          }
        );
      }

    }
  }

  console.log(nodes.length);
  console.log(edges.length);

  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;
