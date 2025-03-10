// app/auth/signin/page.tsx
import Container from '@/components/common/container';
import SignInForm from '@/components/signin-form';

export default function SignInPage() {
  return (
    <section>
      <Container className="flex items-center justify-center py-16">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="mt-2 text-gray-600">Welcome back! Please sign in to your account.</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <SignInForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
