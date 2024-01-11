import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import { toastSuccess } from "@/utils/Toastify";

import { Modal, Input, Button, ConfigProvider, Space } from "antd";

const ModalLogin = ({ open, setOpen, openRegister }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onClose = () => {
    setOpen();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string()
          .email()
          .min(5, "Must be 5 characters or then")
          .required("Email is required"),
        password: Yup.string()
          .min(8, "password must be 10 characters or then")
          .required("Password is required"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          alert(JSON.stringify(values, null, 2));
          onClose();

          setTimeout(() => {
            setSubmitting(false);
            toastSuccess(`Login Success`);
            resetForm();
          }, 400);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {(formik) => (
        <Modal
          open={open}
          closable={true}
          onCancel={() => {
            formik.resetForm();
            onClose();
          }}
          footer={[]}
          maskClosable={false}
        >
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#FFC700",
              },
              components: {
                Button: {
                  colorPrimary: "#433434",
                  algorithm: true, // Enable algorithm
                },
                Input: {
                  colorPrimary: "#FFC700",
                  algorithm: true, // Enable algorithm
                },
              },
            }}
          >
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-1"
            >
              <h1 className="font-bold text-4xl text-primary mb-5">Login</h1>

              <div>
                <Input
                  size="large"
                  placeholder="Email here.."
                  {...formik.getFieldProps("email")}
                  className="my-2"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-600">{formik.errors.email}</div>
                ) : null}
              </div>

              <div>
                <Input
                  size="large"
                  placeholder="Password here.."
                  {...formik.getFieldProps("password")}
                  className="my-2"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-600">{formik.errors.password}</div>
                ) : null}
              </div>

              <Button
                type="primary"
                size="large"
                className="bg-secondary mt-4 mb-2 font-medium"
                htmlType="submit"
              >
                Login
              </Button>

              <p className="text-tersier text-base text-center">
                Don&apos;t have an account ? Klik{" "}
                <span
                  className="font-bold cursor-pointer hover:underline"
                  onClick={openRegister}
                >
                  Here
                </span>
              </p>
            </form>
          </ConfigProvider>
        </Modal>
      )}
    </Formik>
  );
};

export default ModalLogin;
