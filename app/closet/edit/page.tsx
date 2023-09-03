"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import UserGuard from "@/components/UserGuard";
import { ENTER_CLOSET_NAME } from "@/constants/placeholder.constant";
import HorizontalButton from "@/components/HorizontalButton";
import Image from "next/image";

interface Form {
  photoFile?: FileList;
  name: string;
}

const ClosetEdit = () => {
  const [photoFileURL, setPhotoFileURL] = useState("");

  const {
    register,
    getValues,
    setValue,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Form>();

  const onSubmit = (form: Form) => {
    try {
      alert("옷 정보가 저장되었습니다.");
    } catch (err) {
      console.warn((err as Error).message);
      alert("옷 정보 저장을 실패했습니다.");
    }
  };

  useEffect(() => {
    setValue("name", "얇은 반팔");
  }, []);

  useEffect(() => {
    const photo = getValues("photoFile")?.item(0);
    console.log(photo);
    if (photo) {
      const url = URL.createObjectURL(photo);
      setPhotoFileURL(url);
    }
  }, [watch("photoFile")]);

  return (
    <UserGuard>
      <section className="core-padding page__container">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 items-center">
            <label
              className="w-44 h-44 rounded-full overflow-hidden border-2 border-dashed border-blue-400 hover:border-4 cursor-pointer"
              htmlFor="photo"
            >
              <input
                {...register("photoFile")}
                id="photo"
                className="hidden"
                type="file"
                accept="image/*"
              />
              {photoFileURL && (
                <Image
                  className="object-cover w-full h-full"
                  src={photoFileURL}
                  width={180}
                  height={180}
                  alt="Selected file image"
                />
              )}
            </label>

            <input
              className="text-3xl outline-none text-center"
              type="text"
              placeholder={ENTER_CLOSET_NAME}
              {...register("name", {
                required: ENTER_CLOSET_NAME,
                value: "얇은 반팔",
              })}
            />
            {errors.name?.message && (
              <small className="text-red-500 ">{errors.name.message}</small>
            )}
          </div>

          <HorizontalButton>저장</HorizontalButton>
        </form>
      </section>
    </UserGuard>
  );
};

export default ClosetEdit;
