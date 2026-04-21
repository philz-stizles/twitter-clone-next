import useEditModal from "@/hooks/useEditModal";
import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Input from "../ui/Input";
import Modal from "../ui/Modal";

const EditModal = () => {
  const { onClose: closeEditModal, isOpen } = useEditModal();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = useCallback(
    async () => {
    try {
        await axios.put('/api/users/', { name, username, bio})

        toast.success('Account created.')

      closeEditModal();
    } catch (error) {
         console.error(error);
      toast.error("Something went wrong");
    } finally {
        setIsLoading(false);
    }  
  },[])
  
  const bodyContent = (
    <div className="flex flex-col gap-4">
      {/* <ImageUpload value={profileImage} disabled={isLoading} onChange={(image) => setProfileImage(image)} label="Upload profile image" />
      <ImageUpload value={coverImage} disabled={isLoading} onChange={(image) => setCoverImage(image)} label="Upload cover image" /> */}
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        isDisabled={isLoading}  
      />
      <Input 
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        isDisabled={isLoading} 
      />
      <Input 
        placeholder="Bio"
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        isDisabled={isLoading} 
      />
    </div>
  )

  return (
    <Modal
      isDisabled={isLoading}
      isOpen={isOpen}
      title="Edit your profile"
      actionLabel="Save"
      onClose={closeEditModal}
      onSubmit={submitHandler}
      body={bodyContent}
    />
  );
}

export default EditModal