"use client"
import Input from "@/components/input";
import AuthService from "@/services/auth.service";
import { useState } from "react";

const Auth = () => {
  const [clientId, setClientId] = useState<string>("");
  const submit = () => {
    AuthService.authorize(clientId);
  }

  return (
    <div className="container mx-auto h-screen flex flex-col justify-center">
      <div className="w-full flex">
        <h2>Login</h2>
      </div>
      <div className="mt-10">

      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <Input label="Client Id" placeholder="xxxxxxxxxxxxxxxxx" onChange={(input: string) => setClientId(input)}/>
        </div>
      </div>
      <div>
        <button onClick={submit} className="bg-primary hover:scale-110 text-white font-bold py-2 px-4 rounded">Submit</button>
      </div>
    </div>
  );
};

export default Auth;
