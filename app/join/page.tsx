"use client";

import HorizontalButton from "@/components/HorizontalButton";
import TextInput from "@/components/TextInput";
import { makeRequest } from "@/helpers/api.helper";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface Form {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

const Join = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>();

  useEffect(() => {}, []);

  const onSubmit = async (form: Form) => {
    try {
      alert("회원가입이 성공적으로 처리되었습니다");

      router.back();
    } catch (err) {
      console.warn((err as Error).message);
      alert("회원가입이 실패했습니다.");
    }
  };

  const onBackClick = () => {
    router.back();
  };

  return (
    <article className="w-screen h-screen flex flex-col justify-center items-center">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          register={register("email", { required: "아이디를 입력하세요" })}
          type="email"
          placeholder="아이디를 입력하세요"
          error={errors.email?.message}
        />
        <TextInput
          register={register("password", {
            required: "비밀번호를 입력하세요",
            maxLength: { value: 20, message: "20자를 초과할 수 없습니다" },
            minLength: { value: 8, message: "8자 이상 입력해주세요" },
            validate: {
              lowerCase: (value) =>
                /[a-z]/g.test(value) ? true : "소문자가 포함되어야 합니다",
              upperCase: (value) =>
                /[A-Z]/g.test(value) ? true : "대문자가 포함되어야 합니다",
              number: (value) =>
                /[0-9]/g.test(value) ? true : "숫자가 포함되어야 합니다",
            },
          })}
          type="password"
          placeholder="비밀번호를 입력하세요"
          error={errors.password?.message}
        />
        <TextInput
          register={register("confirmPassword", {
            required: "비밀번호 확인을 입력하세요",
            validate: {
              isNotSameWithPassword: (value, form) => {
                if (form.password === value) return true;
                return `비밀번호가 다릅니다`;
              },
            },
          })}
          type="password"
          placeholder="비밀번호 확인을 입력하세요"
          error={errors.confirmPassword?.message}
        />
        <TextInput
          register={register("phoneNumber", {
            required: "전화번호를 입력하세요",
            validate: {
              onlyNumber: (value) =>
                /\D/.test(value) ? "숫자만 입력하세요" : true,
            },
          })}
          type="tel"
          placeholder="전화번호를 입력하세요"
          error={errors.phoneNumber?.message}
        />
        <HorizontalButton>회원가입</HorizontalButton>
      </form>

      <section className="mt-5">
        <p className="cursor-pointer" onClick={onBackClick}>
          <small>
            이미{" "}
            <b>
              <u>계정</u>
            </b>
            을 가지고 있습니다
          </small>
        </p>
      </section>
    </article>
  );
};

export default Join;
