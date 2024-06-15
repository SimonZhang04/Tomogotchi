import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center space-x-4">
        <MountainIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
        <span className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          Dashboard
        </span>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button>Sign out</Button>
        </form>
      </div>
    </div>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
