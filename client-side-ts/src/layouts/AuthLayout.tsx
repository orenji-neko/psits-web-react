import { Outlet } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const AuthLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-normal dark:bg-darker p-4">
      <Card className="w-full max-w-md shadow-xl border-border">
        <CardContent className="pt-6">
          <div className="flex flex-col gap-6">
            <div className="space-y-2 text-center">
              <h1 className="heading-2">PSITS Web</h1>
              <p className="info-text">Authentication Portal</p>
            </div>
            <Outlet />
            <div className="flex justify-center">
              <Button className="btn btn-primary w-full">Continue</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
