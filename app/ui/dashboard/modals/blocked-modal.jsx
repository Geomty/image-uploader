import BaseModal from "@/app/ui/dashboard/modals/base-modal";
import { buttonStyle } from "@/app/lib/utils";

export default function BlockedModal({ setBlocked }) {
  return <BaseModal h={<>
    <p className="text-2xl text-slate-200 text-center">Missing permissions!</p>
    <div className="w-full flex justify-end">
      <button onClick={() => setBlocked(false)} className={`${buttonStyle} text-2xl`}>Okay</button>
    </div>
  </>} />;
}