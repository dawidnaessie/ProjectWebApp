import Button from "./Button";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";

export default function AuthButtons({ isMobile }) {
  return (
    <div className={`${isMobile ? "flex flex-col gap-2 w-full" : "flex gap-2 items-center"}`}>
      {/* Logged out */}
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="bg-emerald-200 text-emerald-900 px-4 py-2 rounded w-full md:w-auto">
            Log in
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button className="bg-emerald-200 text-emerald-900 px-4 py-2 rounded w-full md:w-auto">
            Sign up
          </Button>
        </SignUpButton>
      </SignedOut>

      {/* Logged in */}
      <SignedIn>
        <UserButton
          appearance={{ elements: { userButtonAvatarBox: isMobile ? "h-12 w-12" : "h-20 w-20" } }}
          userProfileMode="navigation"
          signOutRedirectUrl="/"
        />
      </SignedIn>
    </div>
  );
}
