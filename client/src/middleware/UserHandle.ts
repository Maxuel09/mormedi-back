import { login, register } from "../services/UseSevices";

const HandleUserLogin = async (loginuser: string) => {
    try {
        const res = await login(loginuser);
        return res;
    } catch (error: string | any) {
        console.error('error:', error.message);
        throw error;
    }
    
}

const HandleRegisterUser = async (newUser: string) => {
    const res = await register(newUser)
    return res;
}


export { HandleUserLogin, HandleRegisterUser }