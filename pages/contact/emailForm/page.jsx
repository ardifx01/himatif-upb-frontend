import postData from "../../../config/emailFormApi/api/PostData";
import { useState, useEffect } from "react";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

function EmailForm() {
  const [data, setData] = useState({
    subject: "",
    name: "",
    phone: "",
    email: "",
    company: "",
    body: "",
  });
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Data yang akan dikirim:", data);
    try {
      const response = await postData(data);
      console.log("Response dari postData:", response);
      setData({
        subject: "",
        name: "",
        phone: "",
        email: "",
        company: "",
        body: "",
      });
      setIsAlertVisible(true);
    } catch (error) {
      console.error("Error saat mengirim email:", error);
      alert("Email Sent Failed: " + error.message);
    }
  };

  useEffect(() => {
    if (isAlertVisible) {
      const timer = setTimeout(() => {
        setIsAlertVisible(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isAlertVisible]);

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-5 dark:text-neutral-200">
        Mail Form
      </h2>
      {isAlertVisible && (
        <div
          class="p-4 mb-4 animate-fadeinbouncedown text-sm fixed top-30 right-50 text-indigo-600 rounded-xl bg-indigo-50 border border-indigo-400 font-normal"
          role="alert"
        >
          <span class="font-semibold mr-2">Alert</span> Your email has been sent
        </div>
      )}
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Send Email to Our Organization
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Ali Purnama alam"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            placeholder="085511446699"
            type="phone"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Your Email Address</Label>
          <Input
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="alipurnama@mhs.pelitabangsa.ac.id"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="company">Company / Organization</Label>
          <Input
            id="company"
            value={data.company}
            onChange={(e) => setData({ ...data, company: e.target.value })}
            placeholder="Pelita Bangsa "
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="company">Subject</Label>
          <Input
            id="company"
            value={data.subject}
            onChange={(e) => setData({ ...data, subject: e.target.value })}
            placeholder="Pelita Bangsa "
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="body">Message</Label>
          <TextArea
            id="body"
            value={data.body}
            onChange={(e) => setData({ ...data, body: e.target.value })}
            placeholder="....."
            type="textarea"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send Email &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default EmailForm;
