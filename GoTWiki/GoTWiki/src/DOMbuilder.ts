
export function createHtmlElement(host: HTMLElement, element: string, className: string) {
    let childElement = document.createElement(element);
    childElement.className = className;
    host.appendChild(childElement);
    return <HTMLElement>childElement;
}

export function renderCheckBox(host: HTMLElement, checkBoxItem : string, checkBoxGroupName: string) {
    let checkBoxDiv = createHtmlElement(host,"div", "checkBoxDiv form-check");
    let checkBoxInput = <HTMLInputElement>createHtmlElement(checkBoxDiv,"input", "checkBoxInput form-check-input");
    checkBoxInput.type="checkbox";
    checkBoxInput.value=checkBoxItem;
    checkBoxInput.name=checkBoxGroupName;
    checkBoxInput.id=checkBoxItem+checkBoxGroupName;
    let checkBoxLabel = <HTMLLabelElement>createHtmlElement(checkBoxDiv,"label", "checkBoxLabel form-check-label");
    checkBoxLabel.setAttribute("for", checkBoxItem+checkBoxGroupName);
    checkBoxLabel.innerHTML= checkBoxItem;

}






