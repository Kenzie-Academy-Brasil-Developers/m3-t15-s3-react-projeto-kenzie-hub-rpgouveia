import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import { StyledContainer } from "../../styles/container";
import { StyledMainLogin } from "./styles";

const Login = () => {
    const { loginUser } = useContext(UserContext);

    const [loading, setLoading] = useState(true); // ?

    const loginFormSchema = yup.object({
        email: yup.string().required("Email é obrigatório"),
        password: yup.string().required("Senha é obrigatória"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(loginFormSchema),
    });

    const submitForm = (formData) => {
        loginUser(formData);
        reset();
    };

    return (
        <StyledMainLogin>
            <StyledContainer>
                <section>
                    <Logo />
                    <form onSubmit={handleSubmit(submitForm)}>
                        <h1>Login</h1>
                        <Input
                            label={"Email"}
                            type={"email"}
                            placeholder={"Digite seu email"}
                            register={register("email")}
                            errors={errors.email}
                        />
                        <Input
                            label={"Senha"}
                            type={"password"}
                            placeholder={"Digite sua senha"}
                            register={register("password")}
                            errors={errors.password}
                        />
                        <button type="submit">Entrar</button>
                        <div>
                            <p>Ainda não possui uma conta?</p>
                            <Link to={"/register"}>Cadastre-se</Link>
                        </div>
                    </form>
                </section>
            </StyledContainer>
        </StyledMainLogin>
    );
};

export default Login;
