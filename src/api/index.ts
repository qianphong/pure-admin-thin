// import { UserLogin } from "@/service/api/User";

export async function login(_params: Store["loginParams"]) {
  // const { data } = await UserLogin(params);
  return Promise.resolve({
    id: 123,
    userName: "演示账户",
    token: "token123"
  });
}

type Result = {
  success: boolean;
  data: Array<any>;
};

export const getAsyncRoutes = () => {
  return Promise.resolve<Result>({ success: true, data: [] });
};
