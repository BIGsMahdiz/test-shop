const oneDay = 1 * 24 * 60 * 60;
const oneMonth = 30 * 24 * 60 * 60;

const setCookie = (tokens) => {
  document.cookie = `accessToken=${tokens.access_token};max-age=${oneDay};path=/`;
  document.cookie = `refreshToken=${tokens.refresh_token};max-age=${oneMonth};path=/`;
};

const getCookie = (cookieName) => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${cookieName}=`));
  return cookie ? cookie.split("=")[1] : null;
};

export { setCookie, getCookie };
