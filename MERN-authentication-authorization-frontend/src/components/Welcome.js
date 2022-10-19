import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Input as AntdInput } from "antd";
import "./syles.css";

const Welcome = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
      data.preventDefault();

  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <Controller
          render={({ field }) => <AntdInput {...field} />}
          name="Email"
          control={control}
          defaultValue=""
        />
        <label>Time</label>
        <Controller
          name="Time"
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "9:00 am", label: "9:00 am" },
                { value: "10:00 am", label: "10:00 am" },
                { value: "11:00 am", label: "11:00 am" },
              ]}
            />
          )}
          control={control}
          defaultValue=""
        />
        <label>Meeting Date</label>
        <Controller
          name="Date"
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "20-10-2022", label: "20-10-2022" },
                { value: "21-10-2022", label: "21-10-2022" },
                { value: "22-10-2022", label: "22-10-2022" },
              ]}
            />
          )}
          control={control}
          defaultValue=""
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Welcome;
