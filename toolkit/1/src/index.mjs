import { Application, Graphics } from 'pixi.js';

(async () => {
  const app = new Application();

  await app.init({
    width: 852,
    height: 652,
    backgroundColor: 0x1069cd,
    antialias: true
  });

  document.body.style.margin = '0';
  document.body.appendChild(app.canvas);

  const rectangle = new Graphics()
    .rect(-100, -50, 200, 100)
    .fill(0xffcc00)
    .stroke({
      width: 4,
      color: 0x000000
    });

  rectangle.x = app.screen.width / 2;
  rectangle.y = app.screen.height / 2;

  app.stage.addChild(rectangle);

  app.ticker.add((ticker) => {
    rectangle.rotation += 0.03 * ticker.deltaTime;
  });
})();