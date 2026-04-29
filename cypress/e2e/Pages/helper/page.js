require("cypress-xpath");

const addPrefixIfMissing = (value, prefix) => {
  if (typeof value !== "string") {
    return value;
  }
  return value.startsWith(prefix) ? value : `${prefix}${value}`;
};

export default class Page {
  /**
   * *Metodo que hace click en el elemento HTML(selector)indicado.
   * @param selector elemento HTML
   **/
  clickByElement(selector) {
    cy.get(selector).click();
  }

   /**
   * *Metodo que hace click en el elemento HTML(selector)indicado. Esto se utiliza cuando no se logra hacer el click correctamente en un elemento (Cuando se usa el click normal y la accción no se ejecuta)
   * @param selector elemento HTML
   **/
   inovokeClickByElement(selector) {
    cy.get(selector).invoke('click');
  }

   /**
   * *Metodo que hace doble click en el elemento HTML(selector)indicado.
   * @param selector elemento HTML
   **/
   doubleClickByElement(selector) {
    cy.get(selector).dblclick();
  }

  /**
   * *Metodo que hace click Force en el elemento HTML(selector)indicado.
   * @param selector elemento HTML
   **/
  clickByElementForce(selector) {
    cy.get(selector).click({ force: true });
  }

  /**
   * *Metodo que hace click en el elemento Xpath(selector)indicado. Esto se utiliza cuando no se logra hacer el click correctamente en un elemento (Cuando se usa el click normal y la accción no se ejecuta)
   * @param selector elemento HTML
   **/
  inovokeClickByXpath(selector) {
    cy.xpath(selector).invoke('click');
  }

  /**
   * *Metodo que hace click en el elemento Xpath(selector)indicado.
   * @param selector elemento HTML
   **/
  clickByXpathForce(selector) {
    cy.xpath(selector).click({ force: true });
  }

  /**
   * *Metodo que hace doble click en el elemento Xpath(selector)indicado.
   * @param selector elemento HTML
   **/
  dblclickByXpathForce(selector) {
    cy.xpath(selector).dblclick({ force: true });
  }

  /**
   * *Metodo que hace click en el elemento que contenga el texto indicado.
   * @param element elemento HTML
   * @param text texto a localizar dentro del elemento
   **/
  clickByElementContains(element, text) {
    cy.get(element).contains(text).click();
  }

  /**
   * *Este metodo hace click a un elemento que posea un LinkText
   * @param elementLink LinkText del elemento a clickear
   */
  clickByLinkText(elementLink) {
    return cy
      .contains("a", elementLink, { timeout: 10000, matchCase: false })
      .click();
  }

  /**
   * *Este metodo hace click a un elemento que posea un LinkText usando force: true
   * @param elementLink LinkText del elemento a clickear
   */
  forceClickByLinkText(elementLink) {
    return cy
      .contains("a", elementLink, { timeout: 10000, matchCase: false })
      .click({ force: true });
  }

  /**
   * *Este metodo hace doble click a un elemento que posea un LinkText
   * @param elementLink LinkText del elemento a clickear
   */
  doubleClickByLinkText(elementLink) {
    cy.contains("a", elementLink).dblclick();
  }

  /**
   * *Este metodo hace click a un elemento que posea un Text usando RegExp
   * @param element elemento a clickear
   */
  clickByTextRegExp(element, ms = 10000) {
    return cy
      .contains(new RegExp(`^${element}$`), { timeout: ms, matchCase: false })
      .click();
  }

  /**
   * *Este metodo hace click a un elemento que posea un LinkText
   * @param elementLink LinkText del elemento a clickear
   */
  clickByLinkExactMatchText(elementLink) {
    return cy
      .contains("a", new RegExp("^" + elementLink + "$", "g"), {
        timeout: 10000,
      })
      .click();
  }

  /**
   * *Doble click en una celda con un texto deseado
   * @param text texto de la celda a clickear
   */
  clickTDByText(text) {
    cy.get("td:contains(" + text + ")").dblclick();
  }

  /**
   * *Este metodo hace click a un elemento que posea un LinkText
   * @param elementLink LinkText del elemento a clickear
   */
  triggerClickByLinkTextChild(elementLink, parentQuery) {
    cy.get(parentQuery)
      .contains("a", elementLink)
      .then(($input) => {
        $input[0].click();
      });
  }

  /**
   * *Este metodo hace click a un elemento que posea un ButtonText
   * @param buttonText ButtonText del elemento a clickear
   */
  clickByButtonText(buttonText) {
    cy.contains("button", buttonText).should("be.visible").click();
  }

  /**
   * *Este metodo hace click a un elemento que posea un ButtonText
   * @param buttonText ButtonText del elemento a clickear
   */
  forceClickByButtonText(buttonText) {
    cy.contains("button", buttonText)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  /**
   * *Este metodo hace click a un elemento que posea un Css Selector
   * @param elementCss Css del elemento a clickear
   */
  clickByCss(elementCss) {
    cy.get(elementCss).first().click();
  }

  /**
   * *Este metodo hace click a un elemento que posea un ClassName
   * @param elementClassName ClassName del elemento a clickear
   */
  clickByClassName(elementClassName) {
    cy.get(elementClassName).should("be.visible").click();
  }

  /**
   * *Clickea un buton con un index
   * @param className ClassName del elemento a clickear
   * @param index Numero a clickear
   */
  clickByClassNameWithIndex(className, index) {
    cy.get(className).eq(index).click();
  }

  /**
   * *Doble click un buton con un index
   * @param className ClassName del elemento a clickear
   * @param index Numero a clickear
   */
  doubleClickByClassNameWithIndex(className, index) {
    cy.get(className).eq(index).dblclick();
  }

  /**
   * *Clickea un buton con un index y espera a que el mismo desaparezca
   * @param className ClassName del elemento a clickear
   * @param index Numero a clickear
   */
  clickToDeleteByClassNameWithIndex(className, index) {
    cy.get(className).eq(index).click().should("not.exist");
  }

  /**
   * *Clickea un buton con un index
   * @param query query selector de js
   * @param index Numero a clickear
   */
  clickByAnyQueryWithIndex(query, index) {
    cy.get(query).eq(index).click();
  }

  /**
   * *Click un buton con un index
   * @param linkText linkText del elemento a clickear
   * @param index Numero a clickear
   */
  clickByLinkTextWithIndex(linkText, index) {
    cy.get("a:contains(" + linkText + ")")
      .eq(index)
      .dblclick();
  }

  /**
   * *Click en un elemento de un framework
   * @param iframe es una ventana a otra página o sesión separada del DOM principal 
   * @param element elemento dentro del iframe al cual quiero acceder. 

   */
  clickByElementInIframe(iframe, element) {
    cy.get(iframe).its('0.contentDocument') //Accede al contentDocument del primer iframe encontrado (posición [0] del array que devuelve Cypress internamente).
    .its('body') //Accede al <body> de ese documento. Esto es necesario para poder buscar dentro del contenido cargado en el iframe.
    .find(element)
    .click();
  }

  /**
   * *Metodo que localiza el elemento HTML, hace click y luego escribe el texto indicado (text).
   * @param selector elemento HTML
   * @param text texto que se desea introducir
   **/
  type(selector, text) {
    cy.get(selector).click().type(text);
  }

  /**
   * *Metodo que localiza el elemento HTML, hace click, escribe el texto indicado (text) y luego hace enter
   * @param selector elemento HTML
   * @param text texto que se desea introducir
   **/
  typeAndEnter(selector, text) {
    cy.get(selector).click().type(`${text}{enter}`);
  }

  /**
   * *Metodo que localiza el elemento HTML, hace click, escribe el texto indicado (text)
   * @param selector elemento HTML
   * @param text texto que se desea introducir
   **/
  typeByXpath(selector, text) {
    cy.xpath(selector).click().type(text);
  }

  /**
   ** Presiona teclas sobre un elemento. Util para shortcuts
   * @param keys teclas a presionar
   * @param elementQuery query selector del elemento
   */
  typeKeys(keys, elementQuery = "body") {
    cy.get(elementQuery).type(keys);
  }

  /**
   * *Este metodo llena un input con el texto deseado
   * Se recomienda usar al ingresar textos largos
   * @param element elemento al que se le pasara un texto
   * @param text Texto a introducir
   */
  sendKeyByElement(element, text) {
    cy.get(element).clear().wait(3000).type(text, { delay: 75 }).wait(2000);
  }

   /**
   * *Este metodo llena un input con el texto deseado (Se modifica para ser usado con xpath)
   * Se recomienda usar al ingresar textos largos
   * @param element elemento al que se le pasara un texto
   * @param text Texto a introducir
   */
   sendKeyByXpath(element, text) {
    cy.xpath(element).clear().wait(3000).type(text, { delay: 75 }).wait(2000);
  }

  /**
   * *Este metodo llena un input con el texto deseado con delay y wait por parametro
   * Se recomienda usar al ingresar textos cortos
   * @param element elemento al que se le pasara un texto
   * @param text Texto a introducir
   */
  sendKeyByDelayWaitId(element, text, delay = 25, wait = 3000) {
    cy.get(element).clear().type(text, { delay: delay }).wait(wait);
  }

  /**
   * *Este metodo llena un input con el texto deseado sin retraso y sin simular la escritura paso a paso
   * @param element elemento al que se le pasara un texto
   * @param text Texto a introducir
   */
  forceTypesendKeyByElement(element, text) {
    cy.get(element).clear().type(text, { delay: 0, force: true });
  }

  /**
   * *Este metodo fuerza el llenado un input con el texto deseado
   * @param element elemento al que se le pasara un texto
   * @param text Texto a introducir
   */
  forceSendKeyWithoutClearByElement(element, text) {
    cy.get(element).scrollIntoView().type(text, { force: true });
  }

  /**
   * *Este metodo llena un input con el texto deseado
   * @param elementCss Css del elemento al que se le pasara un texto
   * @param text Texto a introducir
   */
  sendKeyByCss(elementCss, text, ms = 0) {
    cy.get(elementCss).clear().type(text, { delay: ms });
  }

  /**
   * *Este metodo llena un input con el texto deseado
   * @param text Texto a introducir
   */
  sendKeyOnFocus(text) {
    cy.focused().clear().type(text);
  }

  /**
   * *Este metodo llena un input con el texto deseado sin borrar lo que se encuentra en el control
   * @param element elemento al que se le pasara un texto
   * @param text Texto a introducir
   */
  sendKeyWithOutDeleteByElement(element, text) {
    cy.get(element).type(text);
  }

  /**
   * *Este metodo llena un input con el texto deseado
   * @param elementClassName ClassName del elemento al que se le pasara un texto
   * @param text Texto a introducir
   */
  sendKeyByClassName(elementClassName, text) {
    cy.get(elementClassName)
      .first()
      .clear({ force: true })
      .type(text, { force: true });
  }

  /**
   * *Metodo para que devuelva el selector xpath
   * @param selector elemento HTML
   * @param ms tiempo en milisegundos para la espera
   **/
  getXpath(selector, ms) {
    return cy.xpath(selector, { timeout: ms });
  }

  /**
   * *Este metodo retorna un elemento por medio de un invoke text
   * @param element elemento HTML a buscar
   */
  getTextByElement(elemento) {
    return cy.get(elemento).first().invoke("text");
  }

  /**
   * *Este metodo retorna un elemento xpath
   * @param elementLink LinkText del elemento a buscar
   * @param ms tiempo de espera en microsegundos
   */
  getTextByXpath(elemento) {
    return cy.xpath(elemento).first().invoke("text");
  }

  /**
   * *Este metodo retorna un elemento
   * @param selector elemento HTML a buscar
   * @param ms tiempo de espera en microsegundos
   */
  getElement(selector, ms) {
    return cy.get(selector, { timeout: ms });
  }

  /**
   * *Este metodo retorna un elemento por medio de un invoke text
   * @param elementLink LinkText del elemento a buscar
   */
  getTextByElementHardProcess(element) {
    return cy.get(element, { timeout: 30000 }).invoke("text", { timeout: 30000 });
  }

  /**
   * *Este metodo retorna un elemento que posea un LinkText
   * @param elementLink LinkText del elemento a buscar
   */
  getElementByLinkText(elementLink) {
    return cy.contains("a", elementLink);
  }

  /**
   * *Este metodo devuelve el valor de un elemento HTML
   * @param element elemento a buscar
   */
  getElementValueByElement(element, index = 0) {
    return cy.get(element).eq(index).invoke("val");
  }

  /**
   * *Este metodo devuelve el valor de un elemento HTML
   * @param element elemento a buscar
   */
  getElementValueByElementWithDelay(element) {
    return cy.get(element, { timeout: 10000 }).invoke("val");
  }

  /**
   * *Este metodo devuelve el valor de una tabla
   * @param element elemento a buscar
   */
  getTdInTable(elementTable, numberColumn) {
    return cy.get(elementTable + " " + `td:nth-child(${numberColumn})`);
  }

  /**
   * *Este método obtiene el texto de una grilla especifica
   * Los elementos de arial-rowindex y arial colindex pueden cambiar
   * @param elementTable Nombre de la tabla principal
   * @param numberColumn Posición númerica de la columna
   * @param numberRow Posición númerica de la fila
   */
  getGridText(elementTable, numberRow, numberColumn) {
    return cy
      .get(elementTable)
      .find(`tr[aria-rowindex="${numberRow}"]`)
      .find(`td[aria-colindex="${numberColumn}"]`)
      .invoke("text");
  }

  /**
   ** Devuelve alias para un interceptor
   * @param path : sitio.com/{path} (Se puede obtener del test de cypress)
   * @param method : POST/GET/...
   */
  getAliasForXHR(path, method = "POST") {
    const d = new Date();
    let alias =
      path.split("/").join("") +
      method +
      ((d.getTime() - d.getMilliseconds()) / 1000).toString();
    cy.intercept(method, path).as(alias);
    return "@" + alias;
  }

  /**
   ** Devuelve alias para un interceptor
   * @param path : Se requiere agregar varios alias en una Array
   * @param method : POST/GET/...
   */
  getAliasForXHRArray(path, method = "POST") {
    const d = new Date();
    let alias;
    path.forEach((s) => {
      alias =
        s.split("/").join("") +
        method +
        ((d.getTime() - d.getMilliseconds()) / 1000).toString();
      cy.intercept(method, s).as(alias);
    });
    return "@" + alias;
  }

  /**
   ** Devuelve la cantidad de elementos encontrados en body. Si es 0 es que no existe.
   * @param element
   */
  CheckIfElementExistsByElement(element) {
    return cy.get("body").find(element).its("length");
  }

  /**
   * *Obtiene el closest element de un elemento a través de su className
   * @param className
   * @param element
   * @returns
   */
  getClosestElementByClassName(className, element) {
    return element.closest(className).first();
  }

  /**
   ** Busca un elemento a través de su clase dentro de otro elemento
   * @param className
   * @param element
   * @returns
   */
  findElementByClassName(className, element) {
    return element.find(className).first();
  }

  /**
   * *Obtiene el texto de un input, devolviendo una promesa de string.
   * Se lo debe invocar desde un IT async. El resultado del metodo se puede usar recien al terminar
   * el IT donde se lo invoca
   * Se invoca: await ExpectHelper.getTextValueByElement(element)
   * @param element
   * @returns Promise<string>
   */
  async getTextValueByElement(element) {
    return new Promise((resolve, reject) => {
      cy.get(element).then(($element) => {
        let value = $element.val().toString();
        cy.log("value:" + value);
        resolve(value);
      });
    });
  }

  /**
   ** Este metodo obtiene el texto de un input, devolviendo una promesa de string.
   * Se lo debe invocar desde un IT async. El resultado del metodo se puede usar recien al terminar
   * el IT donde se lo invoca
   * Se invoca: await ExpectHelper.getTextValueByElement(element)
   * @param element espera que esté visible y que el input no se encuentre vacío
   * @returns Promise<string>
   */
  async waitGetTextValueByElement(element) {
    return new Promise((resolve, reject) => {
      cy.get(element)
        .should("be.visible")
        .and("not.have.value", "")
        .then(($element) => {
          let value = $element.val().toString();
          cy.log("value:" + value);
          resolve(value);
        });
    });
  }

  /**
   ** Metodo para obtener el valor por elemento del atributo 'title'
   * @param element elemento que posee el atributo
   *
   */
  getTitleAttribute(element) {
    return cy.get(element).invoke("attr", "title");
  }

  /**
   * *Metodo para obtener el valor por atributo 'title'
   * @param element elemento que posee el atributo
   *
   */
  getTitleAttributeByElement(element) {
    return cy.get(element).invoke("attr", "title");
  }

  /**
   ** Metodo para obtener el valor por class del atributo 'title'
   * @param elementClassName ClassName del elemento que posee el atributo
   *
   */
  getTitleAttributeByClass(elementClassName) {
    return cy.get(elementClassName).invoke("attr", "title");
  }

  /**
   * *Este metodo busca un elemento HTML
   * @param element elemento a buscar
   */
  getElementBySelector(element) {
    return cy.get(element);
  }

  /**
   ** Este metodo busca un elemento HTML
   * @param element elemento a buscar
   */
  waitGetElementBySelector(element, ms = 30000) {
    return cy.get(element, { timeout: ms });
  }

  /**
   ** Este metodo busca un elemento Xpath
   * @param element elemento a buscar
   */
   waitGetElementByXpath(element, ms = 30000) {
    return cy.xpath(element, { timeout: ms });
  }

  /**
   ** Este metodo busca un elemento que posea un ClassName
   * @param className ClassName del elemento a buscar
   */
  getElementByClassName(elementClassName) {
    return cy.get(elementClassName);
  }

  /**
   ** Este metodo retorna el getText de un ID
   * @param element elemento que se va a pasar
   * @returns el texto que se encuentra en el ID
   */
  getTextByElementWithInvoke(element) {
    return cy.get(element).invoke("text");
  }

  /**
   * *Obtener texto de un elemento a través de un atributo
   * @param attr
   * @param val
   */
  getTextByAttr(attr, val) {
    return cy.get(`[${attr}="${val}"]`).invoke("text");
  }

  /**
   * *Este metodo retorna el getText de un elemento ante un proceso pesado
   * @param element elemento que se va a pasar
   * @returns el texto que se encuentra en el ID
   */
  getTextByElementHardProcessWithTime(element, ms = 30000) {
    return cy.get(element, { timeout: ms }).invoke("text", { timeout: ms });
  }

  /**
   *  *Este metodo retorna el getText de un ClassName
   * @param classNameId ClassName al cual se le quiere extraer el texto
   */
  getTextByClassName(classNameId) {
    classNameId = addPrefixIfMissing(classNameId, ".");
    return cy.get(classNameId).invoke("text");
  }

  /**
   *  *Este metodo retorna el text de un get con cualquier combinación de id/class/etc
   * @param element  Element al cual se le quiere extraer el texto
   */
  getTextByElementFirst(element) {
    return cy.get(element).first().invoke("text");
  }

  /**
   * *Este metodo espera que se extraiga el texto que esta dentro del atributo "Value"
   * @param element Id donde esta el atributo
   */
  waitGetValueByElement(element, ms = 30000) {
    return cy.get(element, { timeout: ms }).first().invoke("val");
  }

  /**
   * *Este metodo extrae el texto que esta dentro del atributo "Value"
   * @param elementCss elementCss donde esta el atributo
   */
  getValueByCss(elementCss) {
    return cy.get(elementCss).invoke("value");
  }

  /**
   * *Este metodo extrae el texto que esta dentro del atributo "Value"
   * @param className className donde esta el atributo
   */
  getValueByClassName(className) {
    return cy.get(className).invoke("value");
  }

  /**
   * *Extrae la clase de un control con un index (en caso de que se tenga el mismo ID en dos controles como por ejemplo: solapas y sub solapas)
   * @param element control
   * @param index Index en el que se encuentra el control
   */
  getElementBySelectorWithIndex(element, index) {
    return cy.get(`li${element}`).eq(index);
  }

  /**
   * *Busca un elemento por Id teniendo en cuenta un Parent
   * @param parentId elemento Parent
   * @param childId elemento a buscar
   * @returns elemento
   */
  getElementByParentAndId(parentId, childId) {
    return cy.get(parentId).find(childId);
  }

  /**
   ** Extrae el atributo maxLength de un elemento
   * @param element elemento que posee el atributo
   */
  getMaxLengthAttribute(element) {
    return cy.get(element).invoke("attr", "maxlength");
  }

  /**
   * *Devuelve el texto del elemento focuseado
   * @returns texto del elemento
   */
  getFocusedElementText() {
    return cy.focused().invoke("text");
  }

  /**
   * *Devuelve el atributo del elemento focuseado
   * @returns texto del elemento
   */
  getFocusedElement() {
    return cy.focused().invoke("attr", "id");
  }

  /**
   * *Este metodo obtiene el elemento CSS especificado
   * @param elementCss elemento CSS a obtener
   */
  getElementByCss(elementCss) {
    return cy.get(elementCss);
  }

   /**
   * *Este metodo obtiene el elemento dentro de un iframe especifico
   * @param iframe es una ventana a otra página o sesión separada del DOM principal 
   * @param element elemento dentro del iframe al cual quiero acceder. 
   */
   getElementByIframe(iframe, element) {
    return cy.get(iframe).its('0.contentDocument')
    .its('body')
    .find(element);
  }

  /**
   * *Este metodo obtiene el primer contenido dentro de un iframe especifico y luego lo transforma para poder ser usado y localizado por cypress
   * @param iframe es una ventana a otra página o sesión separada del DOM principal 
   * @param element elemento dentro del iframe al cual quiero acceder. 
   */
  getFirtsContentByIframe(iframe) {
    return  cy.get(iframe)
    .its('0.contentDocument').should('exist')
    .its('body').should('not.be.empty')
    .then(cy.wrap)
  }


  /**
   ** Este metodo espera el retorno del getText de un ID
   * @param element elemento que se va a pasar
   * @returns el texto que se encuentra en el ID
   */
  waitGetTextByElement(element, ms = 30000) {
    return cy.get(element, { timeout: ms }).invoke("text");
  }

  /**
   * *Este metodo retorna un index de un array
   * @param className ClassName del elemento que se quiere validar
   * @param index Index del array donde se debe encontrar
   */
  getIndexTextByClassName(className, index) {
    return cy.get(className).eq(index).invoke("text");
  }

  /**
   * *Este metodo borra los caracteres que esten en un input
   * @param elementCss Css del input que se desea borrar
   */
  clearInputByCss(elementCss) {
    cy.get(elementCss).clear();
  }

  /**
   ** Este metodo fuerza el borrado de caracteres que esten en un input
   * @param elementCss Css del input que se desea borrar
   */
  forceClearInputByCss(elementCss) {
    cy.get(elementCss).clear({ force: true });
  }

  /**
   * *Este metodo borra los caracteres que esten en un input
   * @param fieldId input que se desea borrar
   */
  clearInputByElement(fieldId) {
    fieldId = addPrefixIfMissing(fieldId, "#");
    cy.get(fieldId).clear();
  }

  /**
   * *Este metodo teclea Enter en el input solicitado
   * @param fieldId input que se desea hacer ENTER
   */
  sendEnter(fieldId) {
    fieldId = addPrefixIfMissing(fieldId, "#");
    cy.get(fieldId).type("{enter}");
  }

  /**
   * *Este metodo teclea Escape en el input solicitado
   * @param fieldId input donde se desea apretar ESCAPE
   */
  sendEsc(fieldId) {
    fieldId = addPrefixIfMissing(fieldId, "#");
    cy.get(fieldId).clear().type("{esc}");
  }

  /**
   * *Simula un arrow down
   * @param fieldId field al que se le hara arrow down
   */
  sendArrowDown(fieldId) {
    fieldId = addPrefixIfMissing(fieldId, "#");
    cy.get(fieldId).type("{downarrow}");
  }

  /**
   * *Simula un arrow down
   * @param fieldId field al que se le hara arrow down
   */
  sendArrowDownBody() {
    cy.get("body").type("{downarrow}");
  }

  /**
   * *Simula un arrow right
   * @param elementCss css del field al que se le hara arrow right
   */
  sendArrowRight(fieldId) {
    fieldId = addPrefixIfMissing(fieldId, "#");
    cy.get(fieldId).type("{rightarrow}");
  }

  /**
   * *Simula un arrow right
   * @param elementCss css del field al que se le hara arrow right
   */
  sendArrowRightBody() {
    cy.get("body").type("{rightarrow}");
  }

  /**
   * *Simula un arrow up
   * @param elementCss css del field al que se le hara arrow up
   */
  sendArrowUp(fieldId) {
    fieldId = addPrefixIfMissing(fieldId, "#");
    cy.get(fieldId).type("{uparrow}");
  }

  /**
   * *Este metodo espera hasta que un elemento exista y este visible.
   * @param elementLink Linktext del elemento
   */
  WaitElementIsVisibleByLinkText(elementLink, ms = 30000) {
    cy.contains("a", elementLink, { timeout: ms }).then((parent) => {
      expect(parent[0]).to.exist.to.be.visible;
    });
  }

  /**
   ** Este metodo espera hasta que un elemento exista.
   * @param elementClassName Nombre de la clase
   */
  WaitElementExistsByLinkText(elementLink) {
    cy.contains("a", elementLink, { timeout: 30000 }).then((parent) => {
      expect(parent[0]).to.exist;
    });
  }

  /**
   ** Este metodo espera hasta que un elemento exista pasandole el texto
   * @param elementText Nombre de la clase
   */
  WaitElementExistsByText(elementText, ms = 10000) {
    cy.contains(elementText, { timeout: ms });
  }

  /**
   ** Espera a que finalice una petición a API
   * @param path : sitio.com/{path} (Se puede obtener del test de cypress)
   * @param method : POST/GET/...
   */
  waitResponse(alias, ms = 30000) {
    cy.wait(alias, { timeout: ms })
      .its("response.body.succeeded")
      .should("eq", true);
  }

  /**
   ** Este metodo espera hasta que un elemento no existe más.
   * @param elementClassName Nombre de la clase
   */
  WaitElementTextNotBeByClass(elementClassName, text) {
    cy.get(elementClassName).contains(text).should("not.exist");
  }

  /**
   * *Espera hasta que desaparezca una clase en un elemento particular
   * @param element elemento a esperar
   * @param className clase que no debe estar
   */
  WaitElementNotHaveClass(element, className) {
    cy.get(element).should("not.have.class", className);
  }

  /**
   ** Espera a que finalice una petición a API
   * @param path : sitio.com/{path} (Se puede obtener del test de cypress)
   * @param method : POST/GET/...
   */
  waitXHR(alias, ms = 30000) {
    cy.wait(alias, { timeout: ms });
  }

  /**
   ** Metodo para chequear si el elemento class contiene el valor esperado
   * @param elementClassName
   * @param expectValue
   */
  waitValueToContainsByElement(element, expectValue, ms = 10000) {
    cy.get(element).contains(expectValue, { timeout: ms });
  }

  /**
   * *Éste metodo presiona una tecla
   * @param key código js de la tecla. Se puede obtener en https://keycode.info/
   * @param elementQuery
   */
  triggerKey(key, elementQuery = "body") {
    cy.get(elementQuery).trigger("keydown", { keyCode: key, which: key });
  }

  /**
   * *Éste metodo presiona una tecla con alt presionado
   * @param key código js de la tecla. Se puede obtener en https://keycode.info/
   * @param elementQuery
   */
  triggerKeyWithAlt(key, elementQuery = "body") {
    cy.get(elementQuery).trigger("keydown", {
      altKey: true,
      keyCode: key,
      which: key,
    });
  }

  /**
   ** Éste metodo presiona una tecla con ctrl presionado
   * @param key código js de la tecla. Se puede obtener en https://keycode.info/
   * @param elementQuery
   */
  triggerKeyWithCtrl(key, elementQuery = "body") {
    cy.get(elementQuery).trigger("keydown", {
      ctrlKey: true,
      keyCode: key,
      which: key,
    });
  }

  /**
   ** Éste metodo presiona una tecla
   * @param key código js de la tecla. Se puede obtener en https://keycode.info/
   * @param elementQuery
   */
  triggerKeyOnElement(key, elemet) {
    elemet.trigger("keydown", { keyCode: key, which: key });
  }

  /**
   * *Metodo que borra automaticamente todas las cookies antes del inicio del spec
   **/
  clearAllCookies() {
    cy.clearAllCookies();
  }

  /**
   * *Metodo que borra automaticamente todo el almacenamiento local antes del inicio del spec
   **/
  clearAllLocalStorage() {
    cy.clearAllLocalStorage();
  }

  /**
   * *Metodo que borra automaticamente todo el almacenamiento de sesion antes del inicio del spec
   **/
  clearAllSessionStorage() {
    cy.clearAllSessionStorage();
  }

  /**
   * *Metodo que borra automaticamente las cookies, el almacenamiento local/sesion antes del inicio del spec
   **/
  clearAll() {
    this.clearAllCookies();
    this.clearAllLocalStorage();
    this.clearAllSessionStorage();
  }

  /**
   * *Metodo que va a la pagina web indicada
   * @param url página a visitar
   **/
  visitUrl(url) {
    cy.visit(url);
  }

  /**
   ** Metodo para recargar la página
   **/
  reloadPage() {
    cy.reload();
  }

  /**
   * *Metodo para que imprima un texto en la consola de cypress
   * @param log texto que se desea mostrar en consola
   **/
  write(log) {
    cy.log("log", log);
  }

  /**
   * *Elige un valor de un dropdown/select
   * @param dropdown dropdown a utilizar
   * @param optionText opción a elegir
   */
  selectDropDownOption(dropdown, option) {
    dropdown.click();
    dropdown.contains("option", option).click();
  }

  /**
   ** Este metodo hace que se seleccione un archivo con el elemento <input> dado
   * @param element
   * @param path Path donde se encuentra el archivo
   */
  forcesetFilePathOnInput(element, path) {
    cy.get(element).selectFile(path, { force: true });
  }

  /**
   ** Se encarga de hacer una consulta SQL
   * @param query la consulta que se desea realizar, ya sea UPDATE, INSERT, etc
   */
  executeQuery(query) {
    cy.task("sqlServer:execute", query);
  }

  /**
   * *Este metodo teclea Enter en el input solicitado para un xpath
   * @param fieldId input que se desea hacer ENTER
   */
  sendEnterForXpath(fieldId) {
    cy.xpath(fieldId).type("{enter}");
  }
}
