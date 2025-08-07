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

export { setCookie, getCookie };
