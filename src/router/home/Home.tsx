import { useEffect, useState } from "react";
import request from "../../api";
import { IPhone } from "../../types";
import { FaBatteryFull, FaMemory, FaMobileAlt, FaDollarSign, FaTrash, FaEdit } from "react-icons/fa";

const Home = () => {
  const [data, setData] = useState<IPhone[]>([]);

  useEffect(() => {
    request.get("/phones").then((res) => setData(res.data));
  }, []);

  const handleDelete = (id: number) => {
    request.delete(`/phones/${id}`).then(() => {
      setData((prevData) => prevData.filter((phone) => phone.id !== id));
    });
  };

  const handleEdit = (id: number) => {
    const newModel = prompt("Enter new model name:");
    if (newModel) {
      request.put(`/phones/${id}`, { model: newModel }).then(() => {
        setData((prevData) =>
          prevData.map((phone) => (phone.id === id ? { ...phone, model: newModel } : phone))
        );
      });
    }
  };

  return (
    <div className=" bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8 flex flex-wrap justify-center gap-8">
      {data.map((phone: IPhone) => (
        <div
          key={phone.id}
          className="relative bg-gray-800 bg-opacity-60 backdrop-blur-xl shadow-2xl rounded-3xl p-6 w-80 border border-gray-700 transition-all duration-300 transform overflow-hidden"
        >
          
          <img src={phone.imageUrl} alt={phone.model} className="w-full h-40 object-cover rounded-xl mb-4" />
          <h1 className="text-2xl font-extrabold text-blue-400 z-10 relative">{phone.brand}</h1>
          <p className="text-gray-300 mt-3 text-sm z-10 relative flex items-center"><FaMobileAlt className="mr-2" /> Model: <span className="font-semibold text-white ml-1">{phone.model}</span></p>
          <p className="text-gray-400 text-sm z-10 relative flex items-center"><FaBatteryFull className="mr-2 text-green-400" /> Battery: <span className="font-semibold text-green-400 ml-1">{phone.battery} mAh</span></p>
          <p className="text-gray-300 text-sm z-10 relative flex items-center"><FaMemory className="mr-2 text-purple-400" /> Storage: <span className="font-semibold text-white ml-1">{phone.storage} GB</span></p>
          <p className="text-gray-300 text-sm z-10 relative flex items-center"><FaMemory className="mr-2 text-blue-400" /> RAM: <span className="font-semibold text-white ml-1">{phone.ram} GB</span></p>
          <p className="text-gray-300 text-sm z-10 relative">Screen: <span className="font-semibold text-white">{phone.screenSize} inches</span></p>
          <p className="text-gray-300 text-sm z-10 relative">Camera: <span className="font-semibold text-white">{phone.camera} MP</span></p>
          <p className="text-gray-300 text-sm z-10 relative">Color: <span className="font-semibold text-white">{phone.color}</span></p>
          <p className="text-green-400 text-lg mt-4 font-bold z-10 relative flex items-center"><FaDollarSign className="mr-2" /> ${phone.price}</p>
          <div className="flex justify-between mt-4">
            <button onClick={() => handleEdit(phone.id)} className="text-yellow-400 p-3 border rounded-2xl hover:text-white transition-all duration-300 flex items-center space-x-1 cursor-pointer">
              <FaEdit /> <span>Edit</span>
            </button>
            <button onClick={() => handleDelete(phone.id)} className="text-red-500 p-3 border rounded-2xl hover:text-white transition-all duration-300 flex items-center space-x-1">
              <FaTrash /> <span>Delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;