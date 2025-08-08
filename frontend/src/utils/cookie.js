const setCookie = (tokens) => {
  document.cookie = `accessToken=${tokens.accessToken}; max-age=${
    1 * 24 * 60 * 60
  }; path=/`;
  document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${
    1 * 24 * 60 * 60
  }; path=/`;
};

const getCookie = (name) => {
  return document.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === name)
    ?.split("=")[1];
};

const clearCookie = () => {
  document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};

export { setCookie, getCookie, clearCookie };
