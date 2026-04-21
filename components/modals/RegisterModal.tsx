import { ChangeEvent, useCallback, useState } from "react";
import Modal from "../ui/Modal";
import Input from "../ui/Input";
import useRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";
import useLoginModal from "@/hooks/useLoginModal";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const { onClose: closeRegisterModal, isOpen } = useRegisterModal();
  const { onOpen: openLoginModal } = useLoginModal();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleAuthHandler = useCallback(
    () => {
     closeRegisterModal()
    openLoginModal()
  },
    [closeRegisterModal, openLoginModal],
  )
  ;

  const submitHandler = useCallback(
    async () => {
    try {
        setIsLoading(true);
        await axios
        .post("/api/register", {email, name, username, password})
        setIsLoading(false)

      toast.success('Account created.');

    //   signIn('credentials', {
    //     email,
    //     password,
    //   });

      closeRegisterModal();

    } catch (error) {
         console.error(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
        setIsLoading(false);
    }  
  },
    [closeRegisterModal, email, name, password, username],
  )
  ;

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        isDisabled={isLoading}
        placeholder="Email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <Input
        isDisabled={isLoading}
        placeholder="Name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <Input
        isDisabled={isLoading}
        placeholder="Username"
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />
      <Input
        isDisabled={isLoading}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?
        <span
          onClick={toggleAuthHandler}
          className="
            text-white 
            cursor-pointer 
            hover:underline
          "
        >
          {" "}
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      isDisabled={isLoading}
      isOpen={isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={closeRegisterModal}
      onSubmit={submitHandler}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
