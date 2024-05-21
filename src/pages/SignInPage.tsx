import { Title } from '@mantine/core';
import { Logo, SignInForm } from '@medplum/react';
import { useNavigate } from 'react-router-dom';

export function SignInPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <SignInForm
      projectId={import.meta.env.VITE_MEDPLUM_PROJECT_ID as string}
      googleClientId={import.meta.env.VITE_MEDPLUM_GOOGLE_CLIENT_ID as string}
      onSuccess={() => navigate('/')}
    >
      <Logo size={40} />
      <Title>Sign in to Medplum</Title>
    </SignInForm>
  );
}
