// "use client";

// import { FormEvent, useRef, useState } from "react";

// const Contact = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const messageRef = useRef<HTMLTextAreaElement>(null);
//   const [loading, setLoading] = useState(false);

//   const handleFormSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (
//       nameRef.current?.value.trim() === "" ||
//       emailRef.current?.value.trim() === "" ||
//       messageRef.current?.value.trim() === ""
//     ) {
//       return alert("Please Input All Needed Fields Properly");
//     }

//     try {
//       setLoading(true);
//       await new Promise((res, rej) => setTimeout(res, 1000));
//     } catch (e) {
//       console.log((e as Error).message);
//     } finally {
//       setLoading(false);
//       nameRef.current.value = "";
//       emailRef.current.value = "";
//       messageRef.current.value = "";
//     }
//   };

//   return (
//     <section className="bg-[#091b29] text-white p-5 flex justify-center">
//       <div className="max-w-3xl flex gap-4 w-full flex-col items-center">
//         <h1 className="text-2xl">
//           Message <span className="text-emerald-500">Me</span>
//         </h1>
//         <form
//           onSubmit={handleFormSubmit}
//           className="flex w-full flex-col gap-2"
//         >
//           <input
//             required
//             ref={nameRef}
//             type="text"
//             placeholder="Input Your Name"
//             className="p-3 border-white w-full rounded-md bg-transparent border-[1.5px]"
//           />
//           <input
//             required
//             ref={emailRef}
//             type="email"
//             placeholder="Input Your Email"
//             className="p-3 border-white w-full rounded-md bg-transparent border-[1.5px]"
//           />
//           <textarea
//             required
//             ref={messageRef}
//             placeholder="Input Your Message"
//             className="p-3 border-white w-full rounded-md bg-transparent border-[1.5px]"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="rounded-md bg-blue-300 py-3 px-5"
//           >
//             {loading ? "Sending Your Message..." : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
