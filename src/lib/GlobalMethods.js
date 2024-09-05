import { parseCookies } from "nookies";

export const GetUserToken = () => {
  const cookies = parseCookies();
  const token = cookies.accessToken;
  return token;
};

export const handleToast = (setToast, reponse, redirectTo, navigate) => {
  const type = reponse.status === 200 ? "success" : "failure";
  let message = reponse.data.message || "Something Went Wrong";

  setToast((items) => ({
    ...items,
    type,
    message,
    isVisible: true,
  }));

  setTimeout(() => {
    setToast((items) => ({
      ...items,
      isVisible: false,
    }));
    return redirectTo ? navigate(redirectTo) : <></>;
  }, 2295);
};
