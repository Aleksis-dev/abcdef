import { useForm } from "@inertiajs/react";

function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login");
    }

    return <>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center ">
            <label htmlFor="email">Email</label>
            <input value={data.email} onChange={e => setData('email', e.target.value)} className="border-white border-1 w-[10vw] transition-all duration-150 hover:border-l-5 focus:border-l-10" type="email" name="email" id="email"/>
            {errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}

            <label htmlFor="password">Password</label>
            <input value={data.password} onChange={e => setData('password', e.target.value)} className="border-white border-1 w-[10vw] transition-all duration-150 hover:border-l-5 focus:border-l-10" type="password" name="password" id="password"/>
            {errors.password && <div className="text-red-500 text-xs">{errors.password}</div>}    

            {errors.message && <div className="text-red-500 text-xs">{errors.message}</div>}

            <button type="submit" className="mt-[1vh] border-white border-2 w-[50%] self-center rounded-md transition-all duration-150 hover:opacity-75 active:opacity-50">Login</button>
        </form>
        </>
}

export default Login;