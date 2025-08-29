Hooks.on("ready", () => {
  game.socket.on("module.gold-distribution", data => {
    if (data.action === "floatingText") {
      canvas.interface.createScrollingText({ x: data.x, y: data.y }, {
        text: data.text,
        anchor: CONST.TEXT_ANCHOR_POINTS.CENTER,
        direction: CONST.SCREEN_TEXT_DIRECTIONS.UP
      });
    }
  });
});
