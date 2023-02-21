import React, { useContext } from 'react'
import { UserContext } from '../../../../providers/UserContext';
import { TechContext } from '../../../../providers/TechContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { StyledRegisterFormModal } from './styles';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';

const RegisterForm = () => {
    const { handleModal1 } = useContext(UserContext)
    const { registerTech } = useContext(TechContext);
    
    const registerTechSchema = yup.object({
        title: yup.string().required("Nome da tecnologia é obrigatório"),
        status: yup.string().required("Status é obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerTechSchema),
    });

    const submitForm = (formData) => {
        registerTech(formData);
        handleModal1();
    };

    return (
        <StyledRegisterFormModal
            className="modal-body"
            onSubmit={handleSubmit(submitForm)}
        >
            <Input
                label={"Nome"}
                type={"text"}
                placeholder={"Digite a tecnologia"}
                register={register("title")}
                errors={errors.title}
            />
            <Select
                label={"Selecionar status"}
                type={"select"}
                register={register("status")}
                errors={errors.status}
            >
                <option value={""}></option>
                <option value={"Iniciante"}>Iniciante</option>
                <option value={"Intermediário"}>Intermediário</option>
                <option value={"Avançado"}>Avançado</option>
            </Select>
            <button type="submit" className="form-submit-btn">
                Cadastrar Tecnologia
            </button>
        </StyledRegisterFormModal>
    )
}

export default RegisterForm