import cleatModel from "../models/cleatModel.js";
import fs from 'fs';
import multer from "multer";

// add cleat item

const addCleat = async (req,res) => {
    
    let image_filename = `${req.file.filename}`;

    const cleat = new cleatModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await cleat.save();
        res.json({success:true,message:"cleat added"})
    } catch(error){
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

export {addCleat}