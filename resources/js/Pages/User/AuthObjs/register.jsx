import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

function Register() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
        remember: false,
    })

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/user");
    }

    return <>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-start">
            <label htmlFor="email">Email</label>
            <input value={data.email} onChange={e => setData('email', e.target.value)} className="border-white border-1 w-[10vw] transition-all duration-150 hover:border-l-5 focus:border-l-10" type="email" name="email" id="email"/>
            {errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}

            <label htmlFor="name">Name</label>
            <input value={data.name} onChange={e => setData('name', e.target.value)} className="border-white border-1 w-[10vw] transition-all duration-150 hover:border-l-5 focus:border-l-10" type="text" name="name" id="name"/>
            {errors.name && <div className="text-red-500 text-xs">{errors.name}</div>}

            <label htmlFor="password">Password</label>
            <input value={data.password} onChange={e => setData('password', e.target.value)} className="border-white border-1 w-[10vw] transition-all duration-150 hover:border-l-5 focus:border-l-10" type="password" name="password" id="password"/>
            {errors.password && <div className="text-red-500 text-xs">{errors.password}</div>}    

            <label htmlFor="password_confirmation">Password Confirmation</label>
            <input value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} className="border-white border-1 w-[10vw] transition-all duration-150 hover:border-l-5 focus:border-l-10" type="password" name="password_confirmation" id="password_confirmation"/>
            {errors.password_confirmation && <div className="text-red-500 text-xs">{errors.password_confirmation}</div>}

            {errors.message && <div className="text-red-500 text-xs">{errors.message}</div>}

            <button type="submit" className="mt-[1vh] border-white border-2 w-[50%] self-center rounded-md transition-all duration-150 hover:opacity-75 active:opacity-50">Signup</button>
        </form>
        </>
}

export default Register;