import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../utlis/firebase";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlineClose } from "react-icons/ai";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateWebsite = ({ user }) => {
  const { push } = useRouter();
  const docRef = collection(db, "themes");

  return (
    <div
      style={{ boxShadow: "1px 0 3px 0 rgba(0,0,0,.3)" }}
      className="bg-white px-4 w-full"
    >
      <div className="flex lg:flex-row md:flex-row flex-col gap-4 lg:items-center md:items-center items-start justify-between container m-auto lg:py-14 md:py-14 py-8">
        <div className="space-y-2 ">
          <h1 className="lg:text-3xl md:text-2xl text-lg text-[#1A1A1A] font-bold">
            Manage your sites
          </h1>
          <span className="block lg:text-base md:text-base text-xs text-[rgba(0,0,0,.6)]">
            From here you can manage / upgrade or modify your site settings
          </span>
        </div>
        <div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                onClick={() => {}}
                className="text-white bg-[#00a991] hover:bg-[#0ea08a]  py-2 px-5 lg:text-base md:text-base text-xs rounded-full"
              >
                Create New Website
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogTitle">
                  Create New Website
                </Dialog.Title>
                <Dialog.Description className="DialogDescription">
                  {
                    "Enter your website details here. Click create when you're done."
                  }
                </Dialog.Description>
                <Formik
                  initialValues={{ webSiteName: "", email: "", mobile: "" }}
                  validationSchema={Yup.object({
                    webSiteName: Yup.string()
                      .max(15, "Must be 15 characters or less")
                      .required("Required"),

                    mobile: Yup.string()
                      .max(20, "Must be 20 characters or less")
                      .required("Required"),
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Required"),
                  })}
                  onSubmit={async (values, { setSubmitting }) => {
                    const { email, mobile, webSiteName } = values;
                    const webData = {
                      addSection: false,
                      allSections: [
                        {
                          id: Math.floor(Math.random() * Date.now()).toString(),
                          compName: "hero",
                          totalDesigns: 5,
                          designNum: 1,
                          compData: {
                            title:
                              "<h1 class='text-4xl  mb-5'>clothes is a leading business in the clothes industry</h1>",
                            subTitle:
                              "<span class='tinymce-header'>Learn about our services and join our community today </span>",
                            primaryBtn: "<span>shop now</span>",
                            secondaryBtn: "<span>Learn More</span>",
                            pic: "https://images.unsplash.com/photo-1580197370215-38fdb17dfe8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1590&q=80",
                          },
                          backgroundColor: {
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 1,
                          },
                        },
                        {
                          id: Math.floor(Math.random() * Date.now()).toString(),
                          compName: "footer",
                          designNum: 1,
                          totalDesigns: 5,
                          compData: {
                            desc: "<p class='mb-5'>orem ipsum dolor sit amet, consectetuputate eros. Fusce imperdiet condimentum augue, ut ull</p>",
                            copyRight:
                              "<span class='inline-block text-lg text-gray-400'>© All rights reserved</span>",
                          },
                          backgroundColor: {
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 1,
                          },
                        },
                      ],
                      colorsEdit: false,
                      compName: "",
                      containerWidth: "100%",
                      editEffects: false,
                      editFiles: false,
                      editImg: false,
                      editSections: false,
                      fontEdit: false,
                      itemIndex: 0,
                      nextIndex: 0,
                      selectSection: false,
                      stylesEditing: false,
                      themeColor: "Captain-Green",
                      themeFont: "sans",
                      themeEffect: "no-animation",
                      userId: user?.uid,
                      websiteInfo: {
                        webSiteName,
                        email,
                        mobile,
                        createdAt: serverTimestamp(),
                      },
                    };

                    try {
                      const website = await addDoc(docRef, webData);
                      push(`/site/${website.id}`);
                    } catch (error) {}

                    setSubmitting(false);
                  }}
                >
                  <Form className="space-y-2">
                    <div>
                      <label className="Label" htmlFor="webSiteName">
                        Website Name
                      </label>
                      <Field className="Input" name="webSiteName" type="text" />
                      <div className="h-4">
                        <ErrorMessage
                          component="div"
                          className="text-sm text-red-500"
                          name="webSiteName"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="Label" htmlFor="mobile">
                        mobile
                      </label>
                      <Field className="Input" name="mobile" type="text" />
                      <div className="h-4">
                        <ErrorMessage
                          component="div"
                          className="text-sm text-red-500"
                          name="mobile"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="Label" htmlFor="email">
                        Email Address
                      </label>
                      <Field className="Input" name="email" type="email" />
                      <div className="h-4">
                        <ErrorMessage
                          component="div"
                          className="text-sm text-red-500"
                          name="email"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginTop: 25,
                        justifyContent: "flex-end",
                      }}
                    >
                      {/* <Dialog.Close asChild> */}
                      <button type="submit" className="Button green">
                        Create
                      </button>
                      {/* </Dialog.Close> */}
                    </div>
                  </Form>
                </Formik>

                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <AiOutlineClose />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
};

export default CreateWebsite;
