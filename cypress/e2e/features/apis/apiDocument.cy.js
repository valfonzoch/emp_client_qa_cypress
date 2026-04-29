import { ApiHelperPos } from "../../Pages/apisPage/apiTokenPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataApi from "../../../fixtures/dataApi.json";
import { ApiDocument } from "../../Pages/apisPage/apiDocumentosPage/apiTipoDocumentosPage";
import { ApiUploadDocument } from "../../Pages/apisPage/apiDocumentosPage/apiCargaDeDocPage";
import { ApiTokenUser } from "../../Pages/apisPage/apiTokenUserPage";

let apiHelperPos = new ApiHelperPos();
let apiTokenUser = new ApiTokenUser();
let helper = new Assertions();
let apiTipoDocumento = new ApiDocument();
let apiActualizacionDoc = new ApiUploadDocument()


export const status = 200;

describe("banco - Prueba API - Documentos", () => {

  it("Prueba - API - Token for service", async () => {
    const tokenAuthentication = await apiHelperPos.methodApiPostCreate();
    console.log(tokenAuthentication.status);
    helper.methodApiExpectResponseStatus(tokenAuthentication.status, status);
  });

  it("Prueba - API - Token for user", async () => {
    const tokenUser = await apiTokenUser.methodApiTokenUser();
    console.log(tokenUser.status);
    helper.methodApiExpectResponseStatus(tokenUser.status, status);
  });
  
  it("Prueba - API - Tipo de Documentos/ Documentos ", async () => {
    const tiposDoc = await apiTipoDocumento.methodApiDocument();
    console.log(tiposDoc.status);
    helper.methodApiExpectResponseStatus(tiposDoc.status, status);
  });

  it("Prueba - API - Actualización de Documentos/ Documentos ", async () => {
    const actualizacionDoc = await apiActualizacionDoc.methodApiPostUploadDocument(dataApi.jsonDocuments);
    console.log(actualizacionDoc.status);
    helper.methodApiExpectResponseStatus(actualizacionDoc.status, status);
  });

});