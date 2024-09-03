/*นาย พฤทธิ์ พลนิกร 026640491032-2*/
export function PetHomePage() {
    return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl">My Profile</h1>
        <ul className="list-disc mt-4 pl-6 space-y-2">
          <img src="public/images/3.jpg" alt="myPro" style={{ width: "300px", height: "300px" }} />
          <li>ชื่อ-สกุล: นาย พฤทธิ์ พลนิกร</li>
          <li>ชื่อเล่น: อาร์ม</li>
          <li>รหัสนักศึกษา: 026640491032-2</li>
          <li>
            <a href="mailto:parit_pho@rmutto.ac.th">
              Email: parit_pho@rmutto.ac.th (คลิ๊กที่นี่)
            </a>
          </li>
          <li>เบอร์โทรศัพท์: 0979461019</li>
        </ul>
      </div>
    </div>
        );
    }