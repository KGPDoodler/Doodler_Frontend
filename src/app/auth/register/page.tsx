import RegistrationForm from "@/components/others/registrationForm";
export default function Page(){
    return (
        <main className="w-1/2">
            Welcome to the Registration Page.
            <div className="p-4 m-4">
                <RegistrationForm />
            </div>
        </main>
    );
}