"use client";

import { createZodSync } from "@/utils/zod-sync";
import { Button, Form, Input } from "antd";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email("Harus Email"),
  phone: z.string().optional(),
  address: z.string().optional(),
  roles: z.array(
    z.object({
      name: z.string({ required_error: "Harus Diisi" }),
    }),
  ),
  links: z.array(z.string().url("Harus URL")),
});

const zodSync = createZodSync(schema);

const FormPage = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} onFinish={console.log}>
      <Form.Item name="name" label="name" rules={[zodSync]} required>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="email" rules={[zodSync]} required>
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="No HP" rules={[zodSync]}>
        <Input />
      </Form.Item>
      <Form.Item name="address" label="address" rules={[zodSync]}>
        <Input.TextArea />
      </Form.Item>
      <div>
        <Form.List name="roles">
          {(fields, { add }) => (
            <>
              {fields.map((field) => (
                <Form.Item
                  key={field.key}
                  name={[field.name, "name"]}
                  label="name"
                  rules={[zodSync]}
                  required
                >
                  <Input />
                </Form.Item>
              ))}
              <Button onClick={() => add({})}>Add role</Button>
            </>
          )}
        </Form.List>
      </div>

      <div>
        <Form.List name="links">
          {(fields, { add }) => (
            <>
              {fields.map((field) => (
                <Form.Item
                  key={field.key}
                  name={field.name}
                  label="url"
                  rules={[zodSync]}
                  required
                >
                  <Input />
                </Form.Item>
              ))}
              <Button onClick={() => add("")}>Add link</Button>
            </>
          )}
        </Form.List>
      </div>

      <Button htmlType="submit" style={{ top: 24 }}>
        Submit
      </Button>
    </Form>
  );
};

export default FormPage;
