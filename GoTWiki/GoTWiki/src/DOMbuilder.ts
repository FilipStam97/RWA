
export function createHtmlElement(host: HTMLElement, element: string, className: string) {
    let childElement = document.createElement(element);
    childElement.className = className;
    host.appendChild(childElement);
    return <HTMLElement>childElement;
}








