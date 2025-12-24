import OTPForm from "@/components/auth/OTPForm";

export default function OTPCode() {
  return (
    <div className="w-screen h-screen bg-gray-300 flex flex-row">
      <div className="w-full md:w-1/2 bg-white flex justify-center items-center">
        <OTPForm />
      </div>
    </div>
  );
}
