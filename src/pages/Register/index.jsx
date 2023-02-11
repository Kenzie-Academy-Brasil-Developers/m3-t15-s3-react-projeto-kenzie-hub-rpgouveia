import React from 'react'
import Logo from '../../components/Logo'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from '../../components/Input'
import Select from '../../components/Select'

const Register = ({registerUser}) => {
    const registerFormSchema = yup.object({
        name:
            yup
            .string()
            .required('Nome é obrigatório'),
        email:
            yup
            .string()
            .required('Email é obrigatório')
            .email('Email inválido'),
        password:
            yup
            .string()
            .required('Senha é obrigatória')
            .matches(/(\d)/, 'Deve conter ao menos 1 número')
            .matches(/[a-z]/, 'Deve conter ao menos 1 letra minúscula')
            .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
            .matches(/(\W|_)/, 'Deve conter ao menos 1 caractere especial')
            .matches(/.{8,}/, 'Deve conter ao menos 8 caracteres'),
        confirm_password:
            yup
            .string()
            .required('Confirmação de senha é obrigatório')
            .oneOf([yup.ref('password')], 'A confirmação de senha deve ser igual a senha'),
        bio:
            yup
            .string()
            .required('Bio é obrigatório'),
        contact:
            yup
            .string()
            .required('Contato é obrigatório'),
        course_module:
            yup
            .string()
            .required('Módulo de curso é obrigatório'),
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        resolver: yupResolver(registerFormSchema)
    })

    const submitForm = (formData) => {
        console.log('Dados do formulário: ', formData)
        registerUser(formData)
        reset()
    }

    return (
        <main>
            <div>
                <Logo />
                <Link to={'/'}>Voltar</Link>
            </div>
            <form onSubmit={handleSubmit(submitForm)}>
                <h1>Crie sua conta</h1>
                <p>Rápido e grátis, vamos nessa</p>
                <Input 
                    label={'Nome'}
                    type={'text'}
                    placeholder={'Digite aqui seu nome'}
                    register={register('name')}
                    errors={errors.name}
                />
                <Input
                    label={'Email'}
                    type={'email'}
                    placeholder={'Digite aqui seu email'}
                    register={register('email')}
                    errors={errors.email}
                />
                <Input
                    label={'Senha'}
                    type={'password'}
                    placeholder={'Digite aqui sua senha'}
                    register={register('password')}
                    errors={errors.password}
                />
                <Input
                    label={'Confirmar senha'}
                    type={'password'}
                    placeholder={'Digite aqui sua senha'}
                    register={register('confirm_password')}
                    errors={errors.confirm_password}
                />
                <Input
                    label={'Bio'}
                    type={'text'}
                    placeholder={'Fale sobre você'}
                    register={register('bio')}
                    errors={errors.bio}
                />
                <Input
                    label={'Contato'}
                    type={'text'}
                    placeholder={'Opção de contato'}
                    register={register('contact')}
                    errors={errors.contact}
                />
                <Select
                    label={'Selecionar módulo'}
                    type={'select'}
                    register={register('course_module')}
                    errors={errors.course_module}
                >
                    <option value={'Primeiro módulo'} >Primeiro Módulo</option>
                    <option value={'Segundo módulo'} >Segundo Módulo</option>
                    <option value={'Terceiro módulo'} >Terceiro Módulo</option>
                    <option value={'Quarto módulo'} >Quarto Módulo</option>
                </Select>
                <button>Cadastrar</button>
            </form>
        </main>
    )
}

export default Register