import BaseModal from "@/app/ui/dashboard/modals/base-modal";
import { buttonStyle } from "@/app/lib/utils";

export default function ErrorModal({ setError, setThing }) {
  return <BaseModal order={50} h={<>
    <p className="text-2xl text-slate-200 text-center">Something went wrong...</p>
    {setThing && <p className="text-lg text-slate-200 text-center">Tip: Your file name may be invalid.</p>}
    <div className="w-full flex justify-end">
      <button onClick={() => {
        setError(false);
        if (setThing) {
          setThing(false);
        }
      }} className={`${buttonStyle} text-2xl`}>Okay</button>
    </div>
  </>} />;
}