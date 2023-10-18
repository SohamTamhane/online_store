import { useEffect, useState } from "react";
import { storage, db } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {addDoc, collection} from "firebase/firestore";

function AddProduct(){
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(1);
    const [image, setImage] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [imageURL, setImageURL] = useState(null);

    const imageCollectionRef = collection(db, 'products');

    async function uploadFile(){
        const filesFolderRef = ref(storage, `images/${image.name}`);
        try{
            let uploadedFile = await uploadBytes(filesFolderRef, image);
            await getDownloadURL(uploadedFile.ref).then((imgURL)=>{
                setImageURL(imgURL);
            })
            alert('Image Uploaded Successfully !!');
        }
        catch(err){
            console.log(err);
        }
    }

    async function addFunc(){
        if(imageURL!==null){
            const data = {
                name: name,
                category: category,
                price: price,
                url: imageURL,
                quantity, quantity
            }
            try{
                await addDoc(imageCollectionRef, data);
                alert("Product Added Successfully !!");
            }
            catch(error){
                console.log(error);
                alert(error.message);
            }
        }
        else{
            alert("Please Upload Image First !!");
        }
    }

    return(
        <div>
            <h2>Add Products</h2>
            <span>Name: </span>
            <input type="text" onChange={(event=>setName(event.target.value))} /> <br />
            <span>Category: </span>
            <input type="text" onChange={(event=>setCategory(event.target.value))} /> <br />
            <span>Price: </span>
            <input type="number" onChange={(event=>setPrice(event.target.value))} /> <br />
            <span>Image: </span>
            <input type="file" onChange={(event=>setImage(event.target.files[0]))} /> <br />
            <span>Quantity: </span>
            <input type="number" onChange={(event=>setQuantity(event.target.value))} /> <br />
            <button onClick={uploadFile}>Upload Image</button>
            <button onClick={addFunc}>Add Product</button>
        </div>
    )
}
export default AddProduct;