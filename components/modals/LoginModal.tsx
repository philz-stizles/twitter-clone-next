import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Input from "../ui/Input";
import Modal from "../ui/Modal";

const LoginModal = () => {
  const { onClose: closeLoginModal, isOpen } = useLoginModal();
  const { onOpen: openRegisterModal } = useRegisterModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleAuthHandler = useCallback(
    () => {
    closeLoginModal()
    openRegisterModal()
  },
    [closeLoginModal, openRegisterModal],
  )
  ;

  const submitHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      await signIn("credentials", { email, password });
     toast.success('Logged in');
     closeLoginModal()
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [closeLoginModal, email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        isDisabled={isLoading}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        isDisabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using Twitter?
        <span
          onClick={toggleAuthHandler}
          className="
            text-white 
            cursor-pointer 
            hover:underline
          "
        >
          {" "}
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      isDisabled={isLoading}
      isOpen={isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={closeLoginModal}
      onSubmit={submitHandler}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
