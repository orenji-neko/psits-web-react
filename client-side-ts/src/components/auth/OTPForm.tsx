import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Field } from '../ui/field';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';

export default function OTPForm() {
  return (
    <Card className="w-full sm:max-w-md border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-4xl font-semibold">Verification Code</CardTitle>
        <CardDescription>Enter the OTP code sent to your email</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='w-full flex flex-row justify-center'>
          <InputOTP maxLength={4}>
            <InputOTPGroup className='flex flex-row gap-4'>
              <InputOTPSlot index={0} className='shadow-md w-13 h-13' />
              <InputOTPSlot index={1} className='shadow-md w-13 h-13' />
              <InputOTPSlot index={2} className='shadow-md w-13 h-13' />
              <InputOTPSlot index={3} className='shadow-md w-13 h-13' />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="w-full mt-2 text-sm font-extralight text-gray-300 flex flex-row justify-center items-center">
          Didn't receive the code?&nbsp;
          <div className="text-black">
            59s
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Field orientation="vertical">
          <Button>Verify</Button>
          <Button variant='outline'>Back</Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
