import { Formik } from "formik";
import * as Yup from "yup";
import { toastSuccess } from "@/utils/Toastify";

import { Modal, Input, Button, ConfigProvider, Select } from "antd";

const ModalRegister = ({ open, setOpen, openLogin }) => {
  const initialValues = {
    email: "",
    password: "",
    fullname: "",
    gender: "",
    phone: "",
    role: "",
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
          .min(5, "Email must be 5 characters or then")
          .required("Email is required"),
        password: Yup.string()
          .min(8, "password must be 10 characters or then")
          .required("Password is required"),
        fullname: Yup.string()
          .min(3, "Name must be 3 characters or then")
          .required("Fullname is required"),
        genderL: Yup.string(),
        phone: Yup.string().max(15, "Phone must be 15 characters or less"),
        role: Yup.string().required("Role is required"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          alert(JSON.stringify(values, null, 2));
          onClose();

          setTimeout(() => {
            setSubmitting(false);
            toastSuccess(`Register Success`);
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
              <h1 className="font-bold text-4xl text-primary mb-5">Register</h1>

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

              <div>
                <Input
                  size="large"
                  placeholder="Your name here.."
                  {...formik.getFieldProps("fullname")}
                  className="my-2"
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className="text-red-600">{formik.errors.fullname}</div>
                ) : null}
              </div>

              <div>
                <Input
                  size="large"
                  placeholder="Gender here.."
                  {...formik.getFieldProps("gender")}
                  className="my-2"
                />
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="text-red-600">{formik.errors.gender}</div>
                ) : null}
              </div>

              <div>
                <Input
                  size="large"
                  placeholder="Phone number here.."
                  {...formik.getFieldProps("phone")}
                  className="my-2"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-600">{formik.errors.phone}</div>
                ) : null}
              </div>
              <div>
                <Select
                  size="large"
                  placeholder="Select your role"
                  onChange={(e) => formik.setFieldValue("role", e)}
                  style={{
                    width: "100%",
                  }}
                  className="my-2"
                  options={[
                    {
                      value: "partner",
                      label: "As Partner",
                    },
                    {
                      value: "user",
                      label: "As User",
                    },
                  ]}
                />
                {formik.touched.role && formik.errors.role ? (
                  <div className="text-red-600">{formik.errors.role}</div>
                ) : null}
              </div>

              <Button
                type="primary"
                size="large"
                className="bg-secondary mt-4 mb-2 font-medium"
                htmlType="submit"
              >
                Register
              </Button>

              <p className="text-tersier text-base text-center">
                Already have an account ? Klik{" "}
                <span
                  className="font-bold cursor-pointer hover:underline"
                  onClick={openLogin}
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

export default ModalRegister;
