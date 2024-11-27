import { useEffect, useRef } from "react";
import gsap from "gsap";

const PeepAnimation = () => {
  const canvasRef = useRef(null);
  const config = {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png",
    rows: 15,
    cols: 7,
  };

  const allPeeps = [];
  const availablePeeps = [];
  const crowd = [];
  const stage = { width: 0, height: 0 };

  const randomRange = (min, max) => min + Math.random() * (max - min);
  const randomIndex = (array) => Math.floor(randomRange(0, array.length));
  const removeFromArray = (array, i) => array.splice(i, 1)[0];
  const removeRandomFromArray = (array) =>
    removeFromArray(array, randomIndex(array));
  const getRandomFromArray = (array) => array[randomIndex(array)];

  const resetPeep = ({ stage, peep }) => {
    const direction = Math.random() > 0.5 ? 1 : -1;
    const offsetY = 100 - 250 * gsap.parseEase("power2.in")(Math.random());
    const startY = stage.height - peep.height + offsetY;
    let startX, endX;

    if (direction === 1) {
      startX = -peep.width;
      endX = stage.width;
      peep.scaleX = 1;
    } else {
      startX = stage.width + peep.width;
      endX = 0;
      peep.scaleX = -1;
    }

    peep.x = startX;
    peep.y = startY;
    peep.anchorY = startY;

    return { startX, startY, endX };
  };

  const normalWalk = ({ peep, props }) => {
    const { startX, startY, endX } = props;
    const xDuration = 10;
    const yDuration = 0.25;

    const tl = gsap.timeline();
    tl.timeScale(randomRange(0.5, 1.5));
    tl.to(peep, { duration: xDuration, x: endX, ease: "none" }, 0);
    tl.to(
      peep,
      {
        duration: yDuration,
        repeat: xDuration / yDuration,
        yoyo: true,
        y: startY - 10,
      },
      0
    );

    return tl;
  };

  const walks = [normalWalk];

  class Peep {
    constructor({ image, rect }) {
      this.image = image;
      this.setRect(rect);
      this.x = 0;
      this.y = 0;
      this.anchorY = 0;
      this.scaleX = 1;
      this.walk = null;
    }

    setRect(rect) {
      this.rect = rect;
      this.width = rect[2];
      this.height = rect[3];
      this.drawArgs = [this.image, ...rect, 0, 0, this.width, this.height];
    }

    render(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.scale(this.scaleX, 1);
      ctx.drawImage(...this.drawArgs);
      ctx.restore();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => init();
    img.src = config.src;

    const init = () => {
      createPeeps();
      resize();

      gsap.ticker.add(render);
      window.addEventListener("resize", resize);
    };

    const createPeeps = () => {
      const { rows, cols } = config;
      const { naturalWidth: width, naturalHeight: height } = img;
      const total = rows * cols;
      const rectWidth = width / rows;
      const rectHeight = height / cols;

      for (let i = 0; i < total; i++) {
        allPeeps.push(
          new Peep({
            image: img,
            rect: [
              (i % rows) * rectWidth,
              Math.floor(i / rows) * rectHeight,
              rectWidth,
              rectHeight,
            ],
          })
        );
      }
    };

    const resize = () => {
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      canvas.width = stage.width * window.devicePixelRatio;
      canvas.height = stage.height * window.devicePixelRatio;

      crowd.forEach((peep) => peep.walk.kill());
      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);

      initCrowd();
    };

    const initCrowd = () => {
      while (availablePeeps.length) {
        addPeepToCrowd().walk.progress(Math.random());
      }
    };

    const addPeepToCrowd = () => {
      const peep = removeRandomFromArray(availablePeeps);
      const walk = getRandomFromArray(walks)({
        peep,
        props: resetPeep({ peep, stage }),
      }).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep);
        addPeepToCrowd();
      });

      peep.walk = walk;
      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);

      return peep;
    };

    const removePeepFromCrowd = (peep) => {
      removeFromArray(crowd, crowd.indexOf(peep));
      availablePeeps.push(peep);
    };

    const render = () => {
      canvas.width = canvas.width;
      ctx.save();
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      crowd.forEach((peep) => peep.render(ctx));
      ctx.restore();
    };

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default PeepAnimation;
