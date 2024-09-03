/*นาย พฤทธิ์ พลนิกร 026640491032-2*/
import { useState } from "react";

let nextId = 1;

export default function CreateCard() {
    const [formData, setFormData] = useState({
        petName: "",
        details: "",
        gender: "other",
        category: "",
        ownerName: "",
        ownerEmail: "",
        imageUrl: ""
    });
    const [cards, setCards] = useState([]);


    const handleInputChange = (e: { target: { id: any; value: any; }; }) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleFileChange = (e: { target: { files: any[]; }; }) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    imageUrl: reader.result as string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClickAdd = () => {
        setCards([
            ...cards,
            {
                id: nextId++,
                ...formData
            }
        ]);
        setFormData({
            petName: "",
            details: "",
            gender: "other",
            category: "",
            ownerName: "",
            ownerEmail: "",
            imageUrl: ""
        });
    };
    return (
        <div className="p-6 font-sans">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">เพิ่มข้อมูลสัตว์เลี้ยง</h1>
            <div className="max-w-md mx-auto mb-6">
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">ชื่อสัตว์เลี้ยง:</label>
                    <input
                        id="petName"
                        value={formData.petName}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">รายละเอียด:</label>
                    <textarea
                        id="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">เพศ:</label>
                    <div className="flex items-center mb-4">
                        <input
                            id="gender"
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label className="ml-2 text-sm font-medium">ชาย</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            id="gender"
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label className="ml-2 text-sm font-medium">หญิง</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="gender"
                            type="radio"
                            name="gender"
                            value="other"
                            checked={formData.gender === "other"}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label className="ml-2 text-sm font-medium">Other</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">หมวดหมู่:</label>
                    <select
                        id="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    >
                        <option value="">-กรุณาระบุ-</option>
                        <option value="Dog">สุนัข</option>
                        <option value="Cat">แมว</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">ชื่อเจ้าของ:</label>
                    <input
                        id="ownerName"
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">อีเมลเจ้าของ:</label>
                    <input
                        id="ownerEmail"
                        value={formData.ownerEmail}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">อัปโหลดภาพ:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                </div>
                <button onClick={handleClickAdd} className="w-full px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    เพิ่มข้อมูลสัตว์เลี้ยง
                </button>
            </div>

            {cards.length > 0 && (
                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-gray-900">ข้อมูลที่เพิ่ม</h2>
                    <table className="min-w-full mt-4 bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b border-gray-300">ภาพ</th>
                                <th className="px-4 py-2 border-b border-gray-300">ชื่อสัตว์เลี้ยง</th>
                                <th className="px-4 py-2 border-b border-gray-300">รายละเอียด</th>
                                <th className="px-4 py-2 border-b border-gray-300">เพศ</th>
                                <th className="px-4 py-2 border-b border-gray-300">หมวดหมู่</th>
                                <th className="px-4 py-2 border-b border-gray-300">ชื่อเจ้าของ</th>
                                <th className="px-4 py-2 border-b border-gray-300">อีเมลเจ้าของ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cards.map((card: any) => (
                                <tr key={card.id}>
                                    <td className="px-4 py-2 border-b border-gray-300">
                                        {card.imageUrl && (
                                            <img
                                                src={card.imageUrl}
                                                alt="Pet"
                                                className="w-16 h-16 object-cover"
                                            />
                                        )}
                                    </td>
                                    <td className="px-4 py-2 border-b border-gray-300">{card.petName}</td>
                                    <td className="px-4 py-2 border-b border-gray-300">{card.details}</td>
                                    <td className="px-4 py-2 border-b border-gray-300">{card.gender}</td>
                                    <td className="px-4 py-2 border-b border-gray-300">{card.category}</td>
                                    <td className="px-4 py-2 border-b border-gray-300">{card.ownerName}</td>
                                    <td className="px-4 py-2 border-b border-gray-300">{card.ownerEmail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
            <a href="/" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Back</a>
        </div>
    );
}