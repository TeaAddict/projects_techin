const imageBorders = () => {
  const images = document.querySelectorAll("img");

  console.log(images);

  let state = false;
  const onClick = (e) => {
    state
      ? (e.target.style.border = "2px red solid")
      : (e.target.style.border = "none");
    state = !state;
  };

  images.forEach((image) => image.addEventListener("click", onClick));
};

const addIds = () => {
  const button = document.querySelector("button");
  button.setAttribute("id", "newButton");
  const buttonAtr = button.getAttribute("id");
  console.log(buttonAtr);
};
// addIds();

const onHoverChangeImg = () => {
  const images = document.querySelectorAll("img");
  const imgSrcs = [];

  const onImgEnter = (e, index) => {
    e.target.setAttribute("src", "src/images/four.jpg");
  };

  const onImgLeave = (e, index) => {
    e.target.setAttribute("src", imgSrcs[index]);
  };

  images.forEach((image, index) => {
    imgSrcs.push(image.getAttribute("src"));
    image.addEventListener("mouseenter", (e) => onImgEnter(e, index));
    image.addEventListener("mouseleave", (e) => onImgLeave(e, index));
  });
};
// onHoverChangeImg();

const creatingNewElement = () => {
  const newP = document.createElement("p");
  newP.textContent = "New P";
  const div1 = document.querySelector("#primaryDiv");
  div1.append(newP);
};
creatingNewElement();
