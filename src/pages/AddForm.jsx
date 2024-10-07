import { Button, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { Formik } from "formik"

const AddForm = () => {


  return (
    <div className="p-5 max-w-[330px]">
      <Typography variant="h4" className="mb-4">Add a Post</Typography>
      <Formik
        initialValues={{
          title: '',
          detail: '',
          pLang: '',
          country: ''
        }}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue, errors }) => {

          return <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <Input
                value={values.title}
                onChange={handleChange}
                label="Title"
                name="title"
              />
            </div>
            <div className="flex gap-10">
              <Radio
                name="pLang"
                label="HTML"
                onChange={handleChange} value="HTML" />
              <Radio
                name="pLang"
                label="React"
                value="REACT"
                onChange={handleChange} />
            </div>

            <div className="w-72">
              <Select
                onChange={(e) => setFieldValue('country', e)}
                name="country"
                label="Select Country">
                <Option value="Nepal">Nepal</Option>
                <Option value="India">India</Option>
                <Option value="China">China</Option>

              </Select>
            </div>

            <div>
              <Textarea
                value={values.detail}
                onChange={handleChange}
                label="detail"
                name="detail"
              />
            </div>

            <Button type="submit" className="py-2">Submit</Button>

          </form>
        }}

      </Formik>

    </div>
  )
}
export default AddForm