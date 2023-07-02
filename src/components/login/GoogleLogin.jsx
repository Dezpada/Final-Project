import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";

function GoogleLogin({ log }) {
  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_API_KEY}/auth/oauth`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      localStorage.setItem("token", token);

      // navigate("/");

      // Temporary solution
      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      registerLoginWithGoogleAction(responseGoogle.access_token),
  });
  return (
    <Button variant="white border" onClick={() => loginWithGoogle()}>
      <img src="../../../img/Google_Logo.svg" alt="glogo" width={20} />
      {log} dengan Google
    </Button>
  );
}

export default GoogleLogin;
