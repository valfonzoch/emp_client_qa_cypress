import { ApiHelperPos } from "../../Pages/apisPage/apiTokenPage";
import { ApiTokenUser } from "../../Pages/apisPage/apiTokenUserPage";
import { Assertions } from "../../Pages/helper/assertions";

let apiHelperPos = new ApiHelperPos();
let helper = new Assertions();
let tokenUser = new ApiTokenUser();

export const status = 200;

describe("banco - Prueba API - TokenForService", () => {

  it("Prueba - API - TokenForService", async () => {

    const tokenAuthentication = await apiHelperPos.methodApiPostCreate();
    console.log(tokenAuthentication.status);
    helper.methodApiExpectResponseStatus(tokenAuthentication.status, status);
  });

  it("Prueba - API - Token for user", async () => {
    const userToken = await tokenUser.methodApiTokenUser();
    console.log(userToken.status);
    helper.methodApiExpectResponseStatus(userToken.status, status);
  });
});