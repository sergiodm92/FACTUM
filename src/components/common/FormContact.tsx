"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { sendContactEmail } from "@services/send-email";


export const FormContact = () => {

  const { t } = useTranslation();

  const schema = yup.object().shape({
    name: yup.string().required(t("contact.name_required")),
    email: yup.string().email(t("contact.email_required")).required(t("contact.email_required")),
    message: yup.string().required(t("contact.message_required")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(schema),
  });

  interface ContactFormInputs {
    name: string;
    email: string;
    message: string;
  }

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      await sendContactEmail(data);
      toast.success(t("contact.success_message"));
      reset();
    } catch (error: any) {
      if (error.message === "RATE_LIMIT") {
        toast.error(t("contact.error_rate_limit"));
      } else {
        toast.error(t("contact.error_send_message"));
      }
    }
  };

  return (
    <form
      className="space-y-6 w-full max-w-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t("contact.name")}
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className={`mt-1 block w-full rounded-md h-10 pl-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800 dark:text-white ${errors.name ? "border-red-500" : ""
            }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t("contact.email")}
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`mt-1 block w-full rounded-md h-10 pl-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800 dark:text-white ${errors.email ? "border-red-500" : ""
            }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t("contact.message")}
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={`mt-1 block w-full rounded-md pl-2 pt-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-800 dark:text-white ${errors.message ? "border-red-500" : ""
            }`}
          style={{ resize: "none" }}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Button Send*/}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-3 rounded-md text-white transition-colors ${isSubmitting
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-orange-600 hover:bg-orange-700"
          }`}
      >
        {isSubmitting ? t("contact.sending") : t("contact.send_message")}
      </button>
    </form>
  );
};


