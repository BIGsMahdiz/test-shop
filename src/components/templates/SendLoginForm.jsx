import { useState } from "react";
import { Button, Container, Grid2, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import { sendData } from "@/services/auth";
import { setCookie } from "@/utils/cookie";
import { getProfile, isAvailable } from "@/services/profile";

import styles from "@/styles/SendLoginForm.module.css";

function SendLoginForm() {
  const navigate = useNavigate("");
  // const [checkError, setCheckError] = useState("");
  const { refetch } = useQuery({
    queryKey: ["get-profile"],
    queryFn: getProfile,
  });
  // const { isLoading, data, mutate } = useMutation({
  //   mutationFn: (email) => isAvailable(email),
  //   onSuccess: (data) => {
  //     console.log("Success:", data);
  //     setCheckError(data?.data.isAvailable);
  //     console.log(checkError);
  //   },
  //   onError: (error) => {
  //     console.log("Error:", error.response?.status, error.message);
  //   },
  // });
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setForm((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!form.email && !form.password) return;

    // mutate(form.email);

    // if (!checkError) return;

    const res = await sendData(form);

    if (!res) return;

    setCookie(res.data);
    navigate("/");
    refetch();

    console.log(res);
  };
  return (
    <div className={styles.back}>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Grid2 container>
          <form onSubmit={submitHandler}>
            <Grid2
              container
              spacing={2}
              sx={{
                border: "1px solid grey",
                borderRadius: "15px",
                padding: "110px 20px",
                flexDirection: "column",
              }}
              className={styles.login}
            >
              <Typography variant="h4" component="h4" className={styles.textan}>
                Welcome back to Technoitem
              </Typography>
              <Typography variant="p" component="p">
                Please enter your details :)
              </Typography>
              <Grid2 size={{ xs: 12 }}>
                {/* {!checkError && (
                  <TextField
                    error
                    onChange={changeHandler}
                    name="email"
                    label="Error"
                    helperText="its email is availble"
                    fullWidth
                  />
                )} */}
                <TextField
                  onChange={changeHandler}
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <TextField
                  onChange={changeHandler}
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <Button type="submit" variant="outlined" fullWidth>
                  Login
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </Grid2>
      </Container>
    </div>
  );
}

export default SendLoginForm;
