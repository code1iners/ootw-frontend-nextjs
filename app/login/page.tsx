"use client";

import TextInput from "@/components/TextInput";
import { Routes } from "@/constants/routes.constant";
import { useAuthStore } from "@/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface Form {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>();
  const { setUser } = useAuthStore();

  const onSubmit = async (form: Form) => {
    try {
      setUser({ id: -1, accessToken: "tester" });

      router.push(Routes.MAIN);
    } catch (err) {
      console.warn((err as Error).message);
      alert("로그인에 실패했습니다.");
    }
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
          register={register("password", { required: "비밀번호를 입력하세요" })}
          type="password"
          placeholder="비밀번호를 입력하세요"
          error={errors.password?.message}
        />
        <button className="border border-black rounded-md py-1" type="submit">
          로그인
        </button>
      </form>

      <section className="mt-5">
        <Link className="" href={Routes.JOIN}>
          <p>
            <small>
              <b>
                <u>회원가입</u>
              </b>
              &nbsp;하러 가기
            </small>
          </p>
        </Link>
      </section>
    </article>
  );
};

export default Login;
