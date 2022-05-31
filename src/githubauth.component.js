import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { client, Provider, useMutation } from "@cancy-project/api";
import { auth$ as auth, login } from "@cancy-project/auth-helper";

const AuthGithubMutation = `
  mutation ($code: String!) {
    authGithub (code: $code) {
      token
    }
  }
`;

const Container = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get("code");
  if (!code) {
    return <p>{"Unauthenticated"}</p>;
  }
  return (
    <Provider value={client}>
      <GithubAuth code={code} />
    </Provider>
  );
};

const GithubAuth = ({ code }) => {
  const navigate = useNavigate();
  const [authGithubResult, authGithub] = useMutation(AuthGithubMutation);
  const { error, data } = authGithubResult;

  useEffect(() => {
    auth.subscribe(({ authState }) => {
      navigate("/");
    });
    authGithub({ code });
  }, []);

  useEffect(() => {
    if (data && data.authGithub) {
      login(data.authGithub.token);
    }
  }, [data]);

  if (error) {
    return <p>{"... error ..."}</p>;
  }
  return <p>{"... Loading ..."}</p>;
};

export default Container;
