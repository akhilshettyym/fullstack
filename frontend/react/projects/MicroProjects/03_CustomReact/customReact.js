function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    // Handle children - support nested elements or text
    if (typeof reactElement.children === 'string') {
        domElement.textContent = reactElement.children;
    } else if (Array.isArray(reactElement.children)) {
        reactElement.children.forEach(child => {
            customRender(child, domElement);
        });
    }

    // Set props using a loop
    for (const prop in reactElement.props) {
        if (prop !== 'children') {
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.example.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);