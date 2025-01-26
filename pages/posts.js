import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrash, FaUser, FaUserCircle } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
const Correction = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const post = {
      title: e.target.title.value,
      text: e.target.myText.value,
    };
    fetch("https://din-18sc.onrender.com/correction", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ post }),
    })
      .then((res) => res.json())
      .then((inserted) => {
        alert("ok");
      });
  };

  const {
    data: corrections,
    isLoading,
    refetch,
  } = useQuery(["myOrders"], () =>
    fetch(`https://din-18sc.onrender.com/corrections`, {
      method: "GET",
    }).then((res) => res.json())
  );

  const reversedCorrections = corrections?.slice().reverse();
  const handleDelete = (id) => {
    fetch(`https://din-18sc.onrender.com/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          refetch();
        }
      });
  };
  const handleUpdate = (id) => {
    console.log(id);
  };
  if (isLoading)
    return (
      <div className="min-h-screen pt-24 flex justify-center items-center gap-2">
        <FiLoader className="animate-spin text-2xl" />
        <p className="text-center text-2xl">Loading....</p>
      </div>
    );

  return (
    <div className="px-4  text-justify min-h-screen">
      <div className="flex justify-center">
        <div className="w-full ">
          <p className="text-sm px-4 mb-4">
            আপনি আপনার যে কোন চিন্তা ভাবনা পোস্ট করার মাধ্যমে আমাদের সাথে শেয়ার
            করতে পারেন। নিচের ঘরে পোস্টের টাইটেল এবং বিস্তারিত লিখে সাবমিট বাটনে
            ক্লিক করলেই আপনার লেখাটি পোস্ট হয়ে যাবে।
          </p>
          <form onSubmit={handleForm}>
            <label className="font-bold">টাইটেল</label>
            <br />
            <input
              type="text"
              name="title"
              placeholder="টাইটেল"
              className="border rounded border-black w-full p-2"
            />{" "}
            <br /> <br />
            <label className="font-bold">বিস্তারিত</label>
            <br />
            <textarea
              name="myText"
              rows="10"
              className="border rounded border-black w-full p-2"
              placeholder="বিস্তারিত....."
            ></textarea>
            <br />
            <button
              type="submit"
              className="border border-black rounded px-3 py-1"
            >
              সাবমিট
            </button>
          </form>{" "}
        </div>
      </div>

      <div id="" className="pt-36">
        {reversedCorrections.map((correction) => (
          <div
            key={correction._id}
            className="mb-10 border border-black rounded p-2"
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <FaUserCircle className="text-xl" />
                <p> User Name</p>
              </div>

              <div>
                <button
                  onClick={() => handleDelete(correction._id)}
                  className="border border-black text-red-800 rounded p-1"
                >
                  <FaTrash />
                </button>
                <button
                  onClick={() => handleUpdate(correction._id)}
                  className="border border-black text-orange-500 rounded p-1 ml-2"
                >
                  <FaEdit />
                </button>
              </div>
            </div>

            <p className=" font-bold">{correction.post.title}</p>
            <p>{correction.post.text}</p>

            <div className="flex justify-end "></div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Correction;
