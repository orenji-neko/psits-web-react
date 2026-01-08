import type { SetNewPasswordCredentials } from "@/components/auth/SetNewPasswordForm";
import SetNewPasswordForm from "@/components/auth/SetNewPasswordForm";

export default function SetNewPassword() {
  const handleSetNewPassword = (_values: SetNewPasswordCredentials) => {
    // insert login here
  };

  return (
    <div className="flex h-screen w-screen flex-row bg-gray-300">
      <div className="flex w-full items-center justify-center bg-white md:w-1/2">
        <SetNewPasswordForm onResetPassword={handleSetNewPassword} />
      </div>
    </div>
  );
}
