function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  // Set text content
  domElement.textContent = reactElement.children;

 
  // Set attributes if they exist
  if (reactElement.props) {
     for (const prop in reactElement.props) {
       domElement.setAttribute(prop, reactElement.props[prop]);
     }
    // if (reactElement.props.href) {
    //   domElement.setAttribute("href", reactElement.props.href);
    // }
    // if (reactElement.props.target) {
    //   domElement.setAttribute("target", reactElement.props.target);
    // }
  }

  // Append the element to the container
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://youtube.com",
    target: "_blank",
  },
  children: "Click me",
};

const mainContainer = document.querySelector("#app");

customRender(reactElement, mainContainer);
