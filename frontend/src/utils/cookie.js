const setCookie = (tokens) => {
  document.cookie = `accessToken=${tokens.accessToken}; max-age=${
    1 * 24 * 60 * 60
  }; path=/`;
  document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${
    1 * 24 * 60 * 60
  }; path=/`;
};

export { setCookie };
