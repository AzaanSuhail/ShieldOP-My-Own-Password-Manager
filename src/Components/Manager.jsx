import React, { useEffect, useRef, useState } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    let passwordArray;

    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
    console.log(passwordArray);
  };

  const showPassword = () => {
    alert("Bhang Bhosra");
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/eyecross.png";
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="w-full absolute top-0  h-full bg-white -z-10">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(114,200,130,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className=" mycontainer">
        <h1 className="text-4xl font-bold text-center" w-32>
          <span className="text-green-500">&lt;</span>
          Shied<span className="text-green-500">OP</span>
          <span className="text-green-500">/&gt;</span>
        </h1>
        <p className="text-lg text-center tw-32ext-green-900">
          Your own Password Manager
        </p>

        <div className="flex flex-col items-center pw-32text-black gminap-3">
          <input
            onChange={handleChange}
            value={form.site}
            placeholder="Enter Website URL"
            className="w-full p-4 py-1 border border-green-500 rounded-full"
            type="text"
            name="site"
            id=""
            onChange={handleChange}
          />
          <div className="flex w-full gap-8 pb-3">
            <input
              value={form.username}
              placeholder="Enter user name"
              className="w-full p-4  border py-1 border-green-500 rounded-full "
              type="text"
              name="username"
              id=""
              onChange={handleChange}
            />

            <div className="relative">
              <input
                value={form.password}
                placeholder="Enter Password"
                className="w-full p-4 py-1 border border-green-500 rounded-full"
                type="text"
                name="password"
                id=""
                onChange={handleChange}
              />
              <span
                className="absolute right-[3px] top-[3px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1 "
                  src="icons/eye.png"
                  alt="eye"
                  width={26}
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex items-center justify-center gap-2 px-8 py-2 font-bold bg-green-400 border border-green-900 rounded-full hover:bg-green-300"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-3">Your Passwords</h2>
          {
            passwordArray.length==0 && <div>No passwords to show</div>
          }
          
         {passwordArray.length!=0 && <table class="table-auto w-full rounded-md overflow-hidden">
            <thead className="text-white bg-green-800">
              <tr>
                <th className="py-1">Site</th>
                <th className="py-1">Username</th>
                <th className="py-1">Password</th>
              </tr>
            </thead>
            <tbody className="overflow-auto bg-green-100 rounder-lg">
              {passwordArray.map((item,index) => {
  return (
    <tr key={index} > {/* Add a unique key prop if possible */}
      <td className="text-center w-32">
  <a href={item.site} target="_blank" rel="noopener noreferrer">
    {item.site}
  </a>
</td>

      <td className="text-center w-32">
        {item.username}
      </td>
      <td className="text-center w-32">
        {item.password}
      </td>
    </tr>
          );
         })}

            </tbody>
          </table>}
          
        </div>
      </div>
    </>
  );
};

export default Manager;
