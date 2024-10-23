import { Button, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../redux/postSlice";
import { useNavigate, useParams } from "react-router";
import { valSchema } from "./AddForm";




const EditForm = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const nav = useNavigate();
  const { posts } = useSelector((state) => state.postSlice);

  const post = posts.find((post) => post.id === id);




  return (
    <div className="p-5 max-w-[330px]">
      <Typography variant="h4" className="mb-4">Add a Post</Typography>
      <Formik
        initialValues={{
          title: post.title,
          detail: post.detail,
          pLang: post.pLang,
          country: post.country
        }}
        onSubmit={(val) => {
          dispatch(updatePost({ ...val, id: post.id }));
          nav(-1);
        }}
        validationSchema={valSchema}
      >
        {({ values, handleChange, handleSubmit, setFieldValue, errors, touched }) => {

          return <form onSubmit={handleSubmit} className="space-y-5">

            <div className="space-y-2">
              <Input
                value={values.title}
                onChange={handleChange}
                label="Title"
                name="title"
              />
              {errors.title && touched.title && <p className="text-red-500">{errors.title}</p>}
            </div>
            <div className="">
              <div className="flex gap-10">
                <Radio
                  name="pLang"
                  label="HTML"
                  checked={values.pLang === "HTML"}
                  onChange={handleChange} value="HTML" />
                <Radio
                  name="pLang"
                  label="React"
                  value="REACT"
                  checked={values.pLang === "REACT"}
                  onChange={handleChange} />
              </div>

              {
                errors.pLang && touched.pLang && <p className="text-red-500">{errors.pLang}</p>
              }
            </div>

            <div className="w-72">
              <Select
                value={values.country}
                onChange={(e) => setFieldValue('country', e)}
                name="country"
                label="Select Country">
                <Option value="Nepal">Nepal</Option>
                <Option value="India">India</Option>
                <Option value="China">China</Option>

              </Select>
              {
                errors.country && touched.country && <p className="text-red-500">{errors.country}</p>
              }
            </div>

            <div>
              <Textarea
                value={values.detail}
                onChange={handleChange}
                label="detail"
                name="detail"
              />
              {
                errors.detail && touched.detail && <p className="text-red-500">{errors.detail}</p>}
            </div>

            <Button type="submit" className="py-2">Submit</Button>

          </form>
        }}

      </Formik>

    </div>
  )
}
export default EditForm