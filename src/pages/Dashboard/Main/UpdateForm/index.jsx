import React, { useContext } from 'react'
import { UserContext } from '../../../../providers/UserContext';
import { TechContext } from '../../../../providers/TechContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { StyledUpdateFormModal } from './styles';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';

const  UpdateForm= () => {
    const { handleModal2 } = useContext(UserContext)
    const { currentTech, updateTech, deleteTech } = useContext(TechContext);
    
    const updateTechSchema = yup.object({
        status: yup.string().required("Status é obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues:{
            title: currentTech.title,
            status: currentTech.status
        },
        resolver: yupResolver(updateTechSchema),
    });

    const submitForm = (formData) => {
        updateTech(formData, currentTech.id);
        handleModal2();
    };

    const removeTech = () => {
        deleteTech(currentTech.id);
        handleModal2();
    }

    return (
        <StyledUpdateFormModal
            className="modal-body"
            onSubmit={handleSubmit(submitForm)}
        >
            <Input
                label={"Nome"}
                type={"text"}
                register={register("title")}
                errors={errors.title}
                disabled={true}
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

            <div>
                <button type="submit" className="form-submit-btn">
                    Salvar Alterações
                </button>
                <button type="button" className="form-delete-btn" onClick={removeTech} >
                    Excluir
                </button>
            </div>
        </StyledUpdateFormModal>
    )
}

export default UpdateForm