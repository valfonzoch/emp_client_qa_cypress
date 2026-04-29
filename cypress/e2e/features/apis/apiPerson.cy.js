import { ApiHelperPos } from "../../Pages/apisPage/apiTokenPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataApi from "../../../fixtures/dataApi.json";
import { ApiSignature } from "../../Pages/apisPage/apiPersonasPage/apiSignaturePage";
import { ApiPhoto } from "../../Pages/apisPage/apiPersonasPage/apiPhotoPage";
import { ApiPersonId } from "../../Pages/apisPage/apiPersonasPage/apiPersonIdPage";
import { ApiEmployments } from "../../Pages/apisPage/apiPersonasPage/apiEmploymentsPage";
import { ApiInhibicions } from "../../Pages/apisPage/apiPersonasPage/apiInhibicionsPage";

let apiHelperPos = new ApiHelperPos();
let helper = new Assertions();
let apiSignature = new ApiSignature()
let apiPhoto = new ApiPhoto();
let apiPersonId = new ApiPersonId();
let apiEmployments = new ApiEmployments();
let apiInhibicions = new ApiInhibicions();


export const status = 200;

describe("banco - Prueba API - Persons", () => {

  it("Prueba - API - Token for service", async () => {
    const tokenAuthentication = await apiHelperPos.methodApiPostCreate();
    console.log(tokenAuthentication.status);
    helper.methodApiExpectResponseStatus(tokenAuthentication.status, status);
  });
  
 /* it("Prueba - API - Firma/Personas ", async () => {
    const signature = await apiSignature.methodApiSignaturePerson(
      dataApi.apiPerson.personId
    );
    console.log(signature.status);
    helper.methodApiExpectResponseStatus(signature.status, status);
  });

  it("Prueba - API - Foto/Personas ", async () => {
    const photo = await apiPhoto.methodApiPhotoPerson(
      dataApi.apiPerson.personId
    );
    console.log(photo.status);
    helper.methodApiExpectResponseStatus(photo.status, status);
  });*/ //Actaulmente no hay en base clientes con foto ni firma. 

  it("Prueba - API - Persona/Personas ", async () => {
    const person = await apiPersonId.methodApiPersonId(
      dataApi.apiPerson.personId
    );
    console.log(person.status);
    helper.methodApiExpectResponseStatus(person.status, status);
  });

  it("Prueba - API - Empleos/Personas ", async () => {
    const empleos = await apiEmployments.methodApiEmployments(
      dataApi.apiPerson.personId
    );
    console.log(empleos.status);
    helper.methodApiExpectResponseStatus(empleos.status, status);
  });

  it("Prueba - API - Inhibiciones/Personas ", async () => {
    const inhibiciones = await apiInhibicions.methodApiInhibicions(
      dataApi.apiPerson.personInhibicion, dataApi.general.page, dataApi.general.size
    );
    console.log(inhibiciones.status);
    helper.methodApiExpectResponseStatus(inhibiciones.status, status);
  });

});