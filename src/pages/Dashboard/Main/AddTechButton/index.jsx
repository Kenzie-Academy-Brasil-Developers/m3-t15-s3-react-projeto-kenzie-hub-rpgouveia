import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { StyledAddTechButton, StyledRegisterModal } from "./styles";
import { UserContext } from "../../../../providers/UserContext";
import { TechContext } from "../../../../providers/TechContext";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

Modal.setAppElement("#root");

const AddTechButton = () => {
    const { modalIsOpen, handleModal } = useContext(UserContext);
    const { registerTech } = useContext(TechContext)

    const modalCustomStyles = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
    };

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
        handleModal()
    };

    return (
        <>
            <StyledAddTechButton type="button" onClick={handleModal}>
                <FaPlus />
            </StyledAddTechButton>

            <StyledRegisterModal
                isOpen={modalIsOpen}
                onRequestClose={handleModal}
                style={modalCustomStyles}
            >
                <div className="modal-header">
                    <h1>Cadastrar Tecnologia</h1>
                    <button type="button" onClick={handleModal}>
                        X
                    </button>
                </div>
                <form
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
                    <button type="submit">Cadastrar Tecnologia</button>
                </form>
            </StyledRegisterModal>
        </>
    );
};

export default AddTechButton;
