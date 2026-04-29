import Page from "../../Pages/helper/page";

require("cypress-xpath");

let basePage = new Page();
export class Assertions {
  title = "title";
  status200 = 200;
  status200Text = "OK";

  /*ASSERTIONS API*/

  /**
   * Este metodo valida que la respuesta obtenida sea igual el estatus indicado
   * @param response Es la respuesta obtenida
   * @param status Es el status que le indiquemos
   */

  methodApiExpectResponseStatus(response, status) {
    expect(response).to.eq(status);
  }

  /**
   * Este metodo valida que la respuesta obtenida contenga el estatus indicado
   * @param response Es la respuesta obtenida
   * @param status Es el status que le indiquemos
   */
  methodApiExpectResponseContain(response, status) {
    expect(response).to.contain(status);
  }

  /**
   * Este metodo realiza la comparación entre la respuesta obtenida y el statusText igual a "OK"
   * @param response Es la respuesta obtenida
   * @param statusText Es el status "ok"
   */
  methodApiExpectResponseStatusText(response, statusText) {
    expect(response).to.contains(statusText);
  }

  /**
   * Este metodo realiza comprueba que el body contenga el status indicado
   * @param response Es la respuesta obtenida
   * @param status Es el status que le indiquemos
   */
  methodApiExpectResponseProperty(response, status) {
    expect(response).property("body").to.contain(status);
  }

  /**
   * Este metodo realiza comprueba que el valor de un campo contenido en el body sea igual a lo indicado
   * @param response Es la respuesta obtenida
   * @param propertyName valor del campo
   * @param expectValue valor esperado
   */
  methodApiExpectResponsePropertyAndValue(
    response,
    propertyName,
    expectedValue
  ) {
    expect(response.body[propertyName]).to.deep.equal(expectedValue);
  }

   /**
   * Este metodo realiza comprueba que el valor de un campo contenido en el body sea igual a lo indicado
   * @param response Es la respuesta obtenida
   * @param keyIntoProperty Nombre del campo
   * @param propertyName valor del campo
   * @param expectValue valor esperado
   */
   methodApiExpectResponsePropertyArrayAndValue(
    response,
    keyIntoProperty,
    propertyName,
    expectedValue
  ) {
    expect(response.body[keyIntoProperty][propertyName]).to.deep.equal(expectedValue);
  }

  /**
   * Este método verifica si un campo específico dentro de un array contenido en la respuesta de una API contiene un valor determinado.
   * @param response Es la respuesta obtenida
   * @param fieldName Nombre del campo que se verifica dentro del array
   * @param status valor esperado
   */
  methodApiExpectResponseContainArrayFieldName(response, fieldName, status) {
    let result = response.find(
      (element) => String(element[fieldName]) == status
    );
    expect(String(result[fieldName])).to.contain(status);
  }

  /*ASSERIONS GENERALES*/

  /**
   * Este metodo realiza la comparación del titulo del proceso
   * @param tituloEsperado Texto del titulo
   */
  expectTitleToEqual(tituloEsperado) {
    let tituloActual = basePage.getTextByElement(this.title);
    tituloActual.should("eq", tituloEsperado);
  }

  /**
   * Valida que el texto sea igual al  indicado
   * @param element texto
   * @param expectedText texto esperado
   */
  expectTextToEqualElement(element, expectedText) {
    let actualText = basePage.getTextByElement(element);
    actualText.should("eq", expectedText);
  }

  /**
   * Valida que el texto sea igual al  indicado
   * @param element texto
   * @param expectedText texto esperado
   */
  expectTextToEqualXpath(element, expectedText) {
    let actualText = basePage.getTextByXpath(element);
    actualText.should("eq", expectedText);
  }

  /**
   * Metodo para chequear si el elemento contiene el texto esperado
   * @param element
   * @param expectedText
   */

  expectTextToContainElement(element, expectedText) {
    let actualText = basePage.getTextByElement(element);
    actualText.should("contain", expectedText);
  }

  /**
   * Metodo para chequear si el elemento contiene el texto esperado
   * @param xpath
   * @param expectedText
   */

  expectTextToContainXpath(element, expectedText) {
    let actualText = basePage.getTextByXpath(element);
    actualText.should("contain", expectedText);
  }

  /**
   * Este metodo valida que aparezca el mensaje de error
   * @param element Id del mensaje de error donde aparezca el error
   */
  expectErrorFielElement(element, value) {
    let expectedMessage = basePage.getTextByElement(`error-${element}`);
    expectedMessage.should("eq", value);
  }

  /**
   * Este metodo valida que aparezca el mensaje de error
   * @param element Xpath del mensaje de error donde aparezca el error
   */
  expectErrorFielXpath(element, value) {
    let expectedMessage = basePage.getTextByXpath(`error-${element}`);
    expectedMessage.should("eq", value);
  }

  /**
   * Este metodo valida que aparezca el mensaje de Requerido
   * @param element Id del mensaje de error donde aparezca el Requerido.
   */
  expectRequiredElemet(element, requiredMessage) {
    let expectedMessage = basePage.getTextByElement(`error-${element}`);
    expectedMessage.should("eq", requiredMessage);
  }

  /**
   * Este metodo valida que aparezca el mensaje de Requerido
   * @param element Xpath del mensaje de error donde aparezca el Requerido.
   */
  expectRequiredXpath(element, requiredMessage) {
    let expectedMessage = basePage.getTextByXpath(`error-${element}`);
    expectedMessage.should("eq", requiredMessage);
  }

  /**
   * Este metodo realiza el expect de un texto sanitizandolo (Después de la sanitización, cualquier etiqueta HTML será eliminada y solo quedarán los caracteres de texto plano)
   * @param element Xpath del elemento donde esta el texto
   * @param expectedText texto que se quiere comparar
   */
  expectSanitizedTextToBeByXpath(element, expectedText) {
    let stringSanitizer = require("string-sanitizer");
    basePage.getTextByXpath(element).then((text) => {
      let sanitizedText = stringSanitizer.sanitize(text);
      expect(sanitizedText).to.eq(stringSanitizer.sanitize(expectedText));
    });
  }

  /**
   * Este metodo valida que un xpath no se encuentre visible
   * @param element xpath del elemento que se quiere validar
   */
  expectIsNotPresentElementByXpath(element) {
    let isNotVisible = basePage.getXpath(element, 10000);
    isNotVisible.should("not.be.visible");
  }

  /**
   * Este metodo valida que un xpath no existe
   * @param element xpath del elemento que se quiere validar
   */
  expectNotExistElementByXpath(element) {
    let notExist = basePage.getXpath(element, 10000);
    notExist.should("not.exist");
  }

  /**
   * Este metodo realiza la comparación de dos textos
   * @param textoEsperado Texto esperado
   * @param textoActual Texto actual
   */
  expectTextToBe(textoEsperado, textoActual) {
    textoActual.should("eq", textoEsperado);
  }

  /**
   * Este metodo realiza la comparación del subtitulo del proceso
   * @param subtituloEsperado Texto del titulo
   */
  expectSubTitle(subtituloEsperado, subtitle) {
    let subtitleActual = basePage.getTextByElement(subtitle);
    subtitleActual.should("eq", subtituloEsperado);
  }

  /**
   * Este metodo valida que aparezca el mensaje de error
   * @param element Elemento HTML del mensaje de error donde aparezca el error
   */
  expectErrorField(element, value) {
    let expectedMessage = basePage.getTextByElement(`error-${element}`);
    expectedMessage.should("eq", value);
  }

  /**
   * Este metodo valida que aparezca el mensaje de Requerido
   * @param element Elemento HTML del mensaje de error donde aparezca el Requerido.
   */
  expectRequired(element, requiredMessage) {
    let expectedMessage = basePage.getTextByElement(`error-${element}`);
    expectedMessage.should("eq", requiredMessage);
  }

  /**
   * Este metodo valida que aparezca el mensaje de Al menos un requerido
   * @param element Elemento HTML del mensaje de error donde aparezca el Requerido.
   */
  expectOneRequired(element) {
    let expectedMessage = basePage.getTextByElement(element);
    expectedMessage.should("eq", this.oneRequired);
  }

  /**
   * Este metodo realiza el expect del mensaje Fecha Invalida
   * @param element Elemento HTML del mensaje de error
   */
  expectInvalidDate(element) {
    let expectedMessage = basePage.getTextByElement(`error-${element}`);
    expectedMessage.should("eq", this.fechaInvalida);
  }

  /**
   * Este metodo realiza el expect de un texto
   * @param element Elemento HTML del elemento donde esta el texto
   * @param expectedText texto que se quiere comparar
   */
  expectTextToBeByElement(element, expectedText) {
    let actualText = basePage.getTextByElement(element);
    actualText.should("eq", expectedText);
  }

  /**
   * Este metodo realiza el expect de un texto sanitizandolo
   * @param element Elemento HTML del elemento donde esta el texto
   * @param expectedText texto que se quiere comparar
   */
  expectSanitizedTextToBeByElement(element, expectedText) {
    let stringSanitizer = require("string-sanitizer");
    basePage.getTextByElement(element).then((text) => {
      let sanitizedText = stringSanitizer.sanitize(text);
      expect(sanitizedText).to.eq(stringSanitizer.sanitize(expectedText));
    });
  }

  /**
   * Metodo para chequear si el elemento contiene el texto esperado
   * @param element
   * @param expectedText
   */
  expectTextToContainsById(element, expectedText) {
    let actualText = basePage.getTextByElement(element);
    actualText.contains(expectedText);
  }

  /**
   * Este metodo realiza el expect de un texto
   * @param ClassNameId ClassName del elemento donde esta el texto
   * @param expectedText texto que se quiere comparar
   */
  expectTextToBeByClassName(ClassNameId, expectedText) {
    let actualText = basePage.getTextByElement(ClassNameId);
    actualText.then((str) => {
      expect(str).to.eq(expectedText);
    });
  }

  /**
   * Este metodo realiza el expect de que no se visualice un determinado texto
   * @param ClassNameId ClassName del elemento donde esta el texto
   * @param expectedText texto que no se tiene que visualizar
   */
  titleNotFound(ClassNameId, expectedText) {
    let actualText = basePage.getTextByElement(ClassNameId);
    actualText.then((str) => {
      expect(str).to.not.eq(expectedText);
    });
  }

  /**
   * Este metodo realiza el expect de un texto igual
   * @param query cualquier tipo de filtro válido en un get
   * @param expectedText texto que se quiere comparar
   */
  expectTextToBeByAnyQuery(query, expectedText) {
    let actualText = basePage.getTextByElement(query);
    actualText.then((str) => {
      expect(str).to.eq(expectedText);
    });
  }

  /**
   * Este metodo realiza el expect que incluya un texto
   * @param query cualquier tipo de filtro válido en un get
   * @param expectedText texto que se quiere comparar
   */
  expectTextIncludeByAnyQuery(query, expectedText) {
    let actualText = basePage.getTextByElement(query);
    actualText.then((str) => {
      expect(str).to.include(expectedText);
    });
  }

  /**
   * Este metodo valida el valor que posea un elemento
   * @param element Elemento HTML del elemento donde esta el valor
   * @param expectedValue Valor a comprar
   */
  expectValueToBeById(element, expectedValue) {
    let actualText = basePage.waitGetValueByElement(element);
    actualText.should("eq", expectedValue);
  }

  /**
   * Este metodo valida el valor que posea un elemento
   * @param className ClassName del elemento donde esta el valor
   * @param expectedValue Valor a comparar
   */
  expectValueToBeByClassName(className, expectedValue) {
    let actualText = basePage.getValueByClassName(className);
    actualText.should("eq", expectedValue);
  }

  /**
   * Este metodo valida el valor que posea un elemento
   * @param elementCss Css del elemento donde esta el valor
   * @param expectedValue Valor a comprar
   */
  expectValueToBeByCss(elementCss, expectedValue) {
    let actualText = basePage.getValueByCss(elementCss);
    actualText.should("eq", expectedValue);
  }

  /**
   * Este metodo valida que un ClassName se encuentre presente en el DOM
   * @param className ClassName del elemento que se quiere validar
   */
  expectElementIsPresentByClassName(className) {
    let isPresent = basePage.getElementByClassName(className);
    isPresent.should("be.visible");
  }

  /**
   * Este metodo valida que un array no venga vacio
   * @param className ClassName del elemento que se quiere validar
   */
  expectNotEmptyTextByClassName(className) {
    let arrayText = basePage.getTextByClassName(className);
    arrayText.then((text) => {
      expect(text.length).not.to.be.eq(0);
    });
  }

  /**
   * Este metodo valida que un element se encuentre presente en el DOM
   * @param element element del selector que se quiere validar
   */
  expectElementIsPresentByElement(element) {
    let expectElement = basePage.getElementBySelector(element);
    expectElement.should("exist");
  }

  /**
   * Este método espera hasta que un elemento exista.
   * @param element Elemento HTML
   */
  expectWaitElementExistsBySelector(element) {
    let expectElement = basePage.waitGetElementBySelector(element);
    expectElement.should("exist");
  }

  /**
   * Este metodo valida que un element no se encuentre presente en el DOM
   * @param element element del elemento que se quiere validar
   */
  expectElementIsNotPresentById(element) {
    let expectElement = basePage.getElementBySelector(element);
    expectElement.should("not.exist");
  }

  /**
   * Este método espera hasta que un elemento existe.
   * @param elementClassName Nombre de la clase
   */
  expectWaitElementExistsByClass(elementClassName) {
    let expectElement = basePage.getElementByClassName(elementClassName);
    expectElement.should("exist");
  }

  /**
   * Este método espera hasta que un elemento no existe más.
   * @param elementClassName Nombre de la clase
   */
  expectWaitElementNotExistsByClass(elementClassName) {
    let expectElement = basePage.getElementByClassName(elementClassName);
    expectElement.should("not.exist");
  }

  /**
   * Este metodo valida que aparezca el mensaje de error Valor Inexistente          REVISARRRRRRRRRRRRRRRRRRRRRRRRRR
   * @param element Id del elemento que se quiere validar
   */
  expectTextNonExistentById(element) {
    let expectValue = basePage.getTextByElement(`error-${element}`);
    expectValue.should("equal", this.valueNonExistent);
  }

  /**
   * Extrae y compara el class de un control por lo general extraido de un element Id (El selector  ue se obtiene deberia ser un id)
   * @param element Elemento id del control
   * @param expectedValue Valor que se espera que tenga
   */
  expectTextClassById(element, expectedValue) {
    let textClass = basePage.getElementBySelector(element);
    textClass.should("have.class", expectedValue);
  }

  /**
   * Extrae y compara que contenga un texto
   * @param element Elemento HTML del control
   * @param expectedValue Valor que se espera que tenga
   */
  expectContainValueById(element, expectedValue) {
    // Se usa wait para esperar hasta que la api de respuesta
    this.expectWaitElementExistsBySelector(element);
    basePage.waitGetValueByElement(element).then((res) => {
      let message = JSON.parse(res).message;
      expect(message).to.eq(
        expectedValue,
        "El valor en el ID dado no contiene el texto"
      );
    });
  }

  /**
   * Extrae y compara que contenga un texto
   * @param element Elemento HTML del control
   * @param expectedValue Valor que se espera que tenga
   */
  expectContainTextByElement(element, expectedValue) {
    let textValue = basePage.getTextByElement(element);
    textValue.should("contain", expectedValue);
  }

  /**
   * Extrae y compara que contenga un texto
   * @param textLabel Id del control
   * @param expectedValue Valor que se espera que tenga
   */
  expectLabelsByCss(textLabel, expectedValue) {
    let textValue = basePage.getTextByElement(textLabel);
    textValue.should("eq", expectedValue);
  }

  /**
   * Valida que el este presente un atributo con un texto esperado en algun elemento
   * @param attr
   * @param value
   * @param expectedValue
   */
  expectLabelByAttr(attr, value, expectedValue) {
    let textValue = basePage.getTextByAttr(attr, value);
    textValue.should("eq", expectedValue);
  }

  /**
   * Este metodo hace un ToBe a la clase de un element por index (en caso de que se tenga el mismo ID en dos controles como por ejemplo solapas y sub solapas)
   * @param element element a evaluar
   * @param index Index del element
   * @param expectedCondition Condiciones esperada del class
   */
  expectClassToBeByIdWithIndex(element, index, expectedCondition) {
    let element1 = basePage.getElementBySelectorWithIndex(element, index);
    element1.should("have.class", expectedCondition);
  }

  /**
   *
   * @param element Chequea que un elemento este disabled
   */
  expectDisabledById(element) {
    let element1 = basePage.getElementBySelector(element);
    element1.should("be.disabled");
  }

  /**
   * Chequea que un elemento este disabled pero chequeando la clase form-component-disabled
   * @param parentId
   * @param childId
   */
  expectDisabledWithClassById(parentId, childId) {
    let element = basePage.getElementByParentAndId(parentId, childId);
    element.should("have.class", "form-component-disabled");
  }

  /**
   * Chequea que un elemento este habilitado
   * @param element
   */
  expectAvailableById(element) {
    let actualStatus = basePage.getElementBySelector(element);
    actualStatus.should("be.enabled");
  }

  /**
   * Éste método espera a que un elemento esté habilitado
   * @param element
   */
  WaitexpectAvailableById(element) {
    let actualStatus = basePage.waitGetElementBySelector(element);
    actualStatus.should("be.enabled");
  }

  /**
   * Éste método espera a que un elemento esté visible
   * @param element
   */
  expectVisibleByXpath(element) {
    let actualStatus = basePage.getXpath(element);
    actualStatus.should("be.visible");
  }

  /**
   * Éste método verifica que un elemento esté visible y habilitado
   * @param element
   */
  expectElementIsVisibleAndEnabled(element) {
    let element1 = basePage.getElementBySelector(element);
    element1.should("be.visible").and("be.enabled");
  }

  /**
   * Éste método verifica que un Xpath esté visible y habilitado
   * @param element
   */
  expectXpathIsVisibleAndEnabled(element) {
    let element1 = basePage.getXpath(element);
    element1.should("be.visible").and("be.enabled");
  }

  /**
   * Éste método espera a que un elemento esté visible y habilitado
   * @param element
   */
  waitExpectElementIsVisibleAndEnabled(element) {
    let element1 = basePage.waitGetElementBySelector(element);
    element1.should("be.visible").and("be.enabled");
  }

  /**
   * Chequea que un elemento este habiltiado pero chequeando que no tenga la clase form-component-disabled
   * @param parentId
   * @param childId
   */
  expectAvailableWithClassById(parentId, childId) {
    let element = basePage.getElementByParentAndId(parentId, childId);
    element.should("not.have.class", "form-component-disabled");
  }

  /**
   * Chequea que un elemento este disabled pero chequeando la clase disabled
   * @param parentId
   * @param childId
   */
  expectEnabledWithClassById(parentId, childId) {
    let element = basePage.getElementByParentAndId(parentId, childId);
    element.should("not.have.class", "disabled");
  }

  /**
   * Este metodo valida que el atributo MaxValue sea el que se espera
   * @param element Id del elemento a validar
   * @param value Valor que se espera
   */
  expectMaxLength(element, value) {
    let attribute = basePage.getMaxLengthAttribute(element);
    attribute.should("contain", value);
  }

  /**
   * Chequea que el elemento activo tenga el texto indicado
   * @param value
   */
  expectTextOnActiveElement(value) {
    basePage.getFocusedElementText().should("eq", value);
  }

  /**
   * Valida que un elemento no tenga el texto indicado
   * @param element
   * @param expectedText
   */
  expectIsNotEqualTextById(element, expectedText) {
    expectedText.then((expected) => {
      basePage.getTextByElement(element).should("not.eq", expected);
    });
  }

  /**
   * Chequea que un checkbox esté seleccionado
   * @param checkboxId
   */
  expectCheckboxIsCheckedById(checkboxId) {
    let expectCheckbox = basePage.getElementBySelector(checkboxId);
    expectCheckbox.should("be.checked");
  }

  /**
   * Chequea que un checkbox no esté seleccionado
   * @param checkboxId
   */
  expectCheckboxIsNotCheckedById(checkboxId) {
    let expectCheckbox = basePage.getElementBySelector(checkboxId);
    expectCheckbox.should("not.be.checked");
  }

  /**
   * Chequea que el atributo title tenga el valor indicado
   * @param element element del title
   * @param expectedValue Valor que se espera que tenga
   */
  expectTitleByElement(element, expectedValue) {
    let titleValue = basePage.getTitleAttribute(element);
    titleValue.should("eq", expectedValue);
  }

  /**
   * Chequea que el atributo title tenga el valor indicado
   * @param element Id del title
   * @param expectedValue Valor que se espera que tenga
   */
  expectTitleById(element, expectedValue) {
    let titleValue = basePage.getTitleAttributeByElement(element);
    titleValue.should("eq", expectedValue);
  }

  /**
   * Chequea que el atributo title tenga el valor indicado
   * @param elementClassName Nombre de la clase del title
   * @param expectedValue Valor que se espera que tenga
   */
  static expectTitleByClassName(elementClassName, expectedValue) {
    let titleValue = basePage.getTitleAttributeByClass(elementClassName);
    titleValue.should("eq", expectedValue);
  }

  /**
   * Chequea que el elemento CSS no exista
   * @param elementClassName elemento CSS a chequear
   */
  static waitElementNotExistsByCss(elementClassName) {
    let expectElement = basePage.getElementByCss(elementClassName);
    expectElement.should("not.exist");
  }

  /**
   * Extrae y válida dos valores en la misma columna (Nombre del encabezado y registro indicado)
   * @param nameColumn Nombre del encabezado de la columna a validar
   * @param nameRow Nombre o valor de la fila a validar
   * @param elementTable Nombre de la Tabla Principal
   * @param numberColumn Posición númerica de la columna a buscar
   */

  expectContainTextByTd(nameColumn, nameRow, elementTable, numberColumn) {
    let datos = [];
    let table = basePage.getTdInTable(elementTable, numberColumn);

    table
      .each(($el, index) => {
        datos[index] = $el.text();
      })
      .then(() => {
        for (let i = 0; i <= datos.length; i++) {
          cy.log(datos[i]);
        }
        cy.wrap(datos).should("include", nameColumn).and("include", nameRow);
      });
  }

  /**
   * Valida que el texto de una grilla no sea igual al texto indicado
   * @param elementTable Nombre de la Tabla Principal
   * @param numberRow Posición númerica fila
   * @param numberColumn Posición númerica de la columna
   * @param textReferent texto indicado para comparar
   */
  expectIsNotEqualTextByGrid(
    elementTable,
    numberRow,
    numberColumn,
    textReferent
  ) {
    let textGrilla = basePage.getGridText(
      elementTable,
      numberRow,
      numberColumn
    );
    textGrilla.should("not.equal", textReferent);
  }

  /**
   * Valida que el texto de una grilla sea igual al texto indicado
   * @param elementTable Nombre de la Tabla Principal
   * @param numberRow Posición númerica fila
   * @param numberColumn Posición númerica de la columna
   * @param textReferent texto indicado para comparar
   */
  expectIsEqualTextByGrid(elementTable, numberRow, numberColumn, textReferent) {
    let textGrilla = basePage.getGridText(
      elementTable,
      numberRow,
      numberColumn
    );
    textGrilla.should("equal", textReferent);
  }

  /**
   * *Este metodo valida que en un index de un array sea igual al texto esperado
   * @param className ClassName del elemento que se quiere validar
   * @param text Texto que se quiere validar
   * @param index Index del array donde se debe encontrar
   */
  expectArrayEqualInIndexTextByClassName(className, text, index) {
    let element = basePage.getIndexTextByClassName(className, index);
    element.should("eq", text);
  }

  /**
   * *Este metodo valida que en un index de un array sea igual al texto esperado
   * @param element elemento que se quiere validar
   * @param text Texto que se quiere validar
   * @param index Index del array donde se debe encontrar
   */
  expectArrayEqualInIndexTextByElement(element, text, index) {
    let element1 = basePage.getIndexTextByClassName(element, index);
    element1.invoke("replace", /\u00a0/g, " ").should("eq", text);
  }

  /**
   ** Este metodo valida que la grilla tenga la cantidad esperada de elementos VERRRR
   * @param expectedNumber numero esperado
   * @param gridSelector selector para determinar que grilla se quiere validar
   */
  expectGridRowCountToBe(expectedNumber, gridSelector) {
    let grilla = basePage.getElementBySelector(gridSelector);
    grilla.should("have.length", expectedNumber);
  }

  /**
   ** Chequea que un elemento en una posicion particular del array de elementos obtenidos a partir de una clase
   ** tenga el texto esperado
   * @param className class de los elementos que forman el array
   * @param text texto a esperar
   * @param index posicion del objeto a chequear
   */
  expectChildrenArrayContainInIndexTextByClassName(text, index, element) {
    let element1 = basePage.getElementBySelector(element);
    element1.children().should(($input) => {
      expect($input[index]).to.be.visible;
    });

    element1.children().eq(index).invoke("text").should("eq", text);
  }

  /**
   * *Este metodo valida que en un index de un array contenga el texto esperado VEERRRR
   * @param className ClassName del elemento que se quiere validar
   * @param text Texto que se quiere validar
   * @param index Index del array donde se debe encontrar
   */
  expectArrayContainInIndexTextByClassName(text, index, element) {
    let element1 = basePage.getElementBySelector(element);
    element1.should(($input) => {
      expect($input[index]).to.be.visible;
    });
    element1.eq(index).invoke("text").should("eq", text);
  }

  /**
   * *Este metodo valida que en un index de un array sanitizado contenga el texto esperado sanitizado VEERRRRR
   * @param className ClassName del elemento que se quiere validar
   * @param text Texto que se quiere validar
   * @param index Index del array donde se debe encontrar
   */
  expectSanitizedArrayContainInIndexSanitizedTextByClassName(
    expectedText,
    index,
    element
  ) {
    let element1 = basePage.getElementBySelector(element);
    element1.should(($input) => {
      expect($input[index]).to.be.visible;
    });
    let stringSanitizer = require("string-sanitizer");
    element1
      .eq(index)
      .invoke("text")
      .then((text) => {
        let sanitizedText = stringSanitizer.sanitize(text);
        expect(sanitizedText).to.eq(stringSanitizer.sanitize(expectedText));
      });
  }

  /**
   ** Este metodo valida que un index de un array no exista VERRRR
   * @param className ClassName del elemento que se quiere validar
   * @param index Index del array donde se debe encontrar
   */
  expectArrayUndefinedIndexByClassName(index, element) {
    let element1 = basePage.getElementBySelector(element);
    element1.should(($input) => {
      expect($input[index]).to.be.undefined;
    });
  }

  /**
   **Valida que el focus actual sea el control que se desea VERRRRR
   * @param element control que se desea checkear
   */
  expectElementFocus(element) {
    let focussAtr = getFocusedElement();
    focussAtr.should("eq", element);
  }

  /**
   * *Valida que el focus actual sea el control que se desea VERRRR
   * @param className className del control que se desea checkear
   * @param index index del elemento que se desea controlar
   */
  expectElementByClassNameWithIndexIsFocused(className, index, ms = 10000) {
    let element = basePage.getElementByClassName(className);
    element.eq(index).should("be.focused");
  }

  /**
   * *Este metodo verifica que el elemento esté con foco VEEEERRRR
   * @param element elemento a verificar
   */
  expectElementWithIndexIsFocused(element, ms = 3000) {
    let element1 = basePage.getElement(element);
    element1.should("be.focused", { timeout: ms });
  }

  //Desde aquí incorporo.

  /**
   * Éste método espera a que un elemento esté visible
   * @param element elemento xpath
   */
  waitExpectVisibleByXpath(element) {
    let actualStatus = basePage.waitGetElementByXpath(element);
    actualStatus.should("be.visible");
  }

  /**
 * Extrae y compara dos textos de dos elementos xpath diferentes
 * @param {string} element Xpath del primer elemento
 * @param {string} element2 Xpath del segundo elemento
 */
   expectContainTextByTwoElements(element, element2) {
    basePage.getTextByXpath(element).then((textValue) => {
      basePage.getTextByXpath(element2).then ((textValue2)=> {
        expect(textValue).to.contain(textValue2);
      })
    })
   }

  /**
 * Extrae y compara un elemento dentro de un iframe con un texto
 * @param iframe iframe a localizar
 * @param element elemento dentro del iframe a localizar
 * @param text texto que se desea comparar 
 */
    expectContainTextByIframe(iframe, element, text) {

      let textValue = basePage.getFirtsContentByIframe(iframe);
      textValue
      .contains(element, text)
      .should('be.visible');
          
    }
}