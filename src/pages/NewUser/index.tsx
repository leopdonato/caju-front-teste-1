import TextField from "~/components/TextField";
import * as S from "./styles";
import Button from "~/components/Buttons";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "~/components/Buttons/IconButton";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";
import { Controller, FieldError, FieldErrorsImpl, Merge, useForm } from 'react-hook-form';
import { Employee } from '~/types';
import { createEmployeeRegistration } from '~/services/registrations';
import StatusEnum from '~/enums/StatusEnum';
import { cpfIsValid } from 'cpf-is-valid';
import { ChangeEvent } from 'react';
import { setMask } from 'react-input-mask-br';

const NewUserPage = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push(routes.dashboard);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<Employee>();

  const getRandomId = () => {
    return `${Math.floor(Math.random() * (1000 - 1)) + 1}`;
  }

  const onSubmit = (data: Employee) => {
    const payload = {
      ...data,
      cpf: data.cpf.replace(/[.-]/g, ""),
      id: getRandomId(),
      status: StatusEnum.REVIEW,
    };

    createEmployeeRegistration(payload).then(() => goToHome());
  };

  const getFormError = (
    fieldName: string,
    fieldError: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  ): string => {
    if (!fieldError) {
      return "";
    }

    if (fieldError.type === "required") {
      return `${fieldName} é obrigatório!`;
    } else {
      return `${fieldError.message}`;
    }
  };

  return (
    <S.Container>
      <S.Card onSubmit={handleSubmit(onSubmit)}>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <TextField
          {...register("employeeName", {
            required: true,
            pattern: {
              value: /^[A-Za-z]\S{1,}\s.+$/,
              message: "O valor não corresponde ao formato nome",
            },
          })}
          id="name"
          placeholder="Nome"
          label="Nome"
          aria-invalid={errors.employeeName ? "true" : "false"}
          error={getFormError("Nome completo", errors.employeeName)}
        />
        <TextField
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "O valor não corresponde ao formato e-mail",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
          error={getFormError("Email", errors.email)}
          id="email"
          placeholder="Email"
          label="Email"
          type="email" />
        <Controller
          control={control}
          rules={{
            required: true,
            validate: cpfIsValid,
          }}
          render={({ field: { value, onChange } }) => (
            <TextField
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                e.persist();
                const formattedCpf = setMask({
                  type: "cpf",
                  value: e.target.value,
                });
                onChange(formattedCpf);
              }}
              id="cpf"
              placeholder="CPF"
              label="CPF"
              value={value || ""}
              error={getFormError("CPF", errors.cpf)}
            />
          )}
          name="cpf"
        />
        <TextField
        {...register("admissionDate", { required: true })}
        aria-invalid={errors.admissionDate ? "true" : "false"}
        error={getFormError("Data de admissão", errors.admissionDate)}
        id="date"
        label="Data de admissão" 
        type="date" />
        <Button type="submit">Cadastrar</Button>
      </S.Card>
    </S.Container>
  );
};

export default NewUserPage;
