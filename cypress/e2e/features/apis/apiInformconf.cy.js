//Prueba Deshabilitada, porque el tercerizado del cliente cambio los servicios. Por tal motivo todos fallan

/*import { ApiHelperPos } from "../../Pages/apisPage/apiTokenPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataApi from "../../../fixtures/dataApi.json";
import { ApiConvocatorias } from "../../Pages/apisPage/apiInformconf/apiConvocatoriasPage";
import { ApiTokenUser } from "../../Pages/apisPage/apiTokenUserPage";
import { ApiScoring } from "../../Pages/apisPage/apiInformconf/apiScoringPage";
import { ApiUltimoLugarDeTrabajo } from "../../Pages/apisPage/apiInformconf/apiUltLugarTrabPage";
import { ApiUltimaDireccion } from "../../Pages/apisPage/apiInformconf/apiUltDirecPage";
import { ApiSolicitudes } from "../../Pages/apisPage/apiInformconf/apiSolicitudesPage";
import { ApiRemates } from "../../Pages/apisPage/apiInformconf/apiRematesPage";
import { ApiQuiebras } from "../../Pages/apisPage/apiInformconf/apiQuiebraPage";
import { ApiMorosidades } from "../../Pages/apisPage/apiInformconf/apiMorosidadesPage";
import { ApiMorosidadesAdefi } from "../../Pages/apisPage/apiInformconf/apiMorosidadesAdefiPage";
import { ApiInhibiciones } from "../../Pages/apisPage/apiInformconf/apiInhibicionesPage";
import { ApiInhabilitaciones } from "../../Pages/apisPage/apiInformconf/apiInhabilitacionesPage";
import { ApiHistorialDirecciones } from "../../Pages/apisPage/apiInformconf/apiHistDirecPage";
import { ApiHistorialLugTrab } from "../../Pages/apisPage/apiInformconf/apiHistLugTrabPage";
import { ApiDemandas } from "../../Pages/apisPage/apiInformconf/apiDemandasPage";
import { ApiDatosPersonales } from "../../Pages/apisPage/apiInformconf/apiDatosPersonalesPage";
import { ApiAllInformconf } from "../../Pages/apisPage/apiInformconf/apiAllPage";

let apiHelperPos = new ApiHelperPos();
let apiTokenUser = new ApiTokenUser();
let helper = new Assertions();
let apiConvocatorias = new ApiConvocatorias();
let apiScoring = new ApiScoring();
let ultTrabj = new ApiUltimoLugarDeTrabajo();
let ultDirec = new ApiUltimaDireccion();
let solicitudesInfor = new ApiSolicitudes();
let rematesInfor = new ApiRemates();
let quiebrasInfor = new ApiQuiebras();
let morosidadesInform = new ApiMorosidades();
let moroAdefi = new ApiMorosidadesAdefi();
let inhibicionesInform = new ApiInhibiciones();
let inhabilInform = new ApiInhabilitaciones();
let histoDirec = new ApiHistorialDirecciones();
let hitoLugTrab = new ApiHistorialLugTrab();
let demandasInform = new ApiDemandas();
let datosPer = new ApiDatosPersonales();
let allInformconf = new ApiAllInformconf();


export const status = 200;
export const status2 = 204;

describe("banco - Prueba API - Informconf", () => {

  it("Prueba - API - TokenForService", async () => {
    const tokenAuthentication = await apiHelperPos.methodApiPostCreate();
    console.log(tokenAuthentication.status);
    helper.methodApiExpectResponseStatus(tokenAuthentication.status, status);
  });
  
  it("Prueba - API - Informconf/Convocatorias", async () => {
    const convocatorias = await apiConvocatorias.methodApiGetConvocatorias(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(convocatorias.status);
    helper.methodApiExpectResponseStatus(convocatorias.status, status);
  });

  it("Prueba - API - Informconf/Scoring", async () => {
    const scoring = await apiScoring.methodApiGetScoring(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(scoring.status);
    helper.methodApiExpectResponseStatus(scoring.status, status);
  });

  it("Prueba - API - Informconf/Ultimo Lugar de Trabajo", async () => {
    const trabajo = await ultTrabj.methodApiGetUltLugarTrab(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(trabajo.status);
    helper.methodApiExpectResponseStatus(trabajo.status, status);
  });

  it("Prueba - API - Informconf/Ultima Dirección", async () => {
    const direccion = await ultDirec.methodApiGetUltDirec(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(direccion.status);
    helper.methodApiExpectResponseStatus(direccion.status, status);
  });

  it("Prueba - API - Informconf/Solicitudes", async () => {
    const solicitudes = await solicitudesInfor.methodApiGetSolicitudes(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(solicitudes.status);
    helper.methodApiExpectResponseStatus(solicitudes.status, status);
  });

  it("Prueba - API - Informconf/Remates", async () => {
    const remates = await rematesInfor.methodApiGetRemates(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(remates.status);
    helper.methodApiExpectResponseStatus(remates.status, status);
  });

  it("Prueba - API - Informconf/Quiebras", async () => {
    const quiebras = await quiebrasInfor.methodApiGetQuiebras(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(quiebras.status);
    helper.methodApiExpectResponseStatus(quiebras.status, status);
  });

  it("Prueba - API - Informconf/Morosidades", async () => {
    const morosidades = await morosidadesInform.methodApiGetMorosidades(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(morosidades.status);
    helper.methodApiExpectResponseStatus(morosidades.status, status2);//revisar 
  });

  it("Prueba - API - Informconf/Morosidades Adefi", async () => {
    const morosiAdefi = await moroAdefi.methodApiGetMorosidadesAdefi(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(morosiAdefi.status);
    helper.methodApiExpectResponseStatus(morosiAdefi.status, status2);//revisar
  });

  it("Prueba - API - Informconf/Inhibiciones", async () => {
    const inhibiciones = await inhibicionesInform.methodApiGetInhibiciones(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(inhibiciones.status);
    helper.methodApiExpectResponseStatus(inhibiciones.status, status);
  });

  it("Prueba - API - Informconf/Inhabilitaciones", async () => {
    const inhabilitaciones = await inhabilInform.methodApiGetInhabilitaciones(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(inhabilitaciones.status);
    helper.methodApiExpectResponseStatus(inhabilitaciones.status, status);
  });

  it("Prueba - API - Informconf/Historial Direcciones", async () => {
    const histDirec = await histoDirec.methodApiGetHistorialDirec(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(histDirec.status);
    helper.methodApiExpectResponseStatus(histDirec.status, status);
  });

  it("Prueba - API - Informconf/Historial Lugares de Trabajo", async () => {
    const histLugTrab = await hitoLugTrab.methodApiGetHistorialLugTrab(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(histLugTrab.status);
    helper.methodApiExpectResponseStatus(histLugTrab.status, status);
  }); //Esta dando error validar

  it("Prueba - API - Informconf/Demandas", async () => {
    const demandas = await demandasInform.methodApiGetDemandas(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(demandas.status);
    helper.methodApiExpectResponseStatus(demandas.status, status);
  }); 

  it("Prueba - API - Informconf/Datos Personales", async () => {
    const datosPersonales = await datosPer.methodApiGetDatosPersonales(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(datosPersonales.status);
    helper.methodApiExpectResponseStatus(datosPersonales.status, status);
  }); 

  it("Prueba - API - Informconf/All Informconf", async () => {
    const all = await allInformconf.methodApiGetAll(
      dataApi.apiInformconf.docNumber, dataApi.apiInformconf.personId, dataApi.apiInformconf.solicitationNumber
    );
    console.log(all.status);
    helper.methodApiExpectResponseStatus(all.status, status);
  }); 


});*/