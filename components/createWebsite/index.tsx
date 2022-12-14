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
                          totalDesigns: 7,
                          designNum: 1,
                          compData: {
                            title:
                              "<h1 class='text-4xl'>clothes is a leading business in the clothes industry</h1>",
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
                          compName: "about",
                          backgroundImage: "",
                          bgImgColor: {
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 0,
                          },
                          totalDesigns: 7,
                          designNum: 6,
                          enableBgColor: false,
                          selectedBgImg: "",
                          compData: {
                            title:
                              "<h1 class='text-4xl font-semibold'>About Us</h1>",
                            subTitle:
                              "<p>Write about your businesses background, including your history, accomplishments and any awards you may have received. Use this section to show your brand’s personality.</p>",
                            btn: "<span>Learn More</span>",
                            pic: "https://images.unsplash.com/photo-1483706571191-85c0c76b1947?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79d169c2bf199ce6912f72c20ec301e4&auto=format&fit=crop&w=500&q=80",
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
                          compName: "contact",
                          backgroundImage: "",
                          bgImgColor: {
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 0,
                          },
                          totalDesigns: 2,
                          designNum: 1,
                          enableBgColor: false,
                          selectedBgImg: "",
                          compData: {
                            contacts: [
                              {
                                details:
                                  "<p class='text-xs text-gray-300'>info@business.com</p>",
                                iconName: "email",
                                title:
                                  "<h1 class='4xl font-semibold'>email</h1>",
                                id: 1,
                              },
                              {
                                details:
                                  "<p class='text-xs text-gray-300'>1(800) - 374 - 990</p>",
                                iconName: "phone",
                                title:
                                  "<h1 class='4xl font-semibold'>Phone</h1>",
                                id: 2,
                              },
                              {
                                details:
                                  "<p class='text-xs text-gray-300'>301 W. 41st Street, Suite 501 Miami Beach, FL 33140</p>",
                                iconName: "address",
                                title:
                                  "<h1 class='4xl font-semibold'>Address</h1>",
                                id: 3,
                              },
                            ],
                            items: [
                              {
                                id: 1,
                                inputType: "text",
                                placeHolder: "Name",
                                required: false,
                              },
                              {
                                id: 2,
                                inputType: "email",
                                placeHolder: "Email",
                                required: false,
                              },
                              {
                                id: 3,
                                inputType: "tel",
                                placeHolder: "Phone",
                                required: false,
                              },
                              {
                                id: 4,
                                inputType: "text",
                                placeHolder: "Address",
                                required: false,
                              },
                              {
                                id: 5,
                                inputType: "textarea",
                                placeHolder: "Message",
                                required: false,
                              },
                            ],
                            title:
                              "<h1 class='text-4xl font-semibold'>Contact Us</h1>",
                            subTitle:
                              "<p>Our team is always available to assist you.</p>",
                            btn: "<span>Send</span>",
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
                      bgImg: false,
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
