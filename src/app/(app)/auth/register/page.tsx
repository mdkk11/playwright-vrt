import Container from '@/components/common/container';
import RegisterForm from '@/components/register-form';

export default function RegisterPage() {
  return (
    <section>
      <Container className="flex items-center justify-center py-16">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="mt-2 text-gray-600">Create a new account to get started.</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <RegisterForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
