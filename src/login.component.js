import { useState, useEffect } from "react";

const clientId = process.env.GITHUB_CLIENT_ID;
const scope = "user";

const Login = () => {
  const [authLink, setAuthLink] = useState(null);

  useEffect(() => {
    const redirectUri = `${window.location.origin}/github/auth`;
    const query = `scope=${scope}&client_id=${clientId}&redirect_uri=${redirectUri}`;
    const authLink = `https://github.com/login/oauth/authorize?${query}`;
    setAuthLink(authLink);
  }, []);

  if (!authLink) {
    return <p>{"..."}</p>;
  }
  return <a href={authLink}>{"Login with GitHub"}</a>;
};

export default Login;
