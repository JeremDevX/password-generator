import PasswordContainer from "@/components/PasswordContainer/PasswordContainer";
import PasswordForm from "@/components/PasswordForm/PasswordForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="flex flex-col items-center justify-center gap-4 w-142">
        <h1 className="text-2xl font-bold">Password generator</h1>
        <PasswordContainer />
        <PasswordForm />
      </section>
    </main>
  );
}
