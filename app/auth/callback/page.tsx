"use client"

import AuthService from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMutation } from "react-query";

const Callback = () => {
    const router = useRouter();
    const mutation = useMutation({
        mutationKey: "getToken",
        mutationFn: async (code: string) => AuthService.getToken(code),
        onSuccess: () => {
            router.push("/")
        }
    })


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams);
        let code: string = urlParams.get('code')!;
        mutation.mutate(code);
    }, [])

    
    return (
        <div>callback</div>
    )
}

export default Callback;