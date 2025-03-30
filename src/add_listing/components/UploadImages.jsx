import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

import { storage } from "../../../configs/firebaseConfig";
import { db } from "/configs";
import { CarImages } from "../../../configs/schema";

import { IoMdCloseCircle } from "react-icons/io";

import { ToastContainer, toast, Slide } from 'react-toastify';


const UploadImages = ({ trigerUploadImages, setLoader, navigate }) => {

    const [selectFieldList, setSelectFieldList] = useState([])
    const [success, setSuccess] = useState(false); // New state variable

    useEffect(() => {
        if (trigerUploadImages) {
            uploadImagesToServer();
        }
    }, [trigerUploadImages]);

    useEffect(() => {
        if (success) {
            toast.success('Images uploaded successfully!', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
            setTimeout(() => {
                navigate('/profile');
                setLoader(false);
            }, 5000); // Wait for 5 seconds (same as toast duration)
        }
    }, [success, navigate, setLoader]);

    const onFileSelected = (event) => {
        const files = event.target.files;
        for (let i = 0; i < files?.length; i++) {
            const file = files[i];
            setSelectFieldList(prev => [...prev, file])
        }
    }

    const removeImage = (image) => {
        const updatedList = selectFieldList.filter((item) => item !== image);
        setSelectFieldList(updatedList);
    }

    const uploadImagesToServer = async () => {
        setLoader(true);
        try {
            for (const file of selectFieldList) {
                const fileName = Date.now() + "-" + file.name;
                const storageRef = ref(storage, "car-market/" + fileName);
                const metaData = { contentType: file.type };

                await uploadBytes(storageRef, file, metaData);
                const downloadUrl = await getDownloadURL(storageRef);

                await db.insert(CarImages).values({
                    carListingId: trigerUploadImages,
                    imageUrl: downloadUrl,
                });

                toast.success(`File ${file.name} uploaded successfully!`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
            }
            setSelectFieldList([]); // Clear the list after successful upload
            setSuccess(true); // Set success to true after successful upload
        } catch (error) {
            console.error("Error uploading file:", error);
            toast.error(`Error uploading file: ${error.message}`, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
        }
    };

    return (
        <div>
            <ToastContainer />
            <h2 className="font-medium text-xl my-10">Upload Car Images</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {selectFieldList.map((image, index) => (
                    <div key={index}>
                        <IoMdCloseCircle
                            className="text-primary cursor-pointer absolute m-1"
                            onClick={() => { removeImage(image) }}
                        />
                        <img src={URL.createObjectURL(image)} alt={image.name} className="w-full h-[130px] object-cover rounded-xl" />
                    </div>
                ))}
                <label htmlFor="upload-images">
                    <div className="border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md transition-all duration-300">
                        <h2 className="text-lg text-center text-primary">+</h2>
                    </div>
                </label>
                <input
                    onChange={onFileSelected}
                    type="file"
                    multiple={true}
                    id="upload-images"
                    className="hidden" />
            </div>
        </div>
    )
}

UploadImages.propTypes = {
    trigerUploadImages: PropTypes.number,
    setLoader: PropTypes.func,
    navigate: PropTypes.func,
}

export default UploadImages
