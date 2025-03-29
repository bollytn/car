import { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { uploadBytes, ref, getDownloadURL } from "firebase/storage"

import { storage } from "../../../configs/firebaseConfig"
import { db } from "/configs"
import { CarImages } from "../../../configs/schema"

import { IoMdCloseCircle } from "react-icons/io"

import { ToastContainer, toast, Slide } from 'react-toastify';


const UploadImages = ({ trigerUploadImages }) => {

    const [selectFieldList, setSelectFieldList] = useState([])

    useEffect(() => {
        if (trigerUploadImages) {
            uploadImagesToServer()
        }
    }, [trigerUploadImages])



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

    const uploadImagesToServer = () => {
        selectFieldList.forEach((file) => {
            const fileName = Date.now() + 'jpeg';
            const storageRef = ref(storage, 'car-market/' + fileName);
            const metaData = { contentType: 'image/png' };
            uploadBytes(storageRef, file, metaData)
                .then((snapshot) => {
                    toast.success('File uploaded successfully:', snapshot.ref.fullPath, {
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
                }).then(resp => {
                    getDownloadURL(storageRef, resp).then(async (downloadUrl) => {
                        console.log(downloadUrl);
                        await db.insert(CarImages).values({
                            carListingId: trigerUploadImages, imageUrl: downloadUrl
                        })
                    })
                })
                .catch((error) => {
                    toast.error('Error uploading file:', error.message, {
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
                });
        });
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
    trigerUploadImages: PropTypes.bool
}

export default UploadImages