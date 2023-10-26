// import App from "../../../components/others/loginForm";
// import loginForm from "../../../components/others/loginForm";
import LoginForm from "../../../components/others/loginForm"

export default function Page(){
    return (
        <main className="w-1/2">
            Welcome to the Login Page.
            <div className="p-4 m-4">
                <LoginForm />
            </div>
        </main>
    );
}