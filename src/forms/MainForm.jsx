import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Components/lib/Button";
import InputField from "../Components/Fields/InputField";
import RadioField from "../Components/Fields/RadioField";
import SelectField from "../Components/Fields/SelectField";
import CheckboxField from "../Components/Fields/CheckboxField";
import TextareField from "../Components/Fields/TextareaField";
import { ApplicationSchema } from "../validation/validationSchema";
import { GENDERS, SKILLS, EDUCATIONS } from "../utils/constants";


export default function MainForm({onSubmit, defaultValues = {}, isEdit = false}) {
  const form = useForm({
    resolver: yupResolver(ApplicationSchema),
    defaultValues: {
      fname: '',
      lname: '',
      email: '',
      phn: '',
      age: '',
      gender: '',
      edu: '',
      skills: [],
      bio: '',
      expsalary: '',
      dob: '',
      ...defaultValues
    }
  });

  const { register, handleSubmit, formState } = form;

  const { errors, isSubmitting } = formState;

  // const onSubmit = (data) => {
  //   //   await new Promise ((r) => setTimeout(r, 1500));
  //   alert("Form Submitted Successfully!");
  //   console.log(data);
  // };

  return (
    <div className="formcontainer w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-amber-100 p-6">
      <form
        action=""
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <InputField
          label="First Name"
          name="fname"
          register={register}
          error={errors.fname?.message}
          type="text"
        />

        <InputField
          label="Last Name"
          name="lname"
          register={register}
          error={errors.lname?.message}
          type="text"
        />

        <InputField
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          type="email"
        />

        <InputField
          label="Phone Number"
          name="phn"
          register={register}
          error={errors.phn?.message}
          type="tel"
        />

        <InputField
            label="Age"
            name="age"
            register={register}
            error={errors.age?.message}
            type="number"
            options={{ 
                valueAsNumber: true,
             }}
        />

        <div className="md:col-span-2">
          <RadioField
            label="Select Your Gender"
            name="gender"
            register={register}
            error={errors.gender?.message}
            type="radio"
            options={GENDERS.map((g) => ({ label: g, value: g.toLowerCase() }))}
          />
        </div>

        <div className="md:col-span-2">
          <SelectField
            label="Education Level"
            name="edu"
            register={register}
            error={errors.edu?.message}
            options={EDUCATIONS}
          />
        </div>

        <div className="skiilcontainer md:col-span-2 flex flex-col gap-2 w-full bg-amber-50 border border-amber-100 rounded-lg p-3">
          <p className="text-sm font-bold">Skills you have</p>
          {SKILLS.map((skill) => (
            <CheckboxField
              key={skill}
              label={skill}
              name="skills"
              value={skill.toLowerCase()}
              register={register}
              error={errors.skills?.message}
            />
          ))}
        </div>

        <div className="md:col-span-2">
          <TextareField
              label="Bio"
              name="bio"
              register={register}
              error={errors.bio?.message}
          />
        </div>

        {/* <FileField
            label="Upload CV"
            name="file"
            register={register}
            error={errors.file?.message}
        /> */}

        <InputField
            label="Expected Salary"
            name="expsalary"
            register={register}
            error={errors.expsalary?.message}
            options={{ 
              valueAsNumber: true, 
            }}
        />

        <InputField
            label="Date of Birth"
            name="dob"
            register={register}
            error={errors.dob?.message}
            type="date"
        />

        <div className="md:col-span-2">
          <Button type="submit" title={isEdit ? 'Update User' : 'Add User'} loading={isSubmitting} fullWidth />
        </div>
      </form>
    </div>
  );
}
