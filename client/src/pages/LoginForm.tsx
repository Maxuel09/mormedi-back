import { useForm } from "react-hook-form";
import { TextField, Button, Stack } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import axios from "axios";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const onSubmit =  async (data: FormValues) => {
  //   //console.log(data); // post to back endpoint
  //  axios.post("http://localhost:4000/auth", data) 
  // };

  const onSubmit = async (data:FormValues) => {
    try {
        const response = await axios.post("http://localhost:4000/auth", data);
        console.log("Post created:", response.data);
    } catch (error) {
        console.error("Error creating post:", error);
    }
};







  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={400}>
          <TextField
            label="Email"
            type="email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default LoginForm
