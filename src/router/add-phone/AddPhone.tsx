import type { FormProps } from "antd";
import { Button, Form, Input, InputNumber, message } from "antd";
import { IPhone } from "../../types";
import request from "../../api";

const AddPhone: React.FC = () => {
  const onFinish: FormProps<IPhone>["onFinish"] = (values) => {
    console.log("Success:", values);
    const formData = new FormData();
    
    formData.append("brand", values.brand);
    formData.append("model", values.model);
    formData.append("price", String(values.price));
    formData.append("stock", String(values.stock));
    formData.append("color", values.color?.toString() || "");
    formData.append("storage", String(values.storage));
    formData.append("ram", String(values.ram));
    formData.append("screenSize", values.screenSize?.toString() || "");
    formData.append("battery", values.battery?.toString() || "");
    formData.append("camera", values.camera?.toString() || "");
    formData.append("imageUrl", values.imageUrl);

    request
      .post("/phones", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      
      .then(() => {
        message.success("Product successfully added!");
      })
      .catch((error) => {
        message.error("Failed to add product");
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-8">
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ stock: 0 }}
        onFinish={onFinish}
        autoComplete="off"
        className="bg-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-700 max-w-lg w-full 
                   text-white backdrop-blur-xl bg-opacity-80 space-y-6"
      >
        <h2 className="text-4xl font-extrabold text-cyan-400 text-center mb-6 tracking-wider drop-shadow-lg">
          Add New Futuristic Phone
        </h2>

        <Form.Item<IPhone> label="Brand" name="brand" rules={[{ required: true, message: "Please input phone's brand!" }]}> 
          <Input className="bg-gray-800 border border-cyan-500 text-white px-5 py-3 rounded-lg focus:ring-4 focus:ring-cyan-400 focus:outline-none transition" />
        </Form.Item>

        <Form.Item<IPhone> label="Model" name="model" rules={[{ required: true, message: "Please input phone's model!" }]}> 
          <Input className="bg-gray-800 border border-cyan-500 text-white px-5 py-3 rounded-lg focus:ring-4 focus:ring-cyan-400 focus:outline-none transition" />
        </Form.Item>

        <Form.Item<IPhone> label="Price ($)" name="price" rules={[{ required: true, message: "Please input phone's price!" }]}> 
          <InputNumber min={0} className="w-full bg-gray-800 border border-cyan-500 text-white px-5 py-3 rounded-lg focus:ring-4 focus:ring-cyan-400 focus:outline-none transition" />
        </Form.Item>

        <Form.Item<IPhone> label="Stock" name="stock" rules={[{ required: true, message: "Please input phone's stock!" }]}> 
          <InputNumber min={0} className="w-full bg-gray-800 border border-cyan-500 text-white px-5 py-3 rounded-lg focus:ring-4 focus:ring-cyan-400 focus:outline-none transition" />
        </Form.Item>

        <Form.Item<IPhone> label="Color" name="color"> 
          <Input className="bg-gray-800 border border-cyan-500 text-white px-5 py-3 rounded-lg focus:ring-4 focus:ring-cyan-400 focus:outline-none transition" />
        </Form.Item>

        <Form.Item<IPhone> label="Storage (GB)" name="storage" rules={[{ required: true, message: "Please input phone's storage!" }]}> 
          <InputNumber min={1} className="w-full bg-gray-800 border border-cyan-500 text-white px-5 py-3 rounded-lg focus:ring-4 focus:ring-cyan-400 focus:outline-none transition" />
        </Form.Item>

        <Form.Item<IPhone> label="RAM (GB)" name="ram" rules={[{ required: true, message: "Please input phone's ram!" }]}> 
          <InputNumber min={1} className="w-full bg-gray-800 border border-cyan-500 text-white px-5 py-3 rounded-lg focus:ring-4 focus:ring-cyan-400 focus:outline-none transition" />
        </Form.Item>

        <Form.Item<IPhone> label="Screen Size (inches)" name="screenSize"> 
          <Input className="bg-gray-800 border border-cyan-500 text-white px-5 py-3 rounded-lg focus:ring-4 focus:ring-cyan-400 focus:outline-none transition" />
        </Form.Item>

        <Form.Item<IPhone> label="Battery (mAh)" name="battery"> 
          <Input className="bg-gray-800 border border-cyan-500 text-white px-5 py-3 rounded-lg focus:ring-4 focus:ring-cyan-400 focus:outline-none transition" />
        </Form.Item>

        <Form.Item<IPhone> label="Camera (MP)" name="camera"> 
          <Input className="bg-gray-800 border border-cyan-500 text-white px-5 py-3 rounded-lg focus:ring-4 focus:ring-cyan-400 focus:outline-none transition" />
        </Form.Item>

        <Form.Item<IPhone> label="Image URL" name="imageUrl"> 
          <Input className="bg-gray-800 border border-cyan-500 text-white px-5 py-3 rounded-lg focus:ring-4 focus:ring-cyan-400 focus:outline-none transition" />
        </Form.Item>

        <Form.Item>
          <Button 
            block 
            type="primary" 
            htmlType="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-3 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPhone;
