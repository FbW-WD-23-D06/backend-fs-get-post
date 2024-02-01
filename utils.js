export const logEndPoints = (app, port) => {
    console.log("Available endpoints: \n");
    app._router.stack.forEach((r) => {
      if (r.route && r.route.path) {
        const url = `http://localhost:${port}${r.route.path}`;
        console.log(url);
      }
    });
  };
  